import axios from 'axios';
import {
    key,
    proxy
} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            
            this.title=res.data.recipe.title;
            this.author=res.data.recipe.publisher;
            this.img=res.data.recipe.image_url;
            this.url=res.data.recipe.source_url;
            this.ingredients=res.data.recipe.ingredients;
            
        } catch (e) {
            console.log(e);
        }
    }
    
    calcTime(){
        // Assuming that we need 15 min for each ingredients 
        const numImg=this.ingredients.length;
        const periods=Math.ceil(numImg /3);
        this.time=periods *15;
    }
    calcServings(){
        this.servings=4;
    }
    
    parseIngredients(){
        const unitsLong = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups','pounds'];
        const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        const units=[...unitsShort,'kg','g'];
        const newIngredients=this.ingredients.map(ele => {
            // 1 uniform units
            let ingredient = ele.toLowerCase();
                        
            unitsLong.forEach((unit,i)=>{
                ingredient=ingredient.replace(unit,unitsShort[i]);
            });
            
            // 2 remove parenthesis
            ingredient =ingredient.replace(/ *\([^)]*\) */g, ' ');
                                    
            // 3 Parse ingredients into count,unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(ele2 => units.includes(ele2));            
            let objIng;            
            
            if(unitIndex > -1){
                //There is a unit
                //Ex: 4 1/2 cups => arrCount=[4,1/2];
                //Ex: 4 cups  => arrCount=[4];
                const arrCount=arrIng.slice(0,unitIndex);
                let count;
                if(arrCount.length===1){
                    //Ex: 4 cups  => arrCount=[4];
                    count = parseFloat(eval(arrCount[0].replace('-','+'))).toFixed(2);
                }
                else{
                    //Ex: 4 1/2 cups => arrCount=[4,1/2];
                    count = parseFloat(eval(arrIng.slice(0,unitIndex).join('+'))).toFixed(2);
                }
                objIng={
                    count,
                    unit :arrIng[unitIndex],
                    ingredient:arrIng.slice(unitIndex+1).join(' ')
                }    
                
            }else if(parseInt(arrIng[0],10)){
                // there is no unit,but 1st element is number     
                objIng={
                    count:parseInt(arrIng[0],10),
                    unit :'',
                    ingredient:arrIng.slice(1).join(' ')
                }    
                
            }else if(unitIndex ===-1){
                //There is no unit and no number in 1st position.
                objIng ={
                    count : 1,
                    unit : '',
                    ingredient
                }
            }
            return objIng;
        });
        this.ingredients = newIngredients;
    }
    
    updateServings(type){
        // Servings
        const newServings =type==='dec'? this.servings -1:this.servings +1;
        
        //Ingredients
        this.ingredients.forEach(ing=>{
            ing.count *= (newServings/this.servings);
        });
        
        this.servings =newServings;
    }
    
}



// video 11 > 20 apply