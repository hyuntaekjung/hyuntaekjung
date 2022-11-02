// id, password 값 콜솔창에 찍어보기
let signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 요소가 가지고 있는 기본 기능을 수행하지 않는다.
  console.log("submit");

  // <form> 안의 <input> 입력값들을 객체 형태로 만든다 => <input> 태그에 name 속성 있어야한다.
  let form = new FormData(signUpForm);

  let obj = convertToObject(form);
  console.log(obj);

  // keys(), values(), entries()로 폼의 키, 밸류, 키-밸류(배열)를 반복하는 이터레이터를 반환한다.
  for (const pair of form.values()) {
    console.log(pair);
  }

  axios
    .post("http://101.101.218.43/users", obj)
    .then((res) => console.log(res));
});

console.log(signUpForm);
//  FormData : <form>의 정보를 가져오거나 추가 및 제거할 수 있다.
let form = new FormData(signUpForm);

form.append("age", 30);
form.append("name", "hyuntaek");

// for ~ og : 반복가능한 객체(이터레이터)를 순회하며 반복 실행한다.
for (const pair of form.keys()) {
  console.log(pair);
}

function convertToObject(form) {
  let obj = {};
  for (pair of form.entries()) {
    obj[pair[0]] = pair[1];
  }
  return obj;
}

let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", async function (e) {
  console.log("실행");
  e.preventDefault();

  //   let form - new FormData(signInForm)
  let formObj = convertToObject(new FormData(signInForm));
  let result = await axios.post("http://101.101.218.43/users/login", formObj);
  try {
    //locoalStorage : 브라우저에 데이터를 저장
    locoalStorage.setItem("access-token", result.data.token);
  } catch (e) {
    alert(e.response.data.message);
    console.log(result);
  }
});

axios
  .get("http://101.101.218.43/docs/all/1", {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndqZDEwNDIwMjY4MjFAZ21haWwuY29tIiwic3ViIjoiNjM2MjVkZGU1YmI1NDZhZDhmYWJiMDA4IiwiaWF0IjoxNjY3MzkxMDgyLCJleHAiOjE2OTg5NDg2ODJ9.M6oL8bwUeu80LW81yyeITETLcqV1ICBVKIqO7htGo8c",
    },
  })
  .then((res) => console.log(res));
