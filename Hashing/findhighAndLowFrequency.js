let arr1 = [10, 5, 10, 15, 10, 5];
// output => 10, 15

let arr2 = [2, 2, 3, 4, 4, 2];
// output => 2 3

const computeFrequency = (arr) => {
  let map = new Map();
  for (let num of arr) {
    let key=num
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  console.log("mapped array--",map)
  let highestFrequency = 0;
  let highestNum = 0;
  let lowestNum = 0;
  let lowestFrequency = arr.length;
  for (let [num, frequency] of map.entries()) {
    console.log("entries--",num,frequency)
    if (frequency > highestFrequency) {
      highestNum = num;
      highestFrequency = frequency;
    }
    if (frequency < lowestFrequency) {
      lowestNum = num;
      lowestFrequency = frequency;
    }
  }
//   console.log(map.entries());
  console.log(highestNum, lowestNum);
};

computeFrequency(arr2);