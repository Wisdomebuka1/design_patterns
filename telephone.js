const {Observer, obs} = require('./observer')
class Telephone {
    constructor(){
        this.observer = {}
    }

    addPhoneNumber(num){
         this.observer = obs.add(num)  
    }

    removePhoneNumber(index){
       this.observer = obs.deleteAList(index)
         
    }

   

    dialPhoneNumber(index){
         this.observer =  obs.readAtIndex(index)
         console.log(`${this.observer} is  dialling `)
      
        
      

    }

    notify(){
        
        for(let ob of Object.values(obs.data)){
            console.log(`${ob} has been added!`)
        }   
        

    }

    readPhoneNumbers(){
           return this.observer = obs.read()
       
    }

    
}

const subject = new Telephone()
subject.addPhoneNumber("09012882882")
subject.addPhoneNumber("0122334")
subject.addPhoneNumber("033333333")
// subject.removePhoneNumber(2)
subject.notify()
console.log(subject.dialPhoneNumber(0))
console.log(subject.readPhoneNumbers())



