
let arr=[4,2,2,6,4]
let target=6
// output=4 they are [4,2], [6] [2,2,6] [4,2,2,6,4]

//BRUTE FORCE
//TC=O(n**3)
//SC=O(1)
const numberOfXor=(arr,target)=>{
    let n=arr.length
    let count=0
    for(let i=0;i<=n-1;i++){
        for(let j=i;j<=n-1;j++){
            let xor=0
            for(let k=i;k<=j;k++){
                xor=xor^arr[k]
            }
            if(xor===target){
                count++
            }
        }
    }
    return count
}
// console.log("number of xor",numberOfXor(arr,target))

//BETTER FORCE
//TC=O(n**2)
//SC=O(1)
const betternumberOfXor=(arr,target)=>{
    let n=arr.length
    let count=0
    for(let i=0;i<=n-1;i++){
        let xor=0
        for(let j=i;j<=n-1;j++){
                xor=xor^arr[j]
            if(xor===target){
                count++
            }
        }
    }
    return count
}
// console.log("better number of xor",betternumberOfXor(arr,target))

//OPTIMAL FORCE
//TC=O(n)
//SC=O(n)


//         xor
//---------------------
//4    2    2    6    4
//--   ----------------
//x         target
//x=xor^target

const optimalnumberOfXor=(arr,target)=>{
    let n=arr.length
    let count=0
    let map=new Map()
    let xor=0
    map[xor]=1
    for(let i=0;i<=n-1;i++){
        xor=xor^arr[i]
        let findx=xor^target
        if(map[findx]){
            count=count+map[findx]
        }
        if(map[xor]){
            map[xor]++
        }else{
            map[xor]=1
        }
    }
    return count
}
console.log("optimal number of xor",optimalnumberOfXor(arr,target))