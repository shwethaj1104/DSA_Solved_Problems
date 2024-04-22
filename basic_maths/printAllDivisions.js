
let num=36
let output=[];
//takes n iterations-->example:36 iterationsa for n=36-->  not performant enough--time complexity in n
// for(let n=0;n<=num;n++){
//     if(num%n === 0){
//         console.log(`${n} is divider of ${num}`)
//     }
// }

//takes square root of n iterations, example:6 iterations for n=36//time complecity is sqrt(n)+number of factors(used for sorting-in here 36 has 9 factors(1,2,3,4,6,9,12,18,36))

// 1*36
// 2*16
// 3*12
// 4*9>>>>>>>
// 6*6---------
// 9*4>>>>>>
// 12*3
// 16*2
// 36*1
for(let n=1;n<=Math.sqrt(num);n++){
    if(num%n === 0){
        console.log(`${n} , ${num/n!==n && num/n} are divider of ${num}`)
        output.push(n)
        if(num/n!==n){
            output.push(num/n)
        }
    }
}
console.log("output",output.sort(function(a,b){return a-b}))