let arr=[2,3,3,1,1,1,1,1,0]
// majority element is elemenet which appears more then n/2 times
// here n is 7, n/2=3
// 2 appears 4 times which is greater then 3 so output is 2

// brute force solutions
//TC=O(N**2)
//SC=O(1)
const majority=(arr,n)=>{
    for(let i=0;i<=n-1;i++){
        let count=0
        for(let j=0;j<=n-1;j++){
            if(arr[j]===arr[i]){
                count++
            }
        if(count>(n/2)){ return arr[i]}
        }
    }
}
// console.log("majority element---",majority(arr,arr.length))

//BETTER SOLUTION
//TC=O(NlogN)+O(N)
//SC=O(N)
const bettermajority=(arr,n)=>{
    let map=new Map()
    for(let i=0;i<=n-1;i++){
        if(map[arr[i]]){
            map[arr[i]]=map[arr[i]]+1
        }else{
            map[arr[i]]=1
        }
        }
        for(let key in map){
        // console.log("map iterate--",key,map[key])
        if(map[key]>(n/2)){return key}
        }
}
// console.log("majority elemenet is--",bettermajority(arr,arr.length))

//optimal solutions-----> moore's voting algorithm
// iterate over the array
//consier element=arr[0] for the first time
//increment count if arr[i]===element
//decerement count if arr[i]!==element
//if count===0 --> make count as 1, and consider element=arr[i+1]

//TC=O(N+N)=O(2N)
//SC=O(1)
const optimalMajority=(arr,n)=>{
    let count=0;
    let counter=0;
    let element;
    for(let i=0;i<=n-1;i++){
        if(count===0){
            count=1
            element=arr[i]
        }else if(arr[i]===element){
            count++
        }else if(arr[i]!==element){
            count--
        }
    }
    if(count!==0){
        for(let i=0;i<=n-1;i++){
            if(arr[i]===element){counter++}
        }
        if(counter>(n/2)){
            return element
        }
    }
    return -1
}
console.log("majority element is---",optimalMajority(arr,arr.length))
