// 동기 : 코드가 완료된 뒤에 다음 코드가 실행

console.time("동기");
console.log("시작");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("동기");
console.log("종료");

// 비동기 : 코드가 완료되지 않아도 다음 코드가 실행
//  => setTimeout, setInterval, promise 등
//  => 이미지 불러오기, 서버에서 데이터 받아오기 등
//  => 비동기 처리란 비동기 처리에 필요한 시간을 기다렸다가 결과를 가지고 처리

// let num;

// setTimeout(function () {
//   console.log("2초 경과");
//   num = 10;
//   addAndPrint(num);
// }, 2000);

// function addAndPrint(num) {
//   num++;
//   console.log(num + 1);
// }

// Promise : resolve(성공), reject(실패)를 통해 비동기 처리를 할 수 있는 객체

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });

// Promise.then((res) => {
//   console.log("wresult : ", res);
// });

// console.log("promise 반환");

fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
  res.json().then((data) => console.log(data.title));
});

async function fetchData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await result.json();

  console.log(data);
}

async function fetchAxios() {
  let result = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(result.data);
}

fetchData();
fetchAxios();
