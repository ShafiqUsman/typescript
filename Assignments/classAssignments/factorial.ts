// Factorial of a number

function factor(num:number):number {
    let result = 1
    for (let i = 1; i<=num; i++) {
        result = result * i
    }
    console.log(`Factorial of ${num} = ${result}`)
    return result
}
factor(5)
factor(4)
factor(10)
