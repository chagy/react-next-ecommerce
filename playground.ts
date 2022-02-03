interface Person {
    name: string
}

type CustomArray<T> = {
    [index: number]: T
}

type CustomObject<T = string | number | Person> = {
    [key: string]: T
}

export default function play() {

    const person: CustomObject = {
        "age": 23,
        "name": "ad",
        "city": "add",
        person: {
            name: "Filip"
        }
    }
}