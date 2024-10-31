var Number1 = 6;
if (Number1 % 2 === 0) {
    console.log("even number");
}
else {
    console.log("odd number");
}
var res = true;
for (var i = 2; i < Number1; i++) {
    if (Number1 % i == 0) {
        res = false;
        break;
    }
}
console.log(res == true ? "prime" : "not prime");
var a = 10;
var b = 4;
var c = 0;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);
var res1 = 0;
for (var i = 1; i <= 5; i++) {
    res1 = res1 + i;
}
console.log(res1);
var res4 = 1;
for (var i = 6; i >= 1; i--) {
    res4 = res4 * i;
}
console.log(res4);
