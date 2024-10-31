let Number1 : number = 6
if (Number1 % 2 === 0) {
    console.log("even number")
} else {
    console.log("odd number")
}

let res = true
for(let i = 2; i < Number1; i++) {
    if(Number1 % i == 0){
        res = false
        break
    }
}

console.log(res == true? "prime" : "not prime")

let a = 10
let b = 4
let c = 0
c = a
a = b
b = c
console.log(a)
console.log(b)

let res1 = 0
for(let i = 1; i <= 5; i++){
    res1 = res1 + i    
}
console.log(res1)

let res4 = 1
for(let i = 6; i >= 1; i--){
    res4 = res4 * i
}
console.log(res4)

let prev_number = 0
let current_number = 1
console.log(" i = ", 1, "current_number = ", current_number)
for(i = 2; i <= 15; i++){
    let temp = prev_number
    prev_number = current_number
    current_number = current_number + temp
    console.log(" i = ", i, "current_number =", current_number)
}