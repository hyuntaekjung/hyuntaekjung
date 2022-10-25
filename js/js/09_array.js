let arr = [1, 2, 3, 4];
// 반복!
console.log(arr.length); // 배열의 길이 반환
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열에 요소 추가하기

// 1. Array.prototype.push() : 배열의 맨 뒤에 인자로 전달된 값을 추가.
console.log("-----push-----");
arr.push(5, 6, 7, 8);
console.log(arr);

// 2. Array.prototype.pop() : 배열의 맨 뒤에서 제거해서 반환한다. => 다른 배열로 이동시킬 때 사용.
console.log("----pop----");
let arr02 = [4];
let poped = arr.pop(); // arr의 마지막 요소를 제거해서 poped에 할당
arr02.push(poped); // arr의 마지막 요소를 제거해서 arr02에 추가
console.log(arr, poped, arr02);

// 3. Array.prototype.unshift : Array.prototype.push()과 반대
console.log("-----unshift-----");
arr.unshift(0);
console.log(arr);

// 4. Array.prototype.shift : 배열 맨 앞의 요소를 제거해서 반환한다.
console.log("-----shift-----");
let shifted = arr.shift();
console.log(arr, "shifted : ", shifted);

// 5. Array.prototype.splice : 배열 중간의 요소들을 제거 및 추가하고 제거된 요소를 배열 형태로 반환
//      => Array.prototype.splice(시작번호, 삭제할 개수, ...추가할 요소들)
console.log("-----splice-----");
let spliced = arr.splice(1, 3, 10, 20, 30);
console.log(arr, "spliced : ", spliced);

// 6. Array.prototype.slice : 지정한 범위만큼 복사한다. => 제거하지 않고 반환만 한다. 원본 배열이 변경 x
//      => 끝번호 - 1까지만 복사한다.
//      => 두번째 인자를 - 1로 지정하면 마지막 인덱스를 의미한다.
let sliced = arr.slice(0, -1);
console.log(arr, "sliced : ", sliced);

// 7. Array.prototype.indexOf : 인자로 전달한 값이 있다면 index값을 반환, 없다면 -1 반환
//      => 없는 값일 때 -1을 반한한다는 점을 이용해 분기 처리 가능
//      => 순서 확인하는 김에 없으면 분기 처리
let idx = arr.indexOf(10);
console.log(idx);
if (idx === -1) console.log("없는 숫자입니다.");

// 8. Array.prototype.includes : 배열에 전달된 인자값이 있는지 true, false 값을 반환
//      => 포함 여부만 확인할 때 사용
let isInclude = arr.includes(10);
console.log("isIclude : ", isInclude);
if (!isInclude) console.log("없는 숫자입니다.");

// fruits에서 "사과"를 "오렌지"와 "포도" 사이에 추가
let fruits = ["바나나", "오렌지", "포도"];
fruits.splice(2, 0, "사과");
console.log(fruits);

// fruits에서 "오렌지" 를 삭제하는데 삭제할 인덱스 직접 넣지말고 몇번째인지 찾아내서 삭제
let idx02 = fruits.indexOf("오렌지"); // "오렌지의" 인덱스 찾아서 반환
fruits.splice(idx02, 1); // 찾은 인덱스번째 하나 삭제
console.log(fruits);

// numArr에서 짝수만 resultArr에 넣기
let numArr = [1, 2, 3, 4, 5, 6, 7, 8];
let resultArr = [];

// Array.prototype.filter로 대체 가능
for (let i = 0; i < numArr.length; i++) {
  let num = numArr[i];
  if (num % 2 === 0) resultArr.push(num);
}
console.log(resultArr);

// 배열의 고차함수

/* 
  1. 일급 객체 
    - 변수에 할당 가능하다.
    - 다른 함수의 인자로 전달될 수 있다.
    - 함수의 실행결과로 함수를 리턴할 수 있다.  
  => 함수가 값으로써 평가된다.
*/

// 1) 변수에 할당 가능하다.
let foo = function () {
  console.log("함수 표현식");
};
foo();

// 2) 다른 함수의 인자로 전달이 가능하다.
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}
repeat(5, foo);

// 3) 함수의 실행 결과로 함수를 반환할 수 있다.
function getFunc() {
  return function () {
    console.log("리턴된 함수");
  };
}
let func = getFunc();
func();

/*
  2. 고차함수(higher order function)
    - 다른 함수를 인자로 전달받는 함수
*/

console.log("-----forEach-----");
/*
  3. Array.prototype.forEach() : 각 요소를 콜백함수의 인자로 전달해 배열의 크기만큼 반복 실행.
    - 첫번째 인자로 배열의 각 요소가 한번씩 전달돼서 실행
    - 두번째 인자로 요소의 인덱스 값이 전달
    - forEach()의 결과로 아무것도 반환되지 않는다.
*/
let numList = [1, 2, 3, 4];
for (let i = 0; i < numList.length; i++) {
  console.log(numList[i]);
}
let forEachResult = numList.forEach(function (n, i) {
  console.log(n, i);
});
console.log(forEachResult);
// numList.forEach((num) => console.log(num)); 콜백함수를 화살표 함수로 작성한 예시

console.log("-----map-----");
/* 
  4. Array.prototype.map() : 각 요소를 인자로 콜백함수를 반복하여 실행하여 반환 값을 모아서 새로운 배열로 반환.
    - 원본 배열의 개수와 반환된 배열의 크기가 같다.
    - return 값이 없으면 undefined가 채워진다.
    - 원본 배열은 변경되지 않는다.
*/
let mapNumArr = numList.map(function (num) {
  return num * 2;
});
console.log(mapNumArr);

// numList에서 짝수라면 1더하고 홀수라면 그대로 반환해서 새로운 배열 만들기
function addEvenNum(num) {
  // 삼항 연산자로 간소화 가능
  if (num % 2 === 0) return num + 1;
  else return num;
}
let mapNumArr02 = numList.map(addEvenNum);
console.log(numList, mapNumArr02);

console.log("-----filter-----");
/* 
  5. Array.prototype.filter() : 각 요소를 콜백함수의 인자로 전달하여 실행하고, 반환값이 true인 요소만 새로운 배열로 모아 반환한다.
    - 반환값이 true 혹은 false여야한다. => 논리 연산자를 사용한다.
    - 원본 배열보다 새로운 배열의 크기가 작거나 같다.
*/

// 콜백함수를 화살표 함수로 바꿔보기
// 힌트. 화살표 함수는 return 생략가능
let filterNumArr = numList.filter((num) => num % 2 === 0);
console.log(filterNumArr);

// 문제2. 짝수번째 요소만 모으기
let filterNumArr02 = numList.filter((_, idx) => (idx + 1) % 2 === 0);
console.log(filterNumArr02);
