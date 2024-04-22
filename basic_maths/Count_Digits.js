let n=5634
let output=[]
while(n>0){
    let num=n%10;
output.push(num)
    n=Math.floor(n/10)
}
console.log(output.reverse())//to extract number
console.log(output.reverse().length)//to count number of digits

//second approach to count number of digits
let number=5634
let count=0;
while(number>0){
    number=Math.floor(number/10)
    count=count+1
}
console.log("count",count)//to extract number

// //third approach to cunt number of digits====did not work for me
// let number1=5634
// let count1=0;
// while(number1>0){
//     count1=Math.log10(number1)+1//log10 is the number of times a given Number is divisible by 10/so we can consider number of times that loop is run 
// }
// console.log("count1",count1)//to extract number

