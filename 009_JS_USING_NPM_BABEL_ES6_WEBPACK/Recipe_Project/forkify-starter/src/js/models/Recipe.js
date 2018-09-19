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
            alert('Something went wrong :(');
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
}
