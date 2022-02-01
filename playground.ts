
// interface Person {
//         name: string,
//         age: number
//     }

class Person {
    name: string
    age: number

    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }
}

// type Person = {
//     name: string,
//     age: number
// }

type Data = string

// interface PersonLoggerFn {
//     (name: string, age: number): string;
// }

type PersonLoggerFn = (name: string,age: number) => string

export default function play(){
    // console.log("Hellow World")
    const name: string = "Filip"
    const age: number = 30

    const person: Person = {
        name: "John",
        age: 34
    }

    // function logPersonInfo(personName: string,personAge: number) : string{
    //     // const info = "Name: "+personName+", age: "+personAge
    //     const info = `Name: ${personName}, age: ${personAge}`
    //     console.log(info)
    //     return info
    // }

    const logPersonInfo: PersonLoggerFn = (personName: string,personAge: number) : string => {
        // const info = "Name: "+personName+", age: "+personAge
        const info = `Name: ${personName}, age: ${personAge}`
        console.log(info)
        return info
    }


    function logPersonInfo2(person: Person){
        // const info = "Name: "+personName+", age: "+personAge
        const info = `Name: ${person.name}, age: ${person.age}`
        console.log(info)
        return info
    }

    const log = logPersonInfo(name,age)
    // logPersonInfo(true,false)
    // logPersonInfo(12,12)
    // logPersonInfo(null,undefined)
    logPersonInfo2(new Person("Edward",50))
}