// let arr=[-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2]
let arr=[-1,0,1,2,-1,-4]
//output=[-1,2,-1] and [0,1,-1]
//3Sum= a[i]+a[j]+a[k]=0
//where i!=j!=k
//we should not consider same index twice in the single output array combination
//and if we have [-1,2,1] then with same combination we should not have other output, like [1,-1,2] is not acceptable

//BRUTE FORCE APPROACH- iterate over 3 loops
//TC=O(N*N*N)
//SC=2*O(Number of triplets)
const ThreeSum=(arr,n)=>{
    let output=new Array()
for(let i=0;i<=n-1;i++){
    for(let j=i+1;j<=n-1;j++){
        for(let k=j+1;k<=n-1;k++){
            if(arr[i]+arr[j]+arr[k]===0){
                let temp=[arr[i],arr[j],arr[k]]//we will sort and store in set so that we will always store the unique arrays
                temp.sort((a,b)=>a-b)
                output.push(temp)
            }
        }
    }
}
    //store the set in the answer:
    let set  = new Set(output.map(JSON.stringify));
    output = Array.from(set).map(JSON.parse);
    return output
}
// console.log("three sum ",ThreeSum(arr,arr.length))

//BETTER SOLUTION
//instead of kth loop-> we can get arr[k] from arr[i]+arr[j]+arr[k]===0,
//arr[k]=-(arr[i]+arr[j]) from the above formula
//and instead of running loop for k, we can use hashing to look for arr[k] that is -(arr[i]+arr[j])

//take i and j-> if -(arr[i]+arr[j]) is found in hash map then it is a set,
//else put arr[j] on to map and increment j...
//once jth loop is done, inside ith loop reset hash map
//and then again continue with step 1 


//TC=O(n*n) + logn --> 2 loops+ finding in map
//SC=2*O(number of triplets) + O(N)---2 for triplets+N for map
const ThreeSumOptimal=(arr,n)=>{
    let output=new Array()
for(let i=0;i<=n-1;i++){
    let map=new Map()
    for(let j=i+1;j<=n-1;j++){
        for(let k=j+1;k<=n-1;k++){
            let kElement=-(arr[i]+arr[j])
            if(map.has(kElement)){
                let temp=[arr[i],arr[j],kElement]
                temp.sort((a,b)=>a-b)
                output.push(temp)
                            }
            map.set(arr[j])
        }
    }
}
    //store the set in the answer:
    let set  = new Set(output.map(JSON.stringify));
    output = Array.from(set).map(JSON.parse);
    return output
}
// console.log("three sum ",ThreeSumOptimal(arr,arr.length))

//OPTIMAL APPROACH
// 2 pointer approach
//i->start
//j->i+1
//k->end
//if(arr[i]+arr[j]+arr[k]<0)-->we have to increse the sum so increment j
//if(arr[i]+arr[j]+arr[k]>0)--> we have to decrese sum so decrement k
//if(arr[i]+arr[j]+arr[k]==0)--> push the array to output and j++ k--, 
//do above steps only if when j<k
//to avoid duplocate arrays to output- check j<k and arr[j]===arr[j-1] and also for arr[k]==arr[k+1], if so just j++ and k-- respectively

//TC=nlogn + O(n*n)--< sort+for loop * while loop
//SC=O(N)--FOR STORING
const optimal3sum=(arr,n)=>{
    let output=new Array()
    arr.sort((a,b)=>a-b)
    for(let i=0;i<=n-1;i++){
        if(i>0 && arr[i]===arr[i-1]) continue
        let j=i+1
        let k=n-1
        while(j<k){
            let sum=arr[i]+arr[j]+arr[k]
            if(sum===0){
                output.push([arr[i],arr[j],arr[k]])
                j++
                k--
                //to skip duplicates
                while(j<k && arr[j]===arr[j-1])j++
                while(j<k && arr[k]===arr[k+1])k--
            }else if(sum>0){
                 k--
            }else{
                 j++
            }
        }
    }
    return output
}
    console.log("3 sum for given array",optimal3sum(arr,arr.length))