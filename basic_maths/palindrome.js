// reverse of a number is same as original number
let originalNum=12121;
let duplicatenum=originalNum
let reversedNum=0;
let output;

while(originalNum>0){
    output=originalNum%10
    originalNum=Math.floor(originalNum/10)
    reversedNum=(reversedNum*10)+output
}
console.log(reversedNum)
if(reversedNum===duplicatenum){
    console.log("number is palindrome")
}else{
    console.log("number is not palindrome")
}