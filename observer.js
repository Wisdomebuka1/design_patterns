
class Observer {
    constructor(length, data){
        this.length = 0;
        this.data  = {}
    }

    add(curr){
        this.data[this.length] = curr;
        this.length++;
        return this.length;
   }

   read(){
        return this.data;
   }


   readAtIndex(index){
      return this.data[index]
   }

    deleteAList(index){
        const item = this.data[index];
        this.#shiftItems(index)
        return item;
        

    }

    #shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }


    update(){
        
        for(let ob of Object.values(obs.data)){
            console.log(`${ob} has been added!`)
        }  
    }

    
}


const obs = new Observer();


module.exports = {
    Observer,
    obs
}



