/*
// Testing_Perpose
// Global app controller
import str from './models/Search';

//import {add,multiply,ID} from 'searchView'; //Way-1
//import {add as a,multiply as b,ID as c} from 'searchView'; //Way-2
import * as searchView from 'searchView'; //Way-3
console.log(`Using imported function! ${searchView.add(searchView.ID,10)} and ${searchView.multiply(searchView.ID,3)} and ${str}.`)
*/
//https://food2work.cmo/api/search
// 462b1cc8d4f2730081462fbc65136320

//<site,user,password,key>
//<'https://developer.edamam.com/','abc123@lndex.org','password'>
//<'https://food2work.com','refael.jaithan@lndex.org','password','3396977ecfe77596e35e2e39c314bbdc'>

import Search from 'Search';
import Recipe from 'Recipe';
import List from 'List';
import Likes from 'Likes';
import * as searchView from 'searchView';
import * as recipeView from 'recipeView';
import * as listView from 'listView';
import * as likesView from 'likesView';

import {elements,renderLoader,clearLoader} from 'base';

/**Global state of app
-- Search object
-- Current recipeq object
-- Shopping list object
-- Liked Recipes
*/
const state ={};
window.state =state; 
/*
---Search Controller
*/
const controllSearch=async ()=>{
    // 1.get query from view
    const query = searchView.getInput();
    console.log(query); 
    
    if(query){
        //2.new serch object and to state
        state.search = new Search(query);
        console.log(`2.new serch object and to state`);
        
        //3.Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        try{
            //4.Search for results
            await state.search.getResults();
            console.log(state.search);
            
            console.log(`4.Search for results`);

            //5.render result in UI
            clearLoader();
            searchView.renderResults(state.search.result);
            //console.log(`5.render result in UI`);               
        }catch(e){
            alert('Something wrong with search...: may beyour api key limit expire.');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit',e=>{
    e.preventDefault();
    controllSearch();
});



elements.searchResPages.addEventListener('click',e=>{
    const btn= e.target.closest('.btn-inline');
    console.log(btn);
    if(btn){
        const goToPage=parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
        console.log(goToPage);
    }
});


/*
---Recipe Controller
*/
const controllRecipe= async ()=>{
    //Get id from ur;
    const id=window.location.hash.replace('#','');
    console.log(id);
    if(id){
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        
        // Highlight selected search item
        if(state.search) searchView.hightlightSelected(id);
        console.log(state.search);
        // Create new recipr object
        state.recipe = new Recipe(id);
        
        try{
            // get recipe data and parse ingredients
            await state.recipe.getRecipe();
            console.log(state.recipe);
            window.r=state.recipe;
            state.recipe.parseIngredients();
            console.log(state.recipe);
            
            // Calculate servings and time 
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe,state.likes.isLiked(id));
            console.log(state.recipe);            
        }catch(e){
            alert('Error Processing recipe!.'+e);
            clearLoader();
        }
        
    }
};

//window.addEventListener('hashchange',controllRecipe);
//window.addEventListener('load',controllRecipe);
['hashchange','load'].forEach(event=> 
    window.addEventListener(event,controllRecipe)
);

/*
---List Controller
*/
const controllList= ()=>{
    // create a new list if there is none.
    if(!state.list) state.list=new List();
    
    //add each ingredirent to our list and UI
    state.recipe.ingredients.forEach(ele=>{
        const item =state.list.addItem(ele.count,ele.unit,ele.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click',ele=>{
    const id=ele.target.closest('.shopping__item').dataset.itemid;
    
    //handle the delete button
    if(ele.target.matches('.shopping__delete, .shopping__delete *')){
        // delete from state 
        state.list.deleteItem(id);
        
        //delete from UI
        listView.deleteItem(id);
    }else if(ele.target.matches('.shopping__count-value')){
        // Handle the count update
        const val = parseInt(ele.target.value,10);
        state.list.updateConut(id,val);
    }
});

//TESTING
state.likes = new Likes();

const controllLikes = ()=>{
    if(!state.likes)  state.likes=new Likes();
    const currentID=state.recipe.id;
    
    
    if(!state.likes.isLiked(currentID)){
        //user has NOT yet like recipe
        
        //Add  like to data
        const newLike=state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );
        
        //toggle to  like button
        likesView.toggleLikeBtn(true);
        
        
        // add like to Ui list
        console.log(state.likes);
        
    }else{
        //user has NOT yet like recipe

        //remove  like from data
        state.likes.deleteLike(currentID);

        //toggle to  like button
        likesView.toggleLikeBtn(false);

        //remove like from Ui list
        console.log(state.likes);
    }
    likesView.toggleLikeMenu(state.likes.getNumberLikes());
};

//Handling recipe button click
elements.recipe.addEventListener('click',ele=>{
    if(ele.target.matches('.btn-decrease, .btn-decrease *')){
        // Decrease button click
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);          
        }
    }
    else if(ele.target.matches('.btn-increase, .btn-increase *')){
        // Increase button click
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
    else if(ele.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        // Add ingredientds to shoping list
        controllList();
    }
    else if(ele.target.matches('.recipe__love, .recipe__love *')){
        // Like controller
        controllLikes();
    }
    
    console.log(state.recipe);
});

/*
---Likes Controller
*/


// video 11 .18 apply








