
// function Sum(a,n){
// if(a>n) return
// sum=sum+a
// Sum(a+1,n)
// return sum
// }
// let n=4
// let sum=0
// console.log(Sum(1,n))

//parametrized way
// function Sum(i,sum){
//     if(i<1) {
//         console.log(sum) 
//         return
//     }
//     Sum(i-1,sum+i)
//     }
//     let sum=0
//     let i=4
//     Sum(i,sum)

//functional way
function factorial(n){
    if(n===0) return 0
    return n+factorial(n-1)
}
console.log(factorial(4))