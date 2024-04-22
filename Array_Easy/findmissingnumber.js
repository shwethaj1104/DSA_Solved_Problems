let arr=[1,2,3,4,6,7]
let n=7
//output=4 is missing

//BRUTE FOREC APPROACH
//TC=o(n*n)
//SC=O(1)
// function missingNumber(arr,n){
// let output;
// for(let i=1;i<=n;i++){
// let flag=0
//     for(let j=0;j<=arr.length-1;j++){
//         if(arr[j]==i){
//             flag=1
//             break
//         }
//     }
//     if(flag===0){
//         output=i
//     }
// }
// return output
// }
// console.log("missing num is--",missingNumber(arr,n))

//BETTER APPROACH--Use hash array
//TC=O(arr.length)+o(n)===> o(2n)
//SC=O(n)
// function betterfindmissing(arr,n){
//     let hashArray=new Array(n).fill(0)
//     let output;
// for(let i=0;i<=arr.length-1;i++){
//     hashArray[arr[i]]=arr[i]
// }
// for(let i=1;i<=n;i++){
//     if(hashArray[i]==0){
//         output=i
//     }
// }
// return output
// }
// console.log("missing num is--",betterfindmissing(arr,n))

//OPTIMAL APPROACH--use summation
//we know that sum of n natural numbers is (n*(n+1))/2
//15 in above case
//so we sum up given array elements and sun=bstract with totalsum and we get the missign num
//TC=O(n)
//SC=O(1)
function betterMissingNum(arr,n){
let totalSum=(n*(n+1))/2
let sum=0;
for(let i=0;i<=arr.length-1;i++){
sum=sum+arr[i]
}
return totalSum-sum
}
// console.log("missign num is--",betterMissingNum(arr,n))

//if n is 10^5 then we can;t store the summation value so we will come up with XOR appraoch
//slightly better then summation approach
//TC=O(n)
//SC=O(1)
function bestMissingNum(arr,n){
    let XOR1,XOR2=0;
    for(let i=0;i<=arr.length-1;i++){ //running from 0 to 3
        XOR1=XOR1^arr[i]
        XOR2=XOR2^[i+1] //we need 1 to n that is 1 to 5 so i+1 will run from 1 to 4 and we add one more XOR at line 68 from 5th num
    }
    XOR2=XOR2^n
    return XOR1^XOR2
    }
    console.log("missign num is------",bestMissingNum(arr,n))
