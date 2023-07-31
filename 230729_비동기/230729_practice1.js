function call(name) {
  return new Promise(function (resolve, result) {
    setTimeout(function () {
      let result = name;
      console.log(name);
      resolve(result); // 작업 성공 시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, result) {
    setTimeout(function () {
      let result = "back";
      console.log("back");
      resolve(result);
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, result) {
    setTimeout(function () {
      let result = "callback hell";
      resolve(result);
    }, 1000);
  });
}

call("kim")
  .then(function (result) {
    console.log(result + " 반가워");
    return back();
  })
  .then(function (result) {
    console.log(result + " 을 실행했구나");
    return hell();
  })
  .then(function (result) {
    console.log("여기는 " + result);
  });
