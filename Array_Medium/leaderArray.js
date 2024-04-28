let arr=[10,22,12,3,0,6]
//output=[22,12,6]
//when the element in an array, after which all the number is smaller then itself, then it is a leader

//TC=O(n**2) --> near
//SC=O(n) --> worst case

const leaderArray=(arr,n)=>{
let leaderArr=new Array()
for(let i=0;i<=n-1;i++){
    let leader=true
    for(let j=i;j<=n-1;j++){
        if(arr[j]>arr[i]){
            leader=false
            break
        }
    }
    if(leader===true){
        leaderArr.push(arr[i])
    }
}
return leaderArr
}

// console.log("leader array is --",leaderArray(arr,arr.length))

//optimal solution
//let us iterate from right
//and keep updating the maximum number among considered right elements
//if the arr[i] > max num on the right then it is obviously the leader
//update the maxNumberOnright to arr[i] for next iterations

const reverseSort=(start,end,arr)=>{
    while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    start++
    end--
    }
}

const customSort=(start,end,arr)=>{
    while(start<end){
        if(arr[start]<arr[end]){
            let temp=arr[start]
            arr[start]=arr[end]
            arr[end]=temp
        }
        start++
        end--
    }
}


//TC=0(n)
//SC=0(n)
const optimalLeaderarray=(arr,n)=>{
let leaderArr=new Array()
let maxOfRight=-1
for(let i=n-1;i>=0;i--){
    if(arr[i]>maxOfRight){
        maxOfRight=arr[i]
        leaderArr.push(arr[i])
    }
}
//if we need to return answer in reverse order
// reverse(0,leaderArr.length-1,leaderArr)

//if we need to sort the array
console.log("hsedf",leaderArr)
customSort(0,leaderArr.length-1,leaderArr);
return leaderArr
}

console.log("leader array is --",optimalLeaderarray(arr,arr.length))