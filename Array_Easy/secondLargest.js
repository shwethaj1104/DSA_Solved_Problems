let arr=[4,2,60,8,3,90,1,2,34,11,678]
let secondLargest;
let firstLargest=arr[0]
for(let i=1;i<=arr.length-1;i++){
    if(arr[i]>firstLargest){
        secondLargest=firstLargest
        firstLargest=arr[i]
    }else if(arr[i]<firstLargest && arr[i]>secondLargest){
        secondLargest=arr[i]
    }
}

console.log('second largest number is - ',secondLargest,firstLargest)
//time complexity--o(n)
// brute force approach first find largest with n loops, then again find second largest with another n-1 loops---time complexity o(2n)



//SECOND SAMLLEST
let arr1=[4,60,8,3,90,1,34,11,2]
let secondSmallest=-1;
let firstSmallest=arr1[0]
for(let i=1;i<=arr1.length-1;i++){
    if(arr1[i]<firstSmallest){
        secondSmallest=firstSmallest
        firstSmallest=arr1[i]
    }
    else if(arr1[i]>firstSmallest && arr1[i]<secondSmallest){
        secondSmallest=arr1[i]
    }
}
console.log("second smallest is - ",secondSmallest,firstSmallest)