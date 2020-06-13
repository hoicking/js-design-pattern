class Singletone {    

    constructor(name) {
        this.name = name
    }

    static getInstance(name){
        if(!this.instance){
            console.log('===create')
            this.instance =  new Singletone(name)  
        }

        return this.instance
    }

    getName(){
        console.log('======>', this.name)
    }
}

const a = Singletone.getInstance('aa')
const b = Singletone.getInstance('bb')


a.getName()
b.getName()

console.log(a === b) // true