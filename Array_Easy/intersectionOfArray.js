let arr1=[1,2,2,3,4,4,5]
let arr2=[2,3,3,4,4,5,6]
// output=[2,3,4,4,5]

// TC= O(bigger array size) // worst case==o(n1+n2)
//SC=o(smaller array size)===used to return result

function intersection(arr1,arr2,n1,n2){
    let i=0;
    let j=0;
    let output=new Array()
    while(i<n1 && j<n2){
        if(arr1[i]===arr2[j]){
            output.push(arr1[i])
            i++
        j++
        }else if(arr1[i]<arr2[j]){
            i++
        }else{
            j++
        }
        
    }
    return output

}

console.log("intersection is--",intersection(arr1,arr2,arr1.length,arr2.length))