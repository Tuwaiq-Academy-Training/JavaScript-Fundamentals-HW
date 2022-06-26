// Calculate area of a rectangle
let lengthRectangle = 5
let widthRectangle = 5
let areaRectangle = lengthRectangle * widthRectangle
console.log(`The area of the rectangle is: ${areaRectangle}`)

// The Temperature Converter
let celsius = 100
let fahrenheit = 100
let convertToFahrenheit = (celsius*1.8)+32
let convertToCelsius = (fahrenheit-32)/1.8
console.log(`${celsius}°C is ${convertToFahrenheit}°F`)
console.log(`${fahrenheit}°F is ${convertToCelsius}°C`)

// Numbers' summations
let Numbers = [23,54,32,87,47] , sumNumber = 0
Numbers.forEach((Element)=>{
    sumNumber += Element
})
console.log(sumNumber)


// Maximum number
let numbers = [16,4,2,0,19,6] , max = 0 
for(let i = 0 ; i<= numbers.length; i++){
    if( numbers[i] >= numbers[i+1] && numbers[i] >= numbers[i-1]){
        max = numbers[i]
    }
}
console.log(max)

// Reverse Array
let numbers1 = [1,2,3,4,5,6,7,8,9,10] , reverse = []
reverse = numbers1.reverse()
console.log(reverse)

// stars pattern
let num = 5
for(let i = 1; i <= num ; i++){
    for(let j = 1; j <= i ; j++){
        process.stdout.write("*")
    }
    console.log("\n")
}
