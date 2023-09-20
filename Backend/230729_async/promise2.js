let product;
let price;
goMart();
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err);
    // function(err){
    // console.log(err);
    // }
  });

function goMart() {
  console.log("마트에 가서 어떤 음료를 마실까??");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로 콜라";
      price = 3000;
      if (price <= 2000) {
        resolve();
      } else {
        reject("돈이 부족해요!");
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
