function celsiusToFahrenheit(c) {
  let fahrenheit = c * (9 / 5) + 32;
  return fahrenheit;
}
let value = celsiusToFahrenheit(30);
console.log(value);

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let index = 0; index < arr.length; index++) {
  sum += arr[index];
}
console.log(sum);

let arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let index = 0; index < arr1.length; index++) {
  sum1 += arr1[index];
}
let avg = sum1 / 2;
console.log(avg);

let arr2 = [1, 2, 3, 4, 5];
let max = arr2[0];
for (let index = 0; index < arr1.length; index++) {
  if (max < arr2[index]) {
    max = arr2[index];
  }
}
console.log(max);

let arr3 = [5, 12, 15, 16, 14];
for (let index = 0; index < arr1.length; index++) {
  if (arr3[index] % 2 == 0) {
    console.log(arr3[index]);
  }
}

let grade = 80;

if (grade >= 85) {
  console.log("grade A");
} else if (grade >= 70) {
  console.log("grade B");
} else {
  console.log("grade c");
}

let name = "Pavan";
let rev = "";
for (let a = 0; a < name.length; a++) {
  rev = name[a] + rev;
}
console.log(rev);
