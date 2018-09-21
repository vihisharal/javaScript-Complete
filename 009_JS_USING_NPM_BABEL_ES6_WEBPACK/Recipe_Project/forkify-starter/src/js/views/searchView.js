/*
// Testing_Perpose
export const add =(a,b)=> a+b;
export const multiply =(a,b)=> a*b;
export const ID=23;
*/
import {elements} from 'base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
};
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};
export const clearResultElement = () => {
    elements.searchRes.innerHTML = '';
};

export const hightlightSelected= id=>{
    const resultsArr= Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(ele=> {ele.classList.remove('results__link--active')});
    document.querySelector(`.results__link[href*="#${id}"]`).classList.add('results__link--active');
};

// pasta with chiess and tomato
// acc=0,acc+cur.length = 5  ;newTitle=['pasta'];
// acc=5,acc+cur.length = 5+4  ;newTitle=['pasta','with'];
// acc=9,acc+cur.length = 9+5  ;newTitle=['pasta','with','chiess'];
// acc=14,acc+cur.length = 15+3 //limit exceed ;newTitle=['pasta','with','chiess'];

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        // return the result
        return `${newTitle.join(' ')}...`;
    }
    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
        <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
        <p class="results__author">${recipe.publisher}</p>
        </div>
        </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// type 'prev' / 'next'
const createButton = (page, type) => {
    return `
        <button class="btn-inline results__btn--${type} " data-goto="${type==='prev'? page -1 : page+1}">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type==='prev'? 'left' : 'right'}"></use>
            </svg>
            <span>Page ${type==='prev'? page -1 : page+1}</span>
        </button>
    `;
};

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        //only button to go next page
        button = `${createButton(page,'next')}`;
        //
    } else if (page === pages && pages > 1) {
        //only button to go prev page
        button = `${createButton(page,'prev')}`;

    } else {
        // page between fist and last both button
        button = `
            ${createButton(page,'prev')}
            ${createButton(page,'next')}
            `;
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 5) => {
    //console.log(recipes);
    //render result of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    //render result pagination button
    renderButtons(page, recipes.length, resPerPage);
};
