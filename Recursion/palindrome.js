let input='madam'
let n=input.length
let midIndex=Math.floor(n/2)

function compareIndexes(i){
    if(i>=midIndex) return true
    if(input[i]!==input[n-i-1]){
        return false
    }
   return compareIndexes(i+1)
}
const palindrome=compareIndexes(0)
if(palindrome)console.log('Given string is palindrome')
else{console.log('Given string is not palindrome')}