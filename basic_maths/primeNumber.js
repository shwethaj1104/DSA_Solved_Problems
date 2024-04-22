// number which has exactly 2 factors->> 1 and itself
let num=30;
let counter=0;
//again time complexity is n here=31//brute force approach
// for(let i=0;i<=num;i++){
//     if(num%i===0){
//         counter=counter+1
//     }
// }
// if(counter===2){
//     console.log(`${num} is a prime number`)
// }else{
//     console.log(`${num} is not a prime number`)
// }

//sqrt and multiples logic explained in print all divisions
for(let i=1;i<=Math.sqrt(num);i++){ //(i*i)<=num
    if(num%i===0){//if reminder is 0 then it is definitly a factor
        counter=counter+1
        if(num/i !== i){ //same numbers like 6*6
            counter=counter+1
        }
    }
}
if(counter===2){
    console.log(`${num} is a prime number`)
}else{
    console.log(`${num} is not a prime number`)
}