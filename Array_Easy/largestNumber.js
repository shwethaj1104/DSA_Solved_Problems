let arr=[7,2,30,4,1,3456,12]
let temp=arr[0]
for(let i=1;i<=arr.length-1;i++){
    if(arr[i]>temp){
        temp=arr[i]
    }
}
console.log('lasrgest element in the array is -',temp)