export const elements={
    searchForm:document.querySelector('.search'),
    searchInput:document.querySelector('.search__field'),
    searchResList:document.querySelector('.results__list'),
    searchResPages:document.querySelector('.results__pages'),
    searchRes:document.querySelector('.results'),
    recipe:document.querySelector('.recipe'),
    shopping:document.querySelector('.shopping__list')
}

export const elementStrings={
    loader:'loader'  
};

export const renderLoader= parent=>{
  const loader=`
    <div class="${elementStrings.loader}">
        <svg>
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
};

export const clearLoader= ()=>{
    const loaderEle = document.querySelector(`.${elementStrings.loader}`);
    //console.log(loaderEle);
    if(loaderEle) {loaderEle.parentElement.removeChild(loaderEle);}
};


/*// try
export const saveSearchResultInFile=(title,result)=>{
    fs.writeFile("./${title}.json"
                 ,JSON.stringify(result)
                 ,error=>{
        if(error) { console.log(error); return;}
        console.log('File ${title}.json created.');
    });
}
*/
