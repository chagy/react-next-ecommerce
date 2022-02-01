
interface Person {
        name: string,
        age: number
    }

// type Person = {
//     name: string,
//     age: number
// }

type Data = string

export default function play(){
    // console.log("Hellow World")
    const name: string = "Filip"
    const age: number = 30

    const person: Person = {
        name: "John",
        age: 34
    }

    function logPersonInfo(personName: string,personAge: number){
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

    logPersonInfo(name,age)
    // logPersonInfo(true,false)
    // logPersonInfo(12,12)
    // logPersonInfo(null,undefined)
    logPersonInfo2(person)
}