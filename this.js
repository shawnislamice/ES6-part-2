class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    activity(){
        console.log(`${this.name} is doing something`)
    }
}

const person1=new Person("Shawon Islam",24)
person1.sleep()
console.log(person1)
const person2=new Person("Srabon Islam",24)
person2.activity()
console.log(person1)

const lazy=person1.activity
lazy() 
