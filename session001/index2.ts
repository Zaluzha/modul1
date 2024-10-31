import { title } from "process"

let myName : string = "zaky luthfan zhafiri"
console.log(myName)
const hobbies : Array<string> = ["Swimming","Running","Sleeping"]
console.log(hobbies)

interface THISperson {
    name:string
    age:number
    title:string
}

const person : THISperson = {
    name:"zaky luthfan zhifiri",
    title:"gamer",
    age:27
}


console.log(person)


console.log(myName.split("a"))
console.log(myName.split(""))

console.log(`Zaky 
    Luthfan 
    Zhafiri
    ${myName}
`)

console.log(typeof(myName))
console.log(typeof(person))

let myNumber = 125
let myTime = "226"
let myCross = 1
console.log(myNumber.toFixed())
console.log(parseFloat(myTime))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(person.title)
console.log(person.name)
console.log(person.age)

console.log(myNumber + myCross)
console.log(myNumber * 100)
console.log(myNumber + myTime)

console.log(Boolean(1)) //true
console.log(Boolean("")) //false
console.log(Boolean("Hello")) //true


let myDate : Date = new Date() // mengubah class menjadi object
console.log(new Date())
console.log(new Date(0))
console.log(new Date(365 * 24 * 60 * 60 *1000))
console.log(new Date("2024/10/23"))
console.log(new Date("2024/10/23 16:00:00"))
console.log(myDate.getFullYear())
console.log(myNumber**2)

let num= 5
let res : number = num
console.log(res)

res += 10
res *= 5  
console.log(res)

myNumber = 100
myNumber += 50 // myNumber = myNumber + 50

console .log(myNumber)

myNumber += 100

console.log(myNumber)

console.log(myNumber++) // ++ dibelakang berarti dia di tambah di log berikutnya (post fix)

console.log(myNumber)

console.log(++myNumber) // ++ didepan berarti dia di tambah di log ini (pre fix)


let num2 = 26
let num3 = 75
let num4 = "75"
console.log("-----------------------------------------")
console.log(num2 == num3) //false
console.log(num2 <= num3) //true
console.log(num3 < num2) //false
console.log(num3 > num2) //true

console.log(num3 != num2)//true


