const a = [1, 2, 3];
const b = [4, 5];

// concat
const concat = a.concat(b);
console.log(concat);

// spread 연산자
const spread = [...a, ...b];
console.log(spread);

const c = [..."Hello"];
console.log(c);

// rest 파라미터
const values = [10, 20, 30];

// rest는 뒤쪽에 써야
function get(a, ...rest) {
  console.log(a);
  console.log(rest);
}

get(...values);
