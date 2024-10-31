//awalan   //batas  //step
for (var i = 0; i <= 5; i += 2) {
    console.log("hello =", i);
}
for (var i = 1; i <= 100; i *= 2) {
    console.log("crack =", i);
}
var j = 0;
while (j <= 5) {
    console.log("hello white", j);
    j++; // j = j + 1
}
console.log(j);
do {
    console.log("hello do while", j);
    j++; // 
} while (j <= 15);
console.log(j);
for (var i = 0; i <= 5; i++) {
    if (i == 3)
        continue;
    console.log(i);
}
console.log("-------------------------------------------");
var resultS = "";
for (var i = 1; i <= 5; i++) {
    resultS += "*";
    console.log(resultS);
}
var result5 = "";
for (var i = 1; i <= 5; i++) {
    result5 += "*";
}
for (var i = 4; i >= 0; i--) {
    console.log(result5[i]);
}
