import uniqid from 'uniqid';
export default class List{
    constructor(){
        this.items=[];
    }
    addItem(count,unit,ingredient){
        const item= {
            id:uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }
    
    deleteItem(id){
        const index =this.items.findIndex(ele=>ele.id ===id);
        // [2,4,8] splice(1,2) -> return [4,8], orginal arr [2]
        // [2,4,8] slice(1,2) -> return 4, orginal arr [2,4,8]
        this.items.splice(index,1);
    }
    
    updateConut(id,newCount){
        this.items.find(ele=> ele.id===id).count= newCount;    
    }
}