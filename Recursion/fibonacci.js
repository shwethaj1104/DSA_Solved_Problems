// 0,1,1,2,3,5,8,13...
//first fibonacci(n-1) will be called recursively till it return num is 0 or 1 at the end
//after that fibonacci(n-2) will be called
//time complexity is 2 to the power of n
let n=7

function fibonacci(num){
if(num<=1)return num
return fibonacci(num-1)+fibonacci(num-2)

}
console.log(fibonacci(n))