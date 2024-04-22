let arr1=[1,1,2,3,4,5]
let arr2=[2,3,4,4,5,6,6,7,9]
// output=[1,2,3,4,5,6,7]

// brute force approach
// TC=O(greater array length)+o(n1+n2)
// SC=O(n1+n2)+o(n1+n2)
// let set1=new Set() //sc=o(n1+n2)
// function unionArray(arr1,arr2,n1,n2){
//     let n=n1>n2 ? n1:n2
// for(let i=0;i<=n-1;i++){//otc=(greater array length)
//     arr1[i] && set1.add(arr1[i]) 
//     arr2[i] &&  set1.add(arr2[i])
// }
// arr1=Array.from(set1)//TC=o(n1+n2),SC=o(n1+n2)
// return arr1
// }

// console.log("union of 2 srrays---",unionArray(arr1,arr2,arr1.length,arr2.length))

//optimal approach
//TC=O(n1+n2)==> FOR ITERATING OVER 2 ARRAYS
//SC=O(n1+n2)==> for returning answer
function optimalUnion(arr1,arr2,n1,n2){
    let i=0;
    let j=0;
    let unionArray=[]
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            if(unionArray.length===0 || unionArray[unionArray.length-1]!==arr1[i]){
                unionArray.push(arr1[i])
            }
            i++
        }else{
            if(unionArray.length===0 || unionArray[unionArray.length-1]!==arr2[j]){
                unionArray.push(arr2[j])
            }
            j++
        }
    }
    while(i<n1){
            if(unionArray.length===0 || unionArray[unionArray.length-1]!==arr1[i]){
                unionArray.push(arr1[i])
            }
            i++
    }
    while(j<n2){
        if(unionArray.length===0 || unionArray[unionArray.length-1]!==arr2[j]){
            unionArray.push(arr2[j])
        }
        j++
    }
return unionArray
}
console.log("union of 2 srrays---",optimalUnion(arr1,arr2,arr1.length,arr2.length))

