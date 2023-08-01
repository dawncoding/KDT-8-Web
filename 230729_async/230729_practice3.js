function changeBG(color) {
  return new Promise(function (resolve, result) {
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = color;
      let result = document.querySelector("body").style.backgroundColor;
      resolve(result);
    }, 1000);
  });
}

let color_list = ["red", "orange", "yellow", "green", "blue"];
// 함수를 순차적으로 호출하도록 체이닝
let sequence = Promise.resolve();
for (let i = 0; i < color_list.length; i++) {
  sequence = sequence.then(function () {
    return changeBG(color_list[i]);
  });
}
