let rectangleLength : number = 5
let rectangleWidth : number = 3
let rectangleArea : number = rectangleLength * rectangleWidth

console.log(rectangleArea)

let rectanglePerimeter : number = 2* (rectangleLength + rectangleWidth)

console.log(rectanglePerimeter)

const PI2 = 3.14159
let circleRadius : number = 5
let circleDiameter : number = circleRadius * 2
let circleCircumference : number = 2 * PI2 * circleRadius
let circleArea = PI2 * (5**2)

console.log(`diameter : ${circleDiameter} , circumference : ${circleCircumference} , area : ${circleArea} `)

let days = 366
let sisaday = days % 365
let sisayears = Math.round(days/365)
let sisamonths = Math.round(sisaday/30)
let sisadays = sisaday % 30

console.log(`${sisayears} year, ${sisamonths} month, ${sisadays} day `)

console.log("-----------------------------------------------------------")
let date1 = new Date("2022/01/20")
let date2 = new Date("2022/01/22")

let diff_in_days = Math.abs(date1.getDay() - date2.getDay())
let diff_in_months = Math.abs(date1.getMonth() - date2.getMonth())
let diff_in_years = Math.abs(date1.getFullYear() - date2.getFullYear())

console.log(`${diff_in_days} days, ${diff_in_months} months, ${diff_in_years} years`)