// binary search works on sorted arrays

//lets say we ahve dictionalry and we have to find name Shwetha in it, if we are on page with letter R, then we are sure that left pages will never have word Shwetha
//so we neglect that part and only concentrate on the right part from R-Z
//LINEAR SEARCH--start searching for given x from the satrt to end element by elements
//BINARY SEARCH-- searches by splitting array in to half

const binarySearch=(arr,target)=>{
    let n=arr.length
    let low=0
    let high=n-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]===target){return mid}
        else if(target>arr[mid]){low=mid+1}
        else{high=mid-1}
    }
    return -1
}
let arr=[2,5,6,8,9,10,13]
console.log("given target is at position : ",binarySearch(arr,10))