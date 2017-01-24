
const myVal = process.argv
let myArr1 = []
myArr1.push(myVal[2])
myArr1.push(myVal[3])

let Sum = Number(myVal[2]) + Number(myVal[3])

if(Sum > 10 && Sum < 100)
{
    console.log("Total of two numbers is greater than 10 but less than 100")
} 
else if(Sum > 100 && Sum < 1000)
{
    console.log("Total of two numbers is greater than 100 but less than 1000")
} 
