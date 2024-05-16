let arr=[40,25,19,12,9,6,2]
//i<j && a[i]>2*a[j]

//[6,2], [9,2], [12,2],[19,2],[25,2],[40,2]
//[19,6],[25,6],[40,6]
//[19,9],[25,9],[40,9]
//[25,12],[40,12]
//[40,19]
//output=15

// TC=O(n**2)
//SC=O(1)

const reversePair=(arr)=>{
    let n=arr.length
    let count=0
    for(let i=0;i<=n-1;i++){
    for(let j=i+1;j<=n-1;j++){
        if(arr[i]>2*arr[j]){
            count++
        }
    }
    }
    return count
}
// console.log("number of reversePair are",reversePair(arr))

//TC=nlogn + (n1+n2s)
//SC=1
function merge(input,low,mid,high){
    // let countOptimal=0
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
                // countOptimal=countOptimal+(mid-left+1) // adding left array length --> mid-(left+1)
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
    // return countOptimal
    }
   
    function countPairs(arr,low,mid,high){
        let cnt=0
        let right=mid+1
        for(let i=low;i<=mid;i++){
            while(right<=high && arr[i]>2*arr[right]){
                right++
            }
            cnt=cnt+right-(mid+1)
        }
        return cnt
    }
    function mergeSort(input,low,high){
    let countOptimal=0
    if (low >= high) return countOptimal
        // if(low===high)return//when array length is 1, like [3], low=1 and high=1 so that's when we ahev to stop
        let mid=Math.floor((low+high)/2)
        countOptimal=countOptimal+mergeSort(input,low,mid)
        countOptimal=countOptimal+mergeSort(input,mid+1,high)
        countOptimal =countOptimal+ countPairs(input, low, mid, high)
        merge(input,low,mid,high)
    return countOptimal
    }
    function optimalCounterinversion(arr){
        let n=arr.length
    return mergeSort(arr,0,n-1)
    // return countOptimal
    }
    
    console.log("optimal:counter inversion",optimalCounterinversion(arr))