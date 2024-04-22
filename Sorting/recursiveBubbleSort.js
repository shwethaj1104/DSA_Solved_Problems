// let arr1=[52,13,24,46,20,9]
let arr1=[52,345,13,24,1,3456,46,20,9]
// let arr1=[1,2,3,4,5,6,7]
let n=arr1.length
function bubblesort(arr,n){
    if(n==1)return
        let isSwapped=0
        for(let j=0;j<=n-2;j++){
            console.log(`loop ran here`)
            if(arr[j]>=arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                isSwapped=1//set the field if any swap happened in the first level of iteration
                }
        }
        if(isSwapped==0)return //if i return here arr will not be returned so using break
    bubblesort(arr,n-1)
        console.log("array--",arr)
    return arr
}
bubblesort(arr1,n)