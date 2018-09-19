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

//<site,user,password>
//<'https://developer.edamam.com/','abc123@lndex.org','password'>
//<'https://food2work.com','koden.rojelio@lndex.org','password'>

import Search from 'Search';
import Recipe from 'Recipe';
import * as searchView from 'searchView';
import {elements,renderLoader,clearLoader} from 'base';

/**Global state of app
-- Search object
-- Current recipeq object
-- Shopping list object
-- Liked Recipes
*/
const state ={};

/*
---Search Controller
*/
const controllSearch=async ()=>{
    // 1.get query from view
    const query = searchView.getInput();
    
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
            console.log(`4.Search for results`);

            //5.render result in UI
            clearLoader();
            searchView.renderResults(state.search.result);
            //console.log(`5.render result in UI`);               
        }catch(e){
            alert('Something wrong with search...');
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
        
        // Create new recipr object
        state.recipe = new Recipe(id);
        
        try{
            // get recipe data
            await state.recipe.getRecipe();

            // Calculate servings and time 
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            console.log(state.recipe);            
        }catch(e){
            alert('Error Processing recipe!.');
        }
        
    }
};

//window.addEventListener('hashchange',controllRecipe);
//window.addEventListener('load',controllRecipe);
['hashchange','load'].forEach(event=> 
    window.addEventListener(event,controllRecipe)
);


// video 11 .18 apply











