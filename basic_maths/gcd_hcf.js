// n1=9 n2=12
// divisors of 9=1,3,9
// divisors of 12=1,2,3,4,6,12
// common is=1,3
// greater among them is=3
// hence gcd(9,12)=3

// //brute force approach--> loop from 1 to largest number among n1 and n2 and check n1 & n2 both are divisible by iterator, if yes then update the gcdVariable
// // o(min(n1,n2))
// let n1=13
// let n2=7
// let gcd;
// for(let i=1;i<=Math.min(n1,n2);i++){//using min bcz common factor can never be greater then smallest number, max is brute force
//     if(n1%i===0 && n2%i===0){
//         gcd=i
//     }
// }
// console.log(`GCD of ${n1} and ${n2} is ${gcd}`)

// let n1=20
// let n2=40
// let gcd;
// let counter=0;
// for(let i=Math.min(n1,n2);i>=1;i--){
//     counter=counter+1
//     console.log("number fo times loop ran",counter)
//     if(n1%i===0 && n2%i===0){
//         gcd=i
//         return // if largest common divisor find then we can just return out of the loop no need for further iteration
//     }
// }
// console.log(`GCD of ${n1} and ${n2} is ${gcd}`)
//but again above approach is brute force bcz if gcd(13,17)=1, the loop will end up running from 13 to 1 and atking more iterations, so we must not use above

// euclidean law--> gcd(n1,n2)=gcd(n1%n2,n2) where n1>n2
//if one of them is 0 then the other is the gcd

let n1=20
let n2=40
while(n1!==0 && n2!==0 ){
    if(n1>n2) n1=n1%n2
    else n2=n2%n1
}
console.log(`GCD of ${n1} and ${n2} is ${Math.max(n1,n2)}`)
