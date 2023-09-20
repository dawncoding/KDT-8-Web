// 콜백 함수 사용 예시
// 메인 함수
// 보통 함수를 선언한 뒤에 함수 타입 파라미터를 맨 마지막에 하나 더 선언 해 주는 방식으로 정의
function mainFunc(param1, param2, callback) {
  // 콜백 함수에 결과 전달
  const result = param1 + param2;
  console.log("mainFunc");
  callback(result);
}

function callbackFunc(param) {
  console.log(param);
}

mainFunc(1, 2, callbackFunc);

// 콜백 함수 사용해서 setTimeout.js 코드 재구성해보기
let product;
let price;
goMart();
pickDrink(pay);
// pay(product, price);

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까??");
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝!!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
