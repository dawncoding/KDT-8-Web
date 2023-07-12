let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

same = [];
diff = [];
for (f1 of fruits1) {
  if (fruits2.includes(f1)) {
    same.push(f1);
  } else {
    diff.push(f1);
  }
}
console.log("same: ", same);
console.log("diff: ", diff);
