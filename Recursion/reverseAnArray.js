//Reverse an array
 let input=[1,2,3,4,5]
 let n=input.length
//here we need 2 indexes left and right
// function swapnumbers(left,right){
//     if(left>=right) return
//     swap(input[left],input[right])/////swap functionality taken for eaxmple
// swapnumbers(left+1,right-1)
// }
// swapnumbers(0,n-1)

// solving using single index
// i and n-i-1 and finding the mid index of array
let midIndex=Math.floor(n/2)
function swapnumbers(i){
    if(i>=midIndex) return
    temp = input[i];
    input[i] = input[n-i-1];
    input[n-i-1] = temp;
     swapnumbers(i+1)
}
swapnumbers(0)
console.log('swapped array - ',input)