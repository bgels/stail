// function sumOfTripledEvens(input) {
//   return input
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((sum, curr) => sum + curr, 0);
// }



// let arr = [1,2,3,4,5,6,7,8,9,10];
// let input = [1, 2, 3, 4, 5];
// const mappedArr = input.map((num) => {return num + 1;});
// const isOdd = input.filter((num) => {return num%2 == 1;});
// const productOfAllNums2 = input.reduce((total, curr) => {return total * curr;});

// console.log(arr);
// console.log(sumOfTripledEvens(arr));
// console.log(arr);


// console.log(mappedArr);
// console.log(isOdd);
// console.log(input);
// console.log(productOfAllNums2);

console.log("Camelize");
function camelize(arr){
  return arr
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

let camel = "background-color";
camel = camelize(camel);
console.log(camel);

console.log("FilterRange");
function filterRange(arr, a, b){
  return arr.filter((item) => item >= a && item <=b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(arr); // 5,3,8,1 (not modified)
console.log(filtered); // 3,1 (matching values)

console.log("FilterRangeInPlace");
function filterRangeInPlace(arr, a, b){
  for(let i =0; i<arr.length; i++){
    if(arr[i] < a|| arr[i] > b){
      arr.splice(i, 1);
      i--;
    }
  }
}
arr = [5, 3, 8, 1];
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);

console.log("DecreasingSort");
function decreasingSort(a, b){
  if(b > a) return 1;
  if(b == a) return 0;
  if(b < a) return -1;
}

arr = [5, 2, 1, -10, 8];
arr.sort(decreasingSort)
console.log(arr);

console.log("CopySorted");
arr = ["HTML", "JavaScript", "CSS"];
let copySorted = arr => arr.toSorted();
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
