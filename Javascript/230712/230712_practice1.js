numbers = [];
num = 1;
// 1~100까지의 배열을 for문을 사용해서 만들기
for (i = 0; i < 100; i++) {
  numbers[i] = num;
  num++;
}
console.log("numbers 배열: ", numbers);

// 해당 배열의 합
// for문
sum_for = 0;
for (i = 0; i < numbers.length; i++) {
  sum_for += numbers[i];
}
console.log("for문 sum: ", sum_for);

// for of문
sum_forof = 0;
for (n of numbers) {
  sum_forof += n;
}
console.log("for of문 sum: ", sum_forof);

// forEach문
sum_forEach = 0;
numbers.forEach((n) => {
  sum_forEach += n;
});
console.log("forEach문 sum: ", sum_forEach);
