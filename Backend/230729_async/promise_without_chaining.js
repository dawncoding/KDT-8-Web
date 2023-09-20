// Promise 체이닝 사용 안 한 경우
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

// add -> mul -> sub
add(4, 3, function (x) {
  console.log("1: ", x);
  mul(x, function (y) {
    console.log("2: ", y);
    sub(y, function (z) {
      console.log("3: ", z);
    });
  });
});
