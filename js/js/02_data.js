/* 
    표현식 : 값으로 평가돼서 새로운 값을 생성
        => 값으로 평가될 수 있는 모든 것이 식.
*/

var num = 10 + 30;
var num02 = num;

// 문 : 프로그램을 구성하는 최소 단위. 문에 식이 포함.
var x;

// 자료형 : 프로그램이 처리할 수 있는 자료의 형태.

/* 
    1. 숫자형 - 숫자를 나타내는 데이터. 숫자만 작성.
    - JS에서는 정수와 실수를 구분하지 않는다.
*/
var year = 2022;
var PI = 3.14;
console.log(typeof year, typeof PI);
console.log(0.1 + 0.2); // 부동소수점 표현 때문에 생기는 오차. 정밀한 수학계산에는 적합 x.

/*
    2. 문자열 - 문자를 나타내는 데이터. ""(큰따옴표)나 ''(작은따옴표) 안에 문자를 작성.
        => JS에서는 ""와 '' 구분 x => 문자와 문자열 구분 x.
*/
var name = "Seok     Hwangbo";
console.log(name);
var num04 = "1";
console.log(num04 + 2); // 문자열과 숫자를 더하면 문자열끼리 더한다. => 오류 발생 x.

/*
    논리형(boolean) : 참과 거짓으로 표현되는 자료형 => true(참, 1), fasle(거짓, 0)
        => 조건식과 함께 사용한다. => 비교 연산자의 결과값은 논리형 데이터가 반환된다.
*/
var isTrue = true;
console.log(typeof isTrue);
var isBig = 10 < 100; // 비교 연산자를 통해 값을 비교후 false 반환.
console.log(isBig);

/*
    undefined와 null
    - 둘다 false처럼 취급이 된다.
    - undefined는 아무값도 할당하지 않았을 때 자동으로 할당된다.
    - null은 개발자가 유효하지 않은 값으로 "명시적"으로 할당한다.
*/
var data;
console.log(data);
data = null; // 개발자가 명시적으로 할당.
console.log(data);

/*
    배열(Array) : 여러개의 데이터를 저장한다.
    순서(인덱스)로 데이터를 참조 => 순서는 0부터 시작, 즉 첫번째는 0, 두번째는 1....
    인덱스 값으로는 숫자를 사용. => 숫자로 평가되는 "표현식" 사용 가능.
*/
var arr = [10, 20, 30];
console.log(arr);
console.log("두번째 값은", arr[1]);
console.log(arr[10 - 9]);

/*
    객체(Object) : 여러개의 데이터를 구조화하여 저장 가능하다.
    {} 안에 key(속성이름) : value(속성값)의 형태로 작성하다.
    ,(쉼표)로 구분하여 여러개의 속성을 작성한다.
    "객체.속성명(key)"의 형태로 참조하면 해당 키에 저장되어 있는 값(value)를 참조할 수 있다.
    "객체[속성명]"의 형태로도 참조할 수 있다.
    속성값(value)로는 함수도 할당 가능하다. => 메서드(Method)라고 표현한다.
    JS에서 모든 것이 객체다.
*/

var obj = {
  age: 30,
  firstName: "Seok",
  lastName: "Hwangbo",
  family: {
    father: "아빠",
  },
};

console.log(obj.age);
console.log(obj.family.father);
console.log(obj["first" + "Name"]);
