/* 
    1. JS 객체의 종류
        1) 표준 빌트인 객체
            - ECMAScript 사양에 정의된 객체로 전역에서 사용할 수 있는 공통의 기능을 제공한다.
            - 표준이기 때문에 브라우저나 Node.js 환경에 상관없이 사용 가능하다.
        
        2) 호스트 객체
            - ECMAScript 사양에 정의되어 있지 않지만 실행환경(브라우저 Node.js)에서 따로 제공하는 객체이다.
            - 브라우저에서 제공하는 Web Apis(DOM, Canvas, requestAnimationFrame)가 해당된다.

        3) 사용자 정의 객체
*/

/* 
    2. 전역 객체
        - JS 엔진이 가장 먼저 만드는 특수한 객체이다.
        - JS가 실행되는 환경에서 달라진다. 브라우저에서는 window, Node.js global
            => ES11에서 도입된 globalThis 실행환경에 상관없이 가능하다.
        - 표준 빌트인 객체, 호스트 객체, var 키워드 선언 전역변수와 전역함수를 프로퍼티로 갖는다.
        - 여기서는 window 위주로 설명한다.
        - 어디에도 포함되지 않는 최상위 객체이다. => 가장 위의 프로토타입이라는 의미 x.
*/

// 전역객체 프로퍼티를 참조할 때 window. 생략 가능하다.
window.console.log("hello");

// 변수 키워드를 생략하면 window 객체의 프로퍼티로 할당이 된다. => var 키워드를 전역에서 사용하면 동일하게 할당된다.
a = 10;
var b = 6;

function foo() {
  var c = 0; // var 키워드는 함수 레벨 스코프(유효 범위) 지원하기 때문에 window 객체에 할당 안한다.
  d = 5;
}
foo();

// foo함수에서 window.d를 할당했다.
console.log(window.d);

// window에 객체에 호스트 객체가 포함되어 있다.
const app = window.document.querySelector("#app");

/* 
    Date 객체 : 날짜와 시간을 다루는 객체
        => 생성자 함수이다. => new 키워드와 함께 호출하여 인스턴스를 생성해서 사용한다.
*/

// 인스턴스가 생성된 시간과 날짜에 대한 정보를 가지고 있다. => 1970년 1월 1일부터 흐른 시간을 ms단위로 계산한다.
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); // 1월이 0부터 시작한다
let date = today.getDate();
let day = today.getDay(); // 일요일(0) ~ 토요일(6)

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

console.log(
  "year : %d년 month : %d월 date : %d day : %d",
  year,
  month + 1,
  date,
  day
);

console.log("현재시간은 %d시 %d분 %d초", hours, minutes, seconds);

// 날짜 변경하기
let yesterday = new Date("2022-10-23");
yesterday.setFullYear(2021);
yesterday.setMonth(0);
console.log(yesterday);

// 사용자의 문화권 맞는 시간표기법으로 반환
let yesterdayStr = yesterday.toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  dateStyle: "full",
});
console.log(yesterdayStr);

/* 
    Math : 수학 관련된 프로퍼티와 메서드를 제공한다.
*/
let float = 1.423234;

console.log("Math.float(float) : %d", Math.floor(float)); // 소수점 이하 숫자 내림
console.log("Math.ceil(float) : %d", Math.ceil(float)); // 소수점 이하 숫자 올림
console.log("Math.round(float) : %d", Math.round(float)); // 소수점 이하 숫자 반올림

// 111 => 120 만들기 1의 자리 올림
let num = 111;
console.log(Math.ceil(num / 10) * 10);

// Math.random() : 0이상 ~ 1미만 사이의 실수 => ex) 0.00102031,0.9999999991 => 진짜 랜덤이 아니다.
console.log(Math.random());

// 1~5 사이의 숫자
console.log(Math.floor(Math.random() * 5 + 1));

let result = [];
// 0~45 사이의 숫자 중 6개 result 배열에 집어넣기
// 1. 중복 x
// 2. 6개
// 3. 랜덤하게

while (result.length < 6) {
  let randomNum = Math.floor(Math.random() * 45 + 1);
  // Array.prototype.includes : 값이 있는지 확인하는 함수
  if (!result.includes(randomNum)) result.push(randomNum);
}

console.log(result);

console.log(parseInt("1.1")); // 문자열을 정수 만든다. => 실수를 정수로 만드는 용도로도 사용한다.
console.log(parseFloat("1.1")); // 문자열을 실수로 만든다.

// 값이 NaN인지 확인하는 함수 => NaN === NaN은 false가 나오므로 isNaN 사용해야한다.
console.log(isNaN(parseInt("안녕하세요")));
