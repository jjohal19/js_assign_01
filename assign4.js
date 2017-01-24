
const myVal = process.argv

const tipAmount = (myVal[3]/100) * myVal[2]
const totalCost = parseInt(tipAmount) + parseInt(myVal[2])
const output = `Your meal is of $${myVal[2]} + a ${myVal[3]}% tip = ${totalCost}`
console.log(output)