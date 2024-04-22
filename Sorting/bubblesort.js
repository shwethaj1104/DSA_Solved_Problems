//pushes maximum number to last by adjacent swapping
// example: 52,13,24,46,20,9
// 1st iteration
// 1st step:(52,13),24,46,20,9-->13,52,24,46,20,9
// 2nd step:13,(52,24),46,20,9-->13,24,52,46,20,9
// 3rd step:13,24,(52,46),20,9-->13,24,46,52,20,9
// 4th step:13,24,46,(52,20),9-->13,24,46,20,52,9
// 5th step:13,24,46,20,(52,9)-->13,24,46,20,9,52---till n-1

// 2nd iteration
// 1st step:(13,24),46,20,9,52-->(13,24),46,20,9,52---till n-2

// .
// .
// till n-1


// let arr1=[52,13,24,46,20,9]
// let arr=[52,345,13,24,1,3456,46,20,9]
// let n=arr.length
// function bubblesort(){
//     for(let i=0;i<=n-1;i++){
//         for(let j=0;j<=n-1-i;j++){
//             if(arr[j]>=arr[j+1]){
//                 temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 }
//         }
//     }
//     console.log("array--",arr)
//     return arr
// }
// bubblesort(n)

// time complexity is onabort(n**2)
// what if teh array is already in sorted order---are u still goign to run the loop for n**2 times----that's not correct
// so after doing below optimization the time complexity will be o(n)


let arr1=[52,13,24,46,20,9]
// let arr=[52,345,13,24,1,3456,46,20,9]
let arr=[1,2,3,4,5,6,7]
let n=arr.length
function bubblesort(){
    for(let i=0;i<=n-1;i++){
        let isSwapped=0
        for(let j=0;j<=n-1-i;j++){
            console.log(`loop ran here`)
            if(arr[j]>=arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                isSwapped=1//set the field if any swap happened in the first level of iteration
                }
        }
        if(isSwapped==0)break //if i return here arr will not be returned so using break
    }
    console.log("array--",arr)
    return arr
}
bubblesort(n)