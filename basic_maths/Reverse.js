let n=5634
let output=0
while(n>0){
    let num=n%10;//4
    n=Math.floor(n/10)//563
    output=(output*10)+num
}
console.log("revered",output)//to extract number