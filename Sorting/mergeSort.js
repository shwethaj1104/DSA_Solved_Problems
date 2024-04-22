// algo is divide and merge
//bubblesort,insertion sort and selection sort will take o(n**2) as time complexity which we will reduce using merge sort algo
let arr1=[3,2,4,1,3]
        // 0 1 2 3 4
// 0 is the lowest and 4 is the highest index

function mergeSort(input,low,high){
    if(low===high)return//when array length is 1, like [3], low=1 and high=1 so that's when we ahev to stop
    let mid=Math.floor((low+high)/2)
    mergeSort(input,low,mid)
    mergeSort(input,mid+1,high)
    merge(input,low,mid,high)
}

// now we need login for merge--line number 12
function merge(input,low,mid,high){
    let temp=[]
    let left=low
    let right=mid+1
    while(left<=mid && right<=high){
        if(input[left]<=input[right]){
            temp.push(input[left])
            left++
        }else{
            temp.push(input[right])
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
    console.log("arr--",temp,left,right)
    for(let i=low;i<=high;i++){
        input[i]=temp[i-low]
    }
}
let n=arr1.length
mergeSort(arr1,0,n-1)
console.log("array",arr1)

//time complexity for mergeSort function that is dividing --o(log base 2 n)
//and for merging the number is o(n)
// so total time complexity=o(n * log base 2 n)
//space complexity at worst case is o(n)