// 371--> cube of 3 + cube of 7+ cube of 1=371 again
//1634 is also armstrong number
let originalNum=371;
let sum=0;
let duplicateOfOriginal=originalNum

while(originalNum>0){
    let output=originalNum%10
    originalNum=Math.floor(originalNum/10)
    sum=sum+(output*output*output)//cube
}
if(sum===duplicateOfOriginal){
    console.log("number is armstrong num")
}else{
    console.log("number is not armstrong num")
}