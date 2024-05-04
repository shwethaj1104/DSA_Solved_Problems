// let arr=[1,0,-1,0,-2,2]
let arr=[-3,-2,-1,0,0,1,2,3]
let target =0 // can be any integer
//4 sum is arr[i]+arr[j]+arr[k]+arr[l]=target where i!=j!=k!=l
//output=[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


//BRUTE FORCE APPROACH
//Running 4 inner loops

//TC=O(n**4)
//SC=2*O(number of quads)
const fourSum=(arr,target)=>{
    let n=arr.length
    let output=new Array()
for(let i=0;i<=n-1;i++){
for(let j=i+1;j<=n-1;j++){
for(let k=j+1;k<=n-1;k++){
for(let l=k+1;l<=n-1;l++){
    if(arr[i]+arr[j]+arr[k]+arr[l]===target){
        let temp=[arr[i],arr[j],arr[k],arr[l]]//we will sort and store in set so that we will always store the unique arrays
                temp.sort((a,b)=>a-b)
                output.push(temp)
    }
}
}
}
}
 //store the set in the answer:
 let set  = new Set(output.map(JSON.stringify));
 output = Array.from(set).map(JSON.parse);
return output
}

// console.log("4 sum is",fourSum(arr,target))

//BETTER APPROACH
//TC=O(n**3)+logn --> 3 loops + to find in map
//SC=2*O(number of quads)+o(n)--> temp*output + map
const BETTERfourSum=(arr,target)=>{
    let n=arr.length
    let output=new Array()
for(let i=0;i<=n-1;i++){
for(let j=i+1;j<=n-1;j++){
    let map=new Map()//we have to clear map for every new j to k iteration, so declaring it over here
for(let k=j+1;k<=n-1;k++){
    let FourthElement=target-(arr[i]+arr[j]+arr[k])
    if(map.has(FourthElement)){
        if(arr[i]+arr[j]+arr[k]+FourthElement===target){
            let temp=[arr[i],arr[j],arr[k],FourthElement]//we will sort and store in set so that we will always store the unique arrays
                    temp.sort((a,b)=>a-b)
                    output.push(temp)
        }
    }
    map.set(arr[k])
}
}
}
 //store the set in the answer:
 let set  = new Set(output.map(JSON.stringify));
 output = Array.from(set).map(JSON.parse);
return output
}

// console.log("4 sum better is",BETTERfourSum(arr,target))

//OPTIMAL SOLUTION
//we have to remove extra map and set to store unique 
//will use same like 3 sum pbm

//TC=O(n**3)+logn ==> i+j+for k and l one more loop + sort
//SC=O(n)

const optimalFourSum=(arr,target)=>{
    let n=arr.length
    let output=new Array()
    arr.sort((a,b)=>a-b)
    for(let i=0;i<=n-1;i++){
        if(i>0 && arr[i]===arr[i-1]) continue
        for(let j=i+1;j<=n-1;j++){
        if(j>i+1 && arr[j]===arr[j-1]) continue
            let k=j+1
            let l=n-1
            while(k<l){
            let sum=arr[i]+arr[j]+arr[k]+arr[l]
                if(sum===target){
                    let temp=[arr[i],arr[j],arr[k],arr[l]]//we will sort and store in set so that we will always store the unique arrays
                temp.sort((a,b)=>a-b)
                output.push(temp)
                    //to skip duplicates
                while(k<l && arr[k]===arr[k-1])k++
                while(k<l && arr[l]===arr[l+1])l--
                    k++
                    l++
                }else if(sum<target){
                    k++
                }else{
                    l--
                }
            }
        }
    }
     //store the set in the answer:
 let set  = new Set(output.map(JSON.stringify));
 output = Array.from(set).map(JSON.parse);
    return output
}
console.log("4 sum optimal is",optimalFourSum(arr,target))
