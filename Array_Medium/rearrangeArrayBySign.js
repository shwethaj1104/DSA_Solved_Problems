let arr=[3,1,-2,-5,2,-4]
// output=[3,-2,1,-5,2,-4]

//TC=2n
//SC=2n
const reArrangeArray=(arr,n)=>{
let arrP=new Array()
let arrN=new Array()
let j=0;
let k=0;
for(let i=0;i<=n-1;i++){
    if(arr[i]<0){
        arrN.push(arr[i])
    }else{
        arrP.push(arr[i])
    }
}
// for(let i=0;i<=n-1;i++){
//     if(i%2===0){
//         arr[i]=arrP[j]
//         j++
//     }else{
//         arr[i]=arrN[k]
//         k++
//     }
// }
for(let i=0;i<n/2;i++){//TC=n+n/2
        arr[2*i]=arrP[i]
        arr[(2*i)+1]=arrN[i]
}
return arr
}

// console.log("re arranged array --",reArrangeArray(arr,arr.length))

//optimal approach
//TC=O(N)
//SC=O(N)
const betterReArrangeArray=(arr,n)=>{
let output=new Array()
let j=0;
let k=1;
for(let i=0;i<=n-1;i++){
    if(arr[i]>0){
        output[j]=arr[i]
        j=j+2
    }else{
        output[k]=arr[i]
        k=k+2
    }
}
}
// console.log("re arranged array--",betterReArrangeArray(arr,arr.length))

// variety 2::::::::
let arr1=[1,2,-4,-5,3,6]
// output=[1,-4,2,-5,3,6]
// if the problem states that it is not sure if the positives are equal to negatives


//TC=N+N/2+ --> O(2N)
//SC=2N
const reArrangeVariety2 = (arr,n)=>{
    let positives=new Array();
    let negatives=new Array();
    let output=new Array();
for(let i=0;i<=n-1;i++){
    if(arr[i]>0){
        positives.push(arr[i])
    }else{
        negatives.push(arr[i])
    }
}
for(let i=0;i<Math.min(positives.length,negatives.length);i++){
output[2*i]=positives[i]
output[2*i+1]=negatives[i]
}
let index=2*Math.min(positives.length,negatives.length)
let loopEnd;
if(positives.length>negatives.length){
    loopEnd=positives.length
}else{
    loopEnd=negatives.length
}
for(let i=Math.min(positives.length,negatives.length);i<=loopEnd-1;i++){
    if(positives.length>negatives.length){
        output[index]=positives[i]
        index++
    }else{
        output[index]=negatives[i]
    }
}
return output
}
console.log("variety 2 re arranged array --",reArrangeVariety2(arr1,arr1.length))