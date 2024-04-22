//it takes an element and always place it in it's correct position
let input= [4,2,1,6,3]
let n=input.length
// 1st iteration;(4),2,1,6,3-->4,2,1,6,3
// 2nd iteration;(4,2),1,6,3-->2,4,1,6,3
// 3rd iteration;(2,4,1),6,3-->1,2,4,6,3
// 4th iteration;(1,2,4,6),3-->1,2,4,6,3
// 5th iteration;(1,2,4,6,3)-->1,2,3,4,6

function selectionsort(){
    for(let i=0;i<=n-1;i++){
        let j=i;
        while(j>0 && input[j-1]>input[j]){
            let temp=input[j]
            input[j]=input[j-1]
            input[j-1]=temp
            j--
        }
    }
    console.log("array-->",input)
    return input
}
selectionsort(n)

// time complexity
// outer loop-->n
// inner loop=0,1,2,3...n-1
// n*n-1===> o(n**2)---worst case

// for best case==>o(n)--> inner loop never runs