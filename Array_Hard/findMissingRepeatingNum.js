const arr=[4,3,6,2,1,1]
const n=6

//output=missing=5 and repeating=1
//TC=O(N**2)
//SC=O(1)
const missAndRepeat=(arr,n)=>{
    const len=arr.length
    let missingNum=-1;
    let repeatingNum=-1;
    for(let i=1;i<=n;i++){
        let count=0
        for(let j=0;j<=len-1;j++){
            if(i===arr[j]){
                count++
            }
        }
        if(count===0){
            missingNum=i
        }
        else if(count>1){
            repeatingNum=i
        }
        //once we get both missing and repeating num break out of loop
        if(missingNum!==-1 && repeatingNum!==-1){
            break 
        }
    }
    return [missingNum,repeatingNum]
}
// console.log("missing and repeating nums are",missAndRepeat(arr,n))

//TC=O(2N)
//SC=O(n+1)
const betterMissRepeat=(arr,n)=>{
    let output=new Array(n+1).fill(0)
    const len=arr.length
    let missingNum=-1;
    let repeatingNum=-1;
    for(let i=0;i<=n-1;i++){
        output[arr[i]]++
    }
    for(let i=1;i<=n;i++){
        if(output[i]===0){
            missingNum=i
        }else if(output[i]>1){
            repeatingNum=i
        }
        if(missingNum!==-1 && repeatingNum!==-1){
            break 
        }
    }
    return [missingNum, repeatingNum]
}


// console.log("missing and repeating nums are",betterMissRepeat(arr,n))

//TC=O(n)
//SC=O(1)

const optimalMissingRepeat=(arr,n)=>{
let len=arr.length
//calculate sum and sumOfSqures for n natural numbers
let sum=(n*(n+1))/2;
let sumOfSqures=(n*(n+1)*(2*n+1))/6
//calculate sum and sumOfSqures for the given array
let sumArr=0
let sumOfSquresArr=0
for(let i=0;i<=len-1;i++){
sumArr=sumArr+arr[i]
sumOfSquresArr=sumOfSquresArr+(arr[i] * arr[i])
}
//we have 2 equations after-> sumArr-sum=val1 and sumOfSquresArr - sumOfSqures =val2
let val1 = sumArr-sum //will give x-y
let val2 = sumOfSquresArr - sumOfSqures

val2=val2/val1; //will give x+y

const x=(val1+val2)/2  //repeating num
const y=x-val1 //missing num
return [y,x]

}
console.log("missing and repeating nums are",optimalMissingRepeat(arr,n))