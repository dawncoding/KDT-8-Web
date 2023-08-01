// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000); // 2000ms
// console.log(3);

let product;
let price;
goMart();
pickDrink();
pay(product, price);

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  setTimeout(function () {
    console.log("고민 끝!!");
    product = "제로 콜라";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
