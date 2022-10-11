/* 표현식 : 값으로 평가되어 새로운 값을 생성
    => 값으로 평가될 수 있는 모든 것이 식. */

var num = 10 + 30;
var num02 = num;

// 문 : 프로그램을 구성하는 최소 단위. 문에 식이 포함.
var x;

// 자료형 : 프로그램이 처리할 수 있는 자료의 형태.

/*
   1. 숫자형 - 숫자를 나타내느 데이터. 숫자만 작성.
   - JS에서는 정수와 실수를 구분하지 않는다.JS에서는
*/
var year = 2022;
var PI = 3.14;
console.log(typeof year, typeof PI);

/*
   2. 문자열 - 문자를 나타내는 데이터. "" 나 '' 안에 문자를 작성한다.
*/

var name = "Jung Hyuntaek";
console.log(name);

var num04 = "1";
console.log(num04 + 2); //문자열과 숫자를 더하면 문자열끼리 더한다. => 오류 발생x.

/*
  3. 논리형 - 참과 거짓으로 표현되는 자료형 => true(참, 1), fasle(거짓, 0)
  - 조건식과 같이 사용한다. => 비교 연산자의 결과값은 논리형 데이터로 반환된다.
*/
var isTrue = true;
console.log(typeof isTrue);
var isBig = 10 > 100; //=> 비교 연산자의 결과값은 논리형 데이터로 반환된다.
console.log(isBig);

/*
   undefined와 null
   - 둘 다 false처럼 취급이 된다.
   - undefined는 아무 값도 할당되지 않았을 때 자동으로 할당이 된다.
   - null은 개발자가 유효하지 않은 값으로 "명시적"으로 할당을 한다.
 */
var data;
console.log(data);
data = null; // 개발자가 명시적으로 할당.
console.log(data);

/*
   배열(Array): 여러 개의 데이터를 저장한다.
   순서(index)로 데이터를 참조 => 순서는 0부터 시작한다.
   인덱스 값으로는 숫자를 사용. => 숫자로 평가되는 식을 사용 가능하다.
*/
var arr = [10, 20, 30];
console.log(arr);
console.log("두번째 값은", arr[1]);
console.log(arr[10 - 9]);

/*
   객체(Object) : 여러 개의 데이터를 구조화하여 저장 가능하다.
   {}안에 Key(속성이름) : Value(속성값)의 형태로 작성하다.
   ,(쉼표)로 구분하여 여러개의 속성을 작성한다.
   "객체.속성명(Key)"를 참조하여 해당 키에 저장되어 있는 값(Value)
   "객체[속성명]"의 형태로도 참조할 수 있다.
   속성값(Value)으로는 함수도 할당이 가능하다. => 메소드(Mehtod)라고 표현한다.
   JS에서 모든 것이 객체이다.
*/

var obj = {
  age: 30,
  firstName: "Jung",
  lastName: "Hyuntaek",
  family: {
    father: "아빠",
  },
};
console.log(obj.age);
console.log(obj.family.father);
console.log(obj["first" + "Name"]);
