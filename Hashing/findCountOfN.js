
let input=[1,2,1,4,3,2,5,3,1]
let numbersToCheck = [1, 2, 56, 7, 3];
// let n=1
// let count=0
//brute force approach-> time complexity is bigo(n)
// for(let i=0;i<=input.length;i++){
// if(input[i]===n) count=count+1
// }
// console.log(`number of times ${n} appears is - `,count)

//using hash method---numbers
let hash=Array(12).fill(0)
for(let num of input){
    hash[num]+=1
}
for(let num of numbersToCheck){
    console.log(`number of times ${num} appears is ${hash[num]}`)
}
//using hash method---characters
let charhash = Array(256).fill(0);
let str = "A!A!B121aba";
let charToCheck = "A!1aJK*(";
for(let ch of str){
    charhash[ch.charCodeAt(0)]+=1
}
for(let ch of charToCheck){
    console.log(`number of times ${ch} appears is ${charhash[ch.charCodeAt(0)]}`)
}