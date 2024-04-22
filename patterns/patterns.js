// * * * *
// * * * *
// * * * *
// * * * *
// for(let i=1;i<=4;i++){
// let output=''
//     for(let j=1;j<=4;j++){
//         output += "* ";
//     }
//     console.log(output)
// }


// *
// * *
// * * *
// * * * *
// for(let i=1;i<=4;i++){
//     let output=''
//         for(let j=1;j<=i;j++){
//             output += "* ";
//         }
//         console.log(output)
//     }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// for(let i=1;i<=4;i++){
//     let output=''
//         for(let j=1;j<=i;j++){
//             output += `${j} `;
//         }
//         console.log(output)
//     }

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// for(let i=1;i<=4;i++){
//     let output=''
//         for(let j=1;j<=i;j++){
//             output += `${i} `;
//         }
//         console.log(output)
//     }

// * * * *
// * * *
// * *
// *
// let n=4
// for(let i=1;i<=n;i++){
//     let output=''
//         for(let j=0;j<(n-i+1);j++){
//             output += "* ";
//         }
//         console.log(output)
//     }

// 1 2 3 4
// 1 2 3
// 1 2
// 1
// let n=4
// for(let i=0;i<=n;i++){
//     let output=''
//         for(let j=1;j<(n-i+1);j++){
//             output += `${j} `;
//         }
//         console.log(output)
//     }

//       *   --> n-i-1 0's, 2i+1 *'s, n-i-1 0's
//     * * *
//   * * * * *
// * * * * * * * 
// let n=5
function star(){
for(let i=0;i<n;i++){
    let output=''
        for(let j=0;j<(n-i-1);j++){
            output += '  ';
        }
        for(let j=0;j<(2*i+1);j++){
            output += '* ';
        }
        for(let j=0;j<(n-i-1);j++){
            output += '  ';
        }
        console.log(output)
    }
}

// * * * * * * * --> i 0's, 2n-(2i+1) *'s, i 0's   ==>[0,7,0], [1,5,1],[2,3,2],[3,1,3]
//   * * * * *
//     * * *
//       *   
// let n=4
function reverseStar(){
    for(let i=0;i<n;i++){
        let output=''
            for(let j=0;j<i;j++){
                output += '  ';
            }
            for(let j=0;j<((2*n)-((2*i)+1));j++){
                output += '* ';
            }
            for(let j=0;j<i;j++){
                output += '  ';
            }
            console.log(output)
        }
}


//       *   --> n-i-1 0's, 2i+1 *'s, n-i-1 0's
//     * * *
//   * * * * *
// * * * * * * * 
// * * * * * * * --> i 0's, 2n-(2i+1) *'s, i 0's   ==>[0,7,0], [1,5,1],[2,3,2],[3,1,3]
//   * * * * *
//     * * *
//       *   //combind both 1st and 2nd
// star()
// reverseStar()


// *           [i,*]==>[1,1],[2,2],[3,3],[4,4],[5,5],[6,4],[7,3],[8,2],[9,1]
// * *
// * * *
// * * * *
// * * * * *-----we should break the symmetry here
// * * * *
// * * *
// * *
// *
// let n=5;//observe symmetrical pattern
// for(let i=1;i<=2*n-1;i++){
//     let output=''
//     let columns=i
//     if(i>n)columns=2*n-i
//     for(let j=1;j<=columns;j++){
//         output += '* ';
//     }
//     console.log(output)
// }


// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// let n=5;
// let start='1 '
// for(let i=0;i<=n;i++){
//     let output='';
//     if(i%2===0)start='1 '
//     else start='0 '
//     for(let j=0;j<=i;j++){
//         output += start;
//         if(start==='0 ')start='1 '
//         else start='0 '
//     }
//     console.log(output)
// }


// 1             1 --> i 0's, 2n-(2i+1) *'s, i 0's   ==>[0,7,0], [1,5,1],[2,3,2],[3,1,3]
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1    
// let n=4;
// for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=1;j<=i;j++){
//         output +=  `${j} `;
//     }
//     for(let j=1;j<=((2*n)-(2*i));j++){//2(n-i)
//         output += '  ';
//     }
//     for(let j=i;j>=1;j--){
//         output += `${j} `;
//     }
//     console.log(output)
// }

// 1
// 2 3 
// 4 5 6 
// 7 8 9 10
// 11 12 13 14
// let n=5;
// let numberToPrint=1
// for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=1;j<=i;j++){
//         output +=  `${numberToPrint} `;
//         numberToPrint+=1
//     }
//     console.log(output)
// }

// A 
// A B 
// A B C 
// A B C D 
// A B C D E
// let alphabets=['A','B','C','D','E','F']
// let n=5;
// for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=0;j<i;j++){
//         output +=  `${alphabets[j]} `;
//     }
//     console.log(output)
// }

// A B C D E
// A B C D 
// A B C 
// A B 
// A 
// let alphabets=['A','B','C','D','E','F']
// let n=5;
// for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=0;j<=n-i;j++){
//         output +=  `${alphabets[j]} `;
//     }
//     console.log(output)
// }

// A 
// B B   
// C C C
// D D D D
// E E E E E
// let alphabets=['A','B','C','D','E','F']
// let n=5;
// for(let i=0;i<n;i++){
//     let output='';
//     for(let j=0;j<=i;j++){
//         output +=  `${alphabets[i]} `;
//     }
//     console.log(output)
// }

//      A 
//    A B A   
//  A B C B A
//A B C D C B A
// let alphabets=['A','B','C','D','E','F','G','H','I','J']
// let n=4;
// for(let i=0;i<n;i++){
//     let output='';
//     for(let j=0;j<=n-i;j++){
//         output +=  '  ';
//     }
//     let count=0;
//     let breakpoint=((2*i+1)/2)
//     for(let j=1;j<=2*i+1;j++){
//         output +=  `${alphabets[count]} `;
//         if(j<=breakpoint)count=count+1
//         else count=count-1
//     }
//     for(let j=0;j<=n-i;j++){
//         output +=  '  ';
//     }
//     console.log(output)
// }

// E [4]
// D E [3,4]
// C D E [2,3,4]
// B C D E [1,2,3,4]
// A B C D E [0,1,2,3,4]
// let alphabets=['A','B','C','D','E','F','G','H','I','J']
// let n=5;
// for(let i=0;i<n;i++){
//     let output='';
//     for(let j=i;j>=0;j--){
//         output +=  `${alphabets[n-j-1]} `;
//     }
//     console.log(output)
// }

// * * * * * * * * * * star1==>5,4,3,2,1 space==>0,2,4,6,8--2i satr2==>5,4,3,2,1
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *////symmetry
// *                 *  star==>1,2,3,4,5 space==>8,6,4,2,0 star2=1,2,3,4,5 reverse
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// let n=5;
// for(let i=0;i<n;i++){
//     let output='';
//     for(let j=0;j<n-i;j++){
//         output += '* ';
//     }
//     for(let j=0;j<2*i;j++){
//         output += '  ';
//     }
//     for(let j=n-i;j>0;j--){
//         output += '* ';
//     }
//     console.log(output)
// }
// for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=1;j<=i;j++){
//         output += '* ';
//     }
//     for(let j=1;j<=((2*n)-(2*i));j++){
//         output += '  ';
//     }
//     for(let j=i;j>=1;j--){
//         output += '* ';
//     }
//     console.log(output)
// }

// *                 *  1,8,1
// * *             * *  2,6,2
// * * *         * * *  3,4,3
// * * * *     * * * *  4,2,4
// * * * * * * * * * *  5,0,5
// * * * *     * * * *  4,2,4 i=6, 6-4--> that is i-4 that is i-(2n-i)
// * * *         * * *  3,4,3 i=7
// * *             * *  2,6,2 i=8
// *                 *  1,8,1 i=9

// let n=5;
// for(let i=1;i<=((2*n)-1);i++){
//     let output='';
//     let index=i
//     if(i>n)index=2*n-i
//     for(let j=0;j<index;j++){
//         output += '* ';
//     }
//     let spaceindex=(2*n)-(2*i)
//     if(i>n) spaceindex=i-(2*n-i)
//     for(let j=0;j<spaceindex;j++){
//         output += '  ';
//     }
//     let star2index=i
//     if(i>n)star2index=2*n-i
//     for(let j=star2index;j>0;j--){
//         output += '* ';
//     }
//     console.log(output)
// }

// * * * *
// *     *
// *     *
// * * * * 
// let n=4;
// for(let i=0;i<n;i++){
//     let output='';
//     for(let j=0;j<n;j++){
//         if(i==0 || j==0||i==n-1||j==n-1){
//             output += '* ';
//         }else{
//             output += '  ';
//         }
//     }
//     console.log(output)
// }

// 4 4 4 4 4 4 4  n
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4
let n=4;
for(let i=0;i<(2*n-1);i++){
    let output='';
    for(let j=0;j<(2*n-1);j++){
        let top=i;
        let left=j;
        let right=(2*n-2)-j
        let down=(2*n-2)-i
            output += `${n-Math.min(top,down),Math.min(right,left)}`
    }
    console.log(output)
}