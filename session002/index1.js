var age = 21;
if (age >= 17) {
    console.log("you can now create an ID card");
}
else {
    console.log("you are not old enough to create an ID card");
}
var color = "yellow";
if (color === "red") {
    console.log("stop");
}
else if (color === "yellow") {
    console.log("proceed carefully");
}
else if (color === "green") {
    console.log("go ahead");
}
var colors = "blue";
switch (colors) {
    case "red": // color == red
        console.log("stop");
        break;
    case "yellow":
        console.log("proceed carefully");
        break;
    case "green":
        console.log("go ahead");
        break;
    default:
        console.log("invalid color");
}
var expr = "Mangoes";
switch (expr) {
    case "Apples":
        console.log("Apples are Rp.10000,- a pound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and Papayas are Rp.15000,- a pound");
        break;
    default:
        console.log("Sorry, we are out of ".concat(expr));
}
switch (true) {
    case (age >= 17):
        console.log("you are able to graduate");
        break;
    default:
        console.log("youre not old enough to graduate");
        break;
}
console.log("=================================");
console.log(true && true); //true       //&& (and) ==> asalkan ada satu false maka akan false
console.log(true && false); //false
console.log(false && false); // false 
console.log(true || true); // true       //|| (or) ==> asalkan ada satu true maka akan true
console.log(true || false); // true
console.log(false || false); // false
console.log("result : ", 65 >= 55 && ("A" == "A" || 45 <= 55));
console.log("=======================");
console.log(!true); //false
console.log("=========================");
var str = "Typescript";
if (str === "Typescript") {
    if (56 <= 45) {
        console.log("enter");
    }
    else {
        console.log("do not enter");
    }
    console.log("Typescript");
}
else {
    console.log("Not Typescript");
}
console.log("+++++++++++++++++++++++++++++++++++");
var result = (str === "Typescript" ? "Typescript" : "Not Typescript");
console.log(result);
// THE && OPERATOR and THE || OPERATOR
var value1 = 23; //true
var result2 = value1 && "Hello World";
console.log(result2); // Hello World, kanan
var value2 = 0; //false     
var result3 = value2 || "Good Morning";
console.log(result3); // Good morning, kanan
/*
jika falsy value AND value maka yang di assign yang (kiri) value falsy
jika truthy value AND value maka yang di assign yang (kanan) value

jika falsy value OR value maka yang di assign yang (kanan) value
jika truthy value OR value maka yang di assign yang (kiri) value truthy
*/
