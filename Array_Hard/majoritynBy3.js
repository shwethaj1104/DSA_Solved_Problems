let arr=[1,1,1,3,3,2,2,2]
//majority element-> in this case given is n/3-> 8/3 to floor=2
//so we can also consider there will at max 2 elements with length greater then 2

let n=arr.length


//BRUTE FORCE APPROACH
//TC=O(n*n)
//SC=O(1) // O(Math.floor(n/3))
const majorityElement=(arr,n)=>{
    let output=new Array()
for(let i=0;i<=n-1;i++){
    let count=0
for(let j=0;j<=n-1;j++){
    if(arr[j]===arr[i]){
        count++
    }
}
if(count>Math.floor(n/3) && !output.includes(arr[i])){
    output.push(arr[i])
}
if(output.length===Math.floor(n/3)){
    break
}
}
return output
}
// console.log("majority elements are",majorityElement(arr,n))

//BETTER APPROACH--Hashing
//TC=O(N+N)
//SC=O(N+N)
const betterMajority=(arr,n)=>{
    let map=new Map()
    let output=new Array()
for(let i=0;i<=n-1;i++){
    if(map[arr[i]]){
    map[arr[i]]=map[arr[i]]+1
    }else{
        map[arr[i]]=1
    }
}
for(let key in map){
    if(map[key]>Math.floor(n/3)){
        output.push(key)
    }
}
return output
}
// console.log("majority elements are",betterMajority(arr,n))

//TC=O(N)
//SC=O(2N)
const betterMajority2=(arr,n)=>{
    let map=new Map()
    let output=new Array()
for(let i=0;i<=n-1;i++){
    if(map[arr[i]]){
    map[arr[i]]=map[arr[i]]+1
    }else{
        map[arr[i]]=1
    }
    if(map[arr[i]]===Math.floor(n/3)+1){
        output.push(arr[i])
    }
}
return output
}
// console.log("majority elements are",betterMajority2(arr,n))

//optimal approach
//we will use majority-n/2 logic only, to be a majority element it must cancel all others and remain in el till last, 
//so if counter=0-> we make counter=1, el=arr[i]
//if arr[i]===el--> counter++
//else counter--

//but in n/3, we know that there will be 2 possible majprity elements so we must consider 2 counters and elements
//TC=O(2N)
//SC=O(N)
const optimalMajority=(arr,n)=>{
    let counter1=0
    let counter2=0
    let ele1=0
    let ele2=0
    let output=new Array()
    for(let i=0;i<=n-1;i++){
        if(counter1===0 && ele2!==arr[i]){
            counter1=1
            ele1=arr[i]
        } else if(counter2===0 && ele1!==arr[i]){
            counter2=1
            ele2=arr[i]
        }
        else if(arr[i]===ele1){counter1++}
        else if(arr[i]===ele2){counter2++}
        else{
            counter1--
            counter2--
        }
    }
    counter1=0
    counter2=0
    for(let i=0;i<=n-1;i++){
        if(arr[i]===ele1){
            counter1++
        }else if(arr[i]===ele2){
            counter2++
        }
    }
    if(counter1>Math.floor(n/3)){
        output.push(ele1)
    }
    if(counter2>Math.floor(n/3)){
        output.push(ele2)
    }
    return output
}
console.log("optiomal majority",optimalMajority(arr,n))