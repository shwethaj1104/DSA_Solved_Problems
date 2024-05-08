const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];

//refer google docs for notes
//output=[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

//tc=O(2N)+NLOGN-->loops+sort
//we might thing tc= n**2 but we are breaking for existing start and end so every element is iterated twice
//SC=O(n)
const mergeOverlappingIntervals=(arr)=>{
    let n=arr.length
    arr.sort((a,b)=>a[0]-b[0])
    const output=[]
    for(let i=0;i<=n-1;i++){
        let start=arr[i][0]
        let end=arr[i][1]
        if(output.length && end<=output[output.length-1][1]){
            continue
        }
        for(let j=i+1;j<=n-1;j++){
            if(arr[j][0]<=end){
                end=Math.max(end,arr[j][1])
            }else{
                break
            }
        }
        output.push([start,end])
    }
    return output
}

// console.log("brute : the merged intervals are:",mergeOverlappingIntervals(arr));

//OPTIMAL APPROACH
//TC=O(n)+nlogn
//SC=O(n)
const optimalMergeoverlap=(arr)=>{
    let n=arr.length
    arr.sort((a,b)=>a[0]-b[0])
    const output=[arr[0]]
    for(let i=1;i<=n-1;i++){
        let outputEnd=output[output.length-1]
if(arr[i][0]<=outputEnd[1]){
// output[output.length-1][1]=Math.max(output[output.length-1][1], arr[i][1]);
outputEnd[1]=Math.max(outputEnd[1], arr[i][1]);
    }else{
        output.push(arr[i])
    }
}
return output
}
console.log("optimal : the merged intervals are:",optimalMergeoverlap(arr));
