// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
