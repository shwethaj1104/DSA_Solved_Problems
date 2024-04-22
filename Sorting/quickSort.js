// quick sort is slightly better then merge sort
//steps===========================
//1. place a pivot(1 st element/last element/middle element/random element of the array)  and place it in it's correct place
//2. after placing ur pivot in it's correct place compare other elements to the pivot and place smaller elements on to left and larger elements on to right
//3. repeat above 2 steps
// merge sort: time complecity is nlogn
//             space complexity=o(n)
// quick sort:time complecity is nlogn
//             no extra array/variable used so it is better then merge sort

let array=[4,6,2,5,7,9,1,3]

function swap(arr,index1,index2){
    let temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp
}

const getPivotIndex=(arr,low,high)=>{
let i=low
let j=high
let pivot=arr[low]
while(i<j){
    while(arr[i]<=pivot && i<= high-1){
        i++
    }
    while(arr[j]>pivot && j>=low+1){
        j--
    }
    if(i<j){
        swap(arr,i,j)//swapping left and right elements
    }
}
swap(arr,low,j)//swapping picot on to jth index, since j will be in the place between high and low elements
return j
}

function quickSort(arr,low,high){
    if(low<high){
       const pivotIndex=getPivotIndex(arr,low,high)
        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
}
quickSort(array,0,(array.length-1))
console.log("array--",array)

// time complexity:nlogn