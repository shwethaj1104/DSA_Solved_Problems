//print 1 to n
// let n=10
// function print(i,n){
//     if(i>n){
//         return
//     }
//     console.log("number -",i)
//     print(i+1,n)
// }
// print(1,n)

// print n to 1
// let n, i =10
// function print(i,n){
//     if(i==0){
//         return
//     }
//     console.log("number -",i)
//     print(i-1,n)
// }
// print(i,n)

//print 1 to n by  back track, that is without print(i+1,n)
// print 1 to n
//here print(i-1,n) will call recursively untill i=0, and after that it will keep returning to previous called function and print 1 to n
// let n,i=10
// function print(i,n){
//     if(i<1){
//         return
//     }
//     print(i-1,n)
//     console.log("number -",i)
// }
// print(i,n)

//print n to 1
let n=10
function print(i,n){
    if(i>n){
        return
    }
    print(i+1,n)
    console.log("number -",i)
}
print(1,n)
