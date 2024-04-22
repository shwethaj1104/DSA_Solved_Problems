let array=[13,46,24,52,20,9]
let n=array.length
function selectionSort(arr,low,high){
    if(low==high)return
    // for(let i=0;i<=n-2;i++){
        let mini=low;
        for(let j=low;j<=high;j++){
            if(arr[j]<arr[mini])mini=j
        }
        let temp=arr[mini];
        arr[mini]=arr[low]
        arr[low]=temp
    // }
    console.log("array",arr)
    selectionSort(arr,low+1,high)
    // return array
}
selectionSort(array,0,n-1)