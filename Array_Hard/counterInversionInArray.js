let arr=[5,3,2,4,1]

// we have to find the PerformanceObserverEntryList( set of 2 numbers) in which left element is greater then right
//such pairs are [5,3]. [5,2],[5,4],[5,1],[3,2],[3,1],[2,1],[4,1]
//output= 8

//TC=O(n**2)
//SC=O(1)

const counterInversion=(arr)=>{
    let n=arr.length
    let count=0
    for(let i=0;i<=n-1;i++){
    for(let j=i+1;j<=n-1;j++){
        if(arr[i]>arr[j]){
            count++
        }
    }
    }
    return count
}
// console.log("brute:::counter inversion pairs are",counterInversion(arr))

//OPTIMAL VERSION---USING MERGE SORT
// algo is divide and merge

//TC=O(nlogn)
//SC=O(n)
function merge(input,low,mid,high){
let countOptimal=0
    let temp=[]
    let left=low
    let right=mid+1
    while(left<=mid && right<=high){
        if(input[left]<=input[right]){
            temp.push(input[left])
            left++
        }else{
            //right is smaller
            temp.push(input[right])
            countOptimal=countOptimal+(mid-left+1) // adding left array length --> mid-(left+1)
            right++
        }
    }
    while(left<=mid){
        temp.push(input[left])
        left++
    }
    while(right<=high){
        temp.push(input[right])
        right++
    }
    for(let i=low;i<=high;i++){
        input[i]=temp[i-low]
    }
return countOptimal
}
function mergeSort(input,low,high){
let countOptimal=0
if (low >= high) return countOptimal
    // if(low===high)return//when array length is 1, like [3], low=1 and high=1 so that's when we ahev to stop
    let mid=Math.floor((low+high)/2)
    countOptimal=countOptimal+mergeSort(input,low,mid)
    countOptimal=countOptimal+mergeSort(input,mid+1,high)
    countOptimal=countOptimal+merge(input,low,mid,high)
return countOptimal
}
function optimalCounterinversion(arr){
    let n=arr.length
return mergeSort(arr,0,n-1)
// return countOptimal
}

// let n=arr1.length
// mergeSort(arr1,0,n-1)
console.log("optimal:counter inversion",optimalCounterinversion(arr))

//time complexity for mergeSort function that is dividing --o(log base 2 n)
//and for merging the number is o(n)
// so total time complexity=o(n * log base 2 n)
//space complexity at worst case is o(n)