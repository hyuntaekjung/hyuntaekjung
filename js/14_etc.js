// JS에서는 매개 변수와 전달된 인자의 개수가 달라도 오류가 발생하지 않는다.
function sum(a, b) {
  // 함수 내에서 arguments를 참조하면 전달받은 인자를 유사배열 형태로 반환한다.
  let argArr = Array.from(arguments); // 유사배열을 배열을 변환한다.
  return argArr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

// rest : 받은 인자를 배열로 모아준다.
//  => 매개변수의 마지막에 사용해야한다.
function sub(a, ...rest) {
  return rest.reduce((acc, curr) => acc - curr, rest[0]);
}

let result = sum(3, 2, 10, 15, 30);
let result02 = sub(10, 20, 30);

console.log(result, result02);

/* 
      스프레드 문법(펼침)
          - ex) let arr = [1,2,3] =>  ...arr => 1,2,3
          - 배열안에 펼치면 복사하는 효과가 있다.
          - 객체도 사용 가능하다.
   */

let numArr = [10, 2, 4];
let result03 = sum(...numArr);
console.log("result03 : %d", result03);
let copyArr = [1, ...numArr, 5];
console.log("copyArr : %s", copyArr);

let obj = {
  age: 30,
  name: "seok Hwangbo",
  inner: {
    type: "child",
  },
};

let copy = obj; // 객체는 값이 아니라 참조를 복사한다.
// copy.age = 40;

let copyObj = { ...obj };
// 객체의 각 프로퍼티를 복사한 것이기 때문에 원본을 변경하지 않는다. => 중첩된 객체는 여전히 참조 복사다(얕은 복사).
copyObj.age = 50;
console.log("copyObj : %s, obj : %s", copyObj, obj);

copyObj.inner.type = "parent";
console.log(copyObj.inner, obj.inner);

let copyObj02 = { ...obj, weight: 67, age: 40 }; // 원본 객체의 프로퍼티를 변경하거나 새로운 프로퍼티를 추가하면서 복사한다.
console.log(copyObj02);

// 삼항 연산자 : 조건 ? true일 경우 : false일 경우;
// 조건에 따라 할당할 값이 다른 경우
let num = 4;
let numType = num % 2 === 0 ? "짝수" : "홀수";
// if (num % 2 === 0) numType = "even";
// else numType = "odd";

console.log("numType : %s", numType);

/* 
      비구조화 할당
          1) 객체
              - {} 안에 변수명을 선언한다.
              - 선언하고자 하는 변수의 이름과 객체의 프로퍼티명 같다면 한번에 할당할 수 있다.
              - 객체에 없는 프로퍼티를 작성하면 undefined가 할당된다.
  
          2) 배열
              - [] 안에 변수명을 선언한다.
              - 변수명은 마음대로 지을 수 있다.
              - 할당할 값을 인덱스로 구분한다.
          
  */
// let age= obj.age;
// let name = obj.name;
let { age, name, height, inner } = obj;

let userList = ["seok", "jc"];
let [first, second] = userList;

console.log(age, name, height, inner);
console.log(first, second);
