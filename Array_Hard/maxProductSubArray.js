// let arr=[2,3,-2,4]
//output=6
let arr=[-2,3,4,-1,0,-2,3,1,4,0,4,6,-1,4]
//output=24

// let arr=[-2,0,-1]

//brute force approach
//TC=O(n**3)
//SC=O(1)
const MaxProduct=(arr)=>{
let n=arr.length
let max=0;
for(let i=0;i<=n-1;i++){
    for(let j=i;j<=n-1;j++){
        let prod=1
        for(let k=i;k<=j;k++){
            prod=prod*arr[k]
        }
        max=Math.max(max,prod)
    }
}
return max
}
// console.log("brute: mac sub product is",MaxProduct(arr))
//TC=O(n**2)
//SC=O(1)
const MaxProduct2=(arr)=>{
    let n=arr.length
    let max=0;
    for(let i=0;i<=n-1;i++){
        let prod=1
        for(let j=i;j<=n-1;j++){
            prod=prod*arr[j]
            max=Math.max(max,prod)
        }
    }
    return max
    }
    // console.log("brute 2: mac sub product is",MaxProduct2(arr))

    //optimal approach
    //case 1: if all the numbers are +ve then entire array's prod is max
    //case 2: if array contains even -ve numbers then also prod is entire array's sum
    //case 3: if array contains odd -ve numbers then the max prod is either suffix or prefix , we ahev to discard 1 -ve numbers et
    //case 4: if array conatins 0 then we have to reset prod when 0 and start again 


    //TC=O(n)
    //SsC=O(1)
    const optimalmaxProd=(arr)=>{
        let n=arr.length
        let prefixProd=1
        let sufixProd=1
        let maxProd=1
        let flag=0
        for(let i=0;i<=n-1;i++){
            // if(arr[i]===1){
            //     flag=1
            // }
            if(prefixProd===0){
                prefixProd=1
            }
            if(sufixProd===0){
                sufixProd=1
            }
            
            prefixProd=prefixProd*arr[i]
            sufixProd=sufixProd*arr[n-i-1]
            maxProd=Math.max(maxProd,Math.max(sufixProd,prefixProd))
        }
        // if(!flag && maxProd===1){
        //     return 0
        // }
        return maxProd
    }
    console.log("optimal max prod is",optimalmaxProd(arr))