export default class Likes{
    constructor(){
        this.likes=[];
    }
    
    addLike(id,title,author,img){
        const like ={
            id,
            title,
            author,
            img
        }
        this.likes.push(like);
        
        //Persist data in localstorage
        this.persistData();
        
        return like;
    }

    deleteLike(id){
        const index =this.likes.findIndex(ele=>ele.id ===id);
        this.likes.splice(index,1);
        
        //Persist data in localstorage
        this.persistData();
    }
    
    isLiked(id){
        return this.likes.findIndex(ele=>ele.id===id) !==-1;
    }
    getNumberLikes(){
        return this.likes.length;
    }
    persistData(){
        // Convert JSON to String JSON.stringify
        localStorage.setItem('likes',JSON.stringify(this.likes));
    }
    readStorage(){
        //JSON.parse : convert string to JSON
        const storage =JSON.parse(localStorage.getItem('likes'));
        // Restore likes from localStorage
        if(storage) this.likes=storage;
    }
}