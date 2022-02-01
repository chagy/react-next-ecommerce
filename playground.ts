


export default function play() {

    // const names: string[] = ["Filip","John"]
    // const numbers: Array<number>= [1,2,3,4,5]

    const random = Math.random() > 0.5 ? "hello" : [1, 2]

    if (typeof random === "string") {
        const upper = random.toUpperCase()
    } else {
        console.log(random)
    }

    console.log(random.length)

}