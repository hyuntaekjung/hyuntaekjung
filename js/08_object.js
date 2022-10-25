/* 
    객체 : 여러 데이터를 키와 밸류 쌍으로 작성하는 형태
*/
let user = {
  age: 30,
  name: "seok",
  height: 173,
};

// 객체의 프로퍼티를 참조
console.log(user.age);

// 객체의 프로퍼티에 다른 값 할당
user.age = 31;
console.log(user.age);
user.nickname = "cocacola"; // 객체에 없는 프로퍼티 할당 가능

console.log(user.nickname);

// 객체[속성명]의 형태로 참조
console.log(user["age"]);

// 객체에 없는 프로퍼티 참조하면 undefined 출력
console.log(user.weight);
// undefined에 프로퍼티 참조하면 오류 발생
// console.log(user.weight.num);

/* 
  상수(const)로 객체 할당시 특징 
    - 객체를 상수에 할당해도 객체의 프로퍼티 값은 할당 가능하다. 
      => 원시타입, 참조타입에 대해 공부해보기!
*/
const a = {
  name: "seok",
};
a.name = "hwangbo";
a.age = 30;
console.log(a.age);

/* 
  1. 메서드(Method)
    => 객체의 프로퍼티 값에 할당된 함수 => 그 객체만의 함수
*/
let user01 = {
  name: "hwangbo",
  age: 30,
  // greeting이라는 프로퍼티에 함수를 할당
  greeting: function () {
    console.log("안녕하세요!");
  },

  // 축약형 메서드 => JS에서의 진정한 의미의 메서드
  hello() {
    console.log("Hello!");
  },
};

user01.greeting();
user01.hello();

/* 
  2. this
    - 메서드를 호출한 객체
    - this를 통해서 객체가 가지고 있는 고유한 정보(프로퍼티)를 통해서 메서드를 만들 수 있다.
*/
let rect = {
  width: 100,
  height: 100,
  getArea() {
    console.log(this.width * this.height);
  },
};

let rect02 = {
  width: 50,
  height: 50,
  getArea() {
    console.log(this.width * this.height);
  },
};

rect.getArea();
rect02.getArea();

/* 
  palyer라는 객체를 만드는데 
  1. name 프로퍼티
  2. "안녕하세요 황보석입니다."와 같이 자기 소개를 하는 메서드 만들기
  3. 템플릿 리터럴 사용해서 만들기 => 문자열 안에 변수 포함시키는 문법
*/
let player = {
  name: "seok",
  greeting() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

player.greeting.apply(a);
player.greeting();

/* 
  3. 메서드로 화살표 함수를 지정하면 this 바인딩이 안된다.
    => 최상위 객체를 가르키게 된다. => 브라우저 환경에서는 window 객체를 가르킨다.
    => apply, bind, call를 사용해도 바인딩이
*/
let car = {
  speed: 30,
  run: function (hour) {
    console.log(this);
    console.log(`${this.speed * hour}km 달렸습니다.`);
  },
};

let car02 = {
  speed: 60,
};

// car.run.call(car02 ,2);
car.run(2);

/* 
  생성자(Constructor) : 객체(Instance)를 찍어낼 수 있는 틀(Template)과 역할
    => 생성자 함수, 클래스로 생성 가능
*/

/* 
  생성자 함수 : 함수 내부에서 this.프로퍼티를 할당하면 생성자 함수가 된다.

  생성자(Constructor) : 생성할 객체에 대한 형태(틀)을 미리 만들어 놓는다.
    => 자동차 공장에서의 자동차 틀과 같은 역할
    => 함수 호출 때 전달된 인자를 this.프로퍼티에 할당하는 식으로 사용
  
  인스턴스(Instance) : 실제로 생성된 객체로 메모리 실제로 할당
    => new 키워드와 함께 호출하면 인스턴스 반환
    => 실제로 만들어진 제품과 같다.
*/
function Car(speed) {
  this.speed = speed;
  this.run = function (hour) {
    console.log(`${this.speed * hour}km 달렸습니다.`);
  };
}

/* 
  프로토타입 : 프로토타입은 객체에 프로퍼티와 메서드를 상속
    => 상속받는 객체에서 사용 가능 => 상속하는 객체에서는 사용 불가
*/
Car.prototype.sayHi = function () {
  console.log("안녕하세요");
};

let car03 = new Car(60);
let car04 = new Car(100);
car03.run(2);
car04.run(2);
car03.sayHi();

/* 
  클래스 : JS의 프로토타입을 이용한 문법적 설탕

  constructor 메서드를 통해 인스턴스 초기화

*/
class User {
  // 생성자 호출될 때 무조건 실행
  constructor(name, age) {
    this.name = name;
    this.age = age;

    User.count++;
  }

  // 정적 프로퍼티 : 생성자를 통해서만 접근 가능
  static count = 0;

  // 프로토타입 메서드 : 생성된 인스턴스를 통해서 호출되는 함수
  hello() {
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  }

  // 정적 메서드 : 생성자를 통해서 호출되는 함수
  static isUser(obj) {
    return obj instanceof User;
  }
}

let user02 = new User("seok", 30);
console.log(user02);
user02.hello();
console.log(User.isUser({}));

let date = new Date();

let arr = [];
let obj = {};

let arr02 = new Array(10);
console.log(Array.isArray(arr));
console.log(arr instanceof Object);
console.log(date instanceof Object);

let user03 = new User("hwangbo", 30);
let user04 = new User("hwangbo", 30);
console.log("User count: ", User.count);

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
}

// extends : 클래스를 상속 받는다.
class Dog extends Animal {
  // this를 참조하려면 무조건 super()를 호출 => 상위 클래스의 constructor 호출
  constructor(color) {
    super(4);
    this.color = color;
  }
}

let dog = new Dog("red");
console.log(dog);

class Human extends Animal {
  constructor(race) {
    super(2);
    this.race = race;
  }
}

let human = new Human("yellow");

class Male extends Human {
  constructor(race, hairColor) {
    super(race);
    this.hairColor = hairColor;
  }
}

let male = new Male("white", "blond");

console.log(male.legs);
