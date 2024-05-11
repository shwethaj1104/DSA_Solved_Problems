let arr1=[1,3,5,7]
let arr2=[0,2,6,8,9]

//output=[0,1,2,3,5,6,7,8,9]
//TC=O(2(n1+n2))
//SC=O(n1+n2)
const mergeArr=(arr1,arr2)=>{
    let n1=arr1.length
    let n2=arr2.length
    let i=0
    let j=0
    let output=new Array()
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            output.push(arr1[i])
            i++
        }else if(arr1[i]>arr2[j]){
            output.push(arr2[j])
            j++
        }
    }
    while(i<n1){
        output.push(arr1[i])
        i++
    }
    while(j<n2){
        output.push(arr2[j])
        j++
    }
    //to fill back to arr1 and arr2
    for(let i=0;i<n1+n2;i++){
        if(i<n1)arr1[i]=output[i]
        else arr2[i-n1]=output[i]
    }
    return [arr1,arr2]
}
// console.log("brute:merged array is",mergeArr(arr1,arr2))

//OPTIMAL APPROACH
// will take i=n1 for arr1, and j=0 for arr2
//and comapre last number of arr1 and first number of arr2
//if arr2's number is smaller will just swap and increment i and j

//TC=O(min(n1,n2))+(n1+n2)log(n1+n2)
//SC=O(1)
const optimal1Merge=(arr1,arr2)=>{
    let n1=arr1.length
    let n2=arr2.length
    let i=n1-1
    let j=0

    while(i>=0 && j<n2){
        if(arr1[i]>arr2[j]){
            [arr1[i],arr2[j]]=[arr2[j],arr1[i]]
            i--
            j++
        }else{
            break
        }
    }
    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)
    return [arr1,arr2]
}
// console.log("optimal 1:merged array is",optimal1Merge(arr1,arr2))


//OPTIMAL APPROACH 2
//TC=O(LOG base2 (n+m))+O(n+m)===> dividing by 2 and going again via gap + while loop   
//SC=O(1)
const swapIfGreater=(arr1, arr2, ind1, ind2) =>{
    if (arr1[ind1] > arr2[ind2]) {
      [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
  }
const approach2Optimal=(arr1,arr2)=>{
    let n=arr1.length
    let m=arr2.length
    let len=n+m
    let gap=Math.ceil(len / 2);

    while (gap > 0) {
        let left=0
        let right=left+gap
        while(right<len){
            if(left<n && right >=n){
                swapIfGreater(arr1, arr2, left, right - n);
            }else if(left>=n){
                swapIfGreater(arr2, arr2, left-n, right - n);
            }else{
                swapIfGreater(arr1, arr1, left, right);
            }
            left++
            right++
        }
    if(gap===1) break;
    gap = Math.ceil(gap / 2);
    }
    return [arr1,arr2]
    
}
console.log("optimal 2:merged array is",approach2Optimal(arr1,arr2))

