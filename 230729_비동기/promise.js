// promise 객체를 반환하는 promise1 함수 정의
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      // resolve:
      resolve(
        "promise 상태는 fulfilled! then으로 연결됩니다. 이때의 flag가 true입니다."
      );
    } else {
      reject(
        "promise 상태는 rejected! catch로 연결됩니다. 이때의 flag는 false입니다"
      );
    }
  });
}

// console.log(promise1(true));
// 출력 결과
// Promise { 'promise 상태는 fulfilled! then으로 연결됩니다. 이때의 flag가 true입니다.' }

// console.log(promise1(false));
// 출력 결과
// Promise {
//     <rejected> 'promise 상태는 rejected! catch로 연결된다. 이때의 flag는 false입니다'
//   }
//   node:internal/process/promises:288
//               triggerUncaughtException(err, true /* fromPromise */);
//               ^

//   [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "promise 상태는 rejected! catch로 연결된다. 이때의 flag는 false입니다".] {
//     code: 'ERR_UNHANDLED_REJECTION'
//   }

promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    // 에러 처리
    console.log(err);
  });
// 결과 출력
// promise 상태는 fulfilled! then으로 연결됩니다. 이때의 flag가 true입니다.

promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    // 에러 처리
    console.log(err);
  });
// 결과 출력
// promise 상태는 rejected! catch로 연결됩니다. 이때의 flag는 false입니다
