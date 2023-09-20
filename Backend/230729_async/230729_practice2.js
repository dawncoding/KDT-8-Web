function call(name) {
  return new Promise(function (resolve, result) {
    setTimeout(function () {
      let result = name;
      console.log(name);
      resolve(result);
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

async function exec() {
  let user = await call("kim");
  console.log(user + " 반가워");
  let txt = await back();
  console.log(txt + " 을 실행했구나");
  let txt_hell = await hell();
  console.log("여기는 " + txt_hell);
}

exec();
