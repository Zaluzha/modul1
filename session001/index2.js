"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "zaky luthfan zhafiri";
console.log(myName);
var hobbies = ["Swimming", "Running", "Sleeping"];
console.log(hobbies);
var person = {
    name: "zaky luthfan zhifiri",
    title: "gamer",
    age: 27
};
console.log(person);
console.log(myName.split("a"));
console.log(myName.split(""));
console.log("Zaky \n    Luthfan \n    Zhafiri\n    ".concat(myName, "\n"));
console.log(typeof (myName));
console.log(typeof (person));
var myNumber = 125;
var myTime = "226";
var myCross = 1;
console.log(myNumber.toFixed());
console.log(parseFloat(myTime));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(person.title);
console.log(person.name);
console.log(person.age);
console.log(myNumber + myCross);
console.log(myNumber * 100);
console.log(myNumber + myTime);
console.log(Boolean(1)); //true
console.log(Boolean("")); //false
console.log(Boolean("Hello")); //true
var myDate = new Date(); // mengubah class menjadi object
console.log(new Date());
console.log(new Date(0));
console.log(new Date(365 * 24 * 60 * 60 * 1000));
console.log(new Date("2024/10/23"));
console.log(new Date("2024/10/23 16:00:00"));
console.log(myDate.getFullYear());
console.log(Math.pow(myNumber, 2));
var num = 5;
var res = num;
console.log(res);
res += 10;
res *= 5;
console.log(res);
myNumber = 100;
myNumber += 50; // myNumber = myNumber + 50
console.log(myNumber);
myNumber += 100;
console.log(myNumber);
console.log(myNumber++); // ++ dibelakang berarti dia di tambah di log berikutnya (post fix)
console.log(myNumber);
console.log(++myNumber); // ++ didepan berarti dia di tambah di log ini (pre fix)
var num2 = 26;
var num3 = 75;
var num4 = "75";
console.log("-----------------------------------------");
console.log(num2 == num3); //false
console.log(num2 <= num3); //true
console.log(num3 < num2); //false
console.log(num3 > num2); //true
console.log(num3 != num2);
