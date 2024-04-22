//slecting minimum number from array and move it to 0th index and moving 0th element to min numbers previous position
//get the minimum and swap it is the algo
// example:13,46,24,52,20,9 min is 9 so first step is--> 9,46,24,52,20,13
// step 1-->  9,46,24,52,20,13 --min of 6 elements 9
// step 2-->  9,13,24,52,20,46 --min of index 1 to 5 is 13 so it came to 2nd position that is 0th index
// step 3-->  9,13,20,52,24,46
// step 4-->  9,13,20,24,52,46
// step 5-->  9,13,20,24,46,52//we do not sort in here
//n-2 steps

// steps::
// 1.figure the min in entire array and swap it to 0th indexe
// 2.figure the min from 1st to n-1 index and swap it to 1st index
// 3.continue this till index==n-2

//so first swap is between 0-min(0 to n-1)
//so second swap is between 1-min(1 to n-1)
//so third swap is between 2-min(2 to n-1)...till n-2

let array=[13,46,24,52,20,9]
let n=array.length
function selectionSort(n){
    for(let i=0;i<=n-2;i++){
        let mini=i;
        for(j=i;j<=n-1;j++){
            if(array[j]<array[mini]) mini=j
        }
        let temp=array[mini];
        array[mini]=array[i]
        array[i]=temp
        console.log("array---",array)
    }
    console.log("array",array)
    return array
}
selectionSort(n)

// time complexity
// n**2 for outer loop and n-1 for the inner loop 


