    //awalan   //batas  //step
for (let i = 0; i <= 5; i+=2) {
    console.log("hello =", i)
}

for (let i = 1; i <= 100; i*=2) {
    console.log("crack =", i)
}

let j = 0

while(j <= 5){
    console.log("hello white", j)
    j++ // j = j + 1
}

console.log(j)

do{
    console.log("hello do while", j)
    j++ // 
} while (j <= 15)

console.log(j)

for(let i = 0; i <= 5; i++ ){
    if (i == 3) continue;
    console.log(i)
}

console.log("-------------------------------------------")
let resultS = ""
for (let i = 1; i <= 5; i++){
    resultS += "*"  
    console.log(resultS)
    
}

let result5 = ""
for(let i= 1; i<=5; i++){
    result5 += "*"    
}

for (let i = 4; i >= 0; i--){
    console.log(result5[i]) 
}