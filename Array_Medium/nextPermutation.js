// let arr=[3,1,2]
//output=[3,2,1]

//here n=3, so it will have 3!=3*2*1=6 permutations, they are as follows
//[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]
//so the next permutation of [3,1,2] is [3,2,1]
//the next permutation of [3,2,1] is [1,2,3]

//brute force solution
//generate all the permutations and store it
//find the given array and return the next permutation
//TC=N! * N --> if n=15 then n! will be nearing to 10**15 which is larger number so we can't go with the bruteforce approach

//better approach
// only for c++

//optimal approach

//find the break point from right , after which there is smaller number [2,1,  5,4,3,0,0] , a[i]>a[i-1]
                                                                      //   i | i+1
//take a number which is slightly greater then i , i=1 so slightly greater is 3 -- by iterating from backward i=1>i but smallest after break point and swap it
//now we ahve [2,3,_,_,_,_,_] we have to fill 5,4,1,0,0 in the sorted order so that input arr will be closer to output to be next permutation
// that is [2,3,0,0,1,4,5]
//if there is no dip/brteak point--> reverse the given array that is the next permutation


let arr=[2,1,5,4,3,0,0]
function reverse(inputArr,start,end){
    while(start<end){
        let temp=inputArr[start]
        inputArr[start]=inputArr[end]
        inputArr[end]=temp
        start++
        end--
    }
}

// TC=n-1 + n-1 +n-1  ===> O(3N)
//SC=o(1)

const nextPermutation=(arr,n)=>{
let dipIndex=-1
//find the dip index
for(let i=n-2;i>=0;i--){
    if(arr[i]>arr[i-1]){
        // if(arr[i]<arr[i+1]){
        dipIndex=i-1
        break
    }
}
if(dipIndex===-1){
    reverse(arr,0,n-1)
}
//find someone greater then dip index but smallest after dip index
for(let i=n-1;i>=dipIndex;i--){
if(arr[i]>arr[dipIndex]){// swap(arr[i],arr[dipIndex])
    let temp=arr[i]
    arr[i]=arr[dipIndex]
    arr[dipIndex]=temp
    break //bcz the smallest number among the numbers after dipindex is at the last and it is greater then the dipindex number
}
}//[2,3,--||__ 5,4,1,0,0] //now we have to reverse the array after dip index
reverse(arr,dipIndex+1,n-1)
return arr
}
console.log("next permuattion is--",nextPermutation(arr,arr.length))