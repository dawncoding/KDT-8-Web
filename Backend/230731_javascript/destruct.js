let lists = ["apple", "grape"];
// const로 lists 배열 선언할 때
// 배열의 원소를 바꾸는 것은 가능하지만?
// lists라는 배열 자체를 바꾸려고 하면 오류 발생?

// 기존 방식
console.log(lists[0], lists[1]);

// 구조 분해
[item1, item2] = lists;
console.log(item1, item2);

// 교환
let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);
