/*
// Testing_Perpose
export default "I am exported string";
*/
import axios from 'axios';
import {key,proxy} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {

/*
        //const proxy='https://crossorigin.me/';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '6d91b18f16442243718169a5ac6d9696';
        https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=6d91b18f16442243718169a5ac6d9696&q=chicken
         https://www.food2fork.com/api/get?key=6d91b18f16442243718169a5ac6d9696&rId=35382 
*/
        console.log('proxy : '+proxy);
        console.log('key : '+key);
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            console.log(error);
        }
    }
}
