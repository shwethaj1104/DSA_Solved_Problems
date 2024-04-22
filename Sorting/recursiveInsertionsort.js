//it takes an element and always place it in it's correct position
let input= [4,2,1,6,3]
let n=input.length

function selectionsort(arr,low,high){
    // for(let i=0;i<=n-1;i++){
        if(low===high)return
        let j=low;
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j]
            arr[j]=arr[j-1]
            arr[j-1]=temp
            j--
        }
    // }
    console.log("array-->",arr)
    selectionsort(arr,low+1,high)
    // return arr
}
selectionsort(input,0,n)
