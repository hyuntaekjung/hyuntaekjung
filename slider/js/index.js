let itemList = document.querySelectorAll(".item");
let btnList = document.querySelectorAll(".btns li button");
let wrapper = document.querySelector(".wtapper");

//  슬라이드 아이템 색상 추가
itemList[0].style.backgroundColor = "red";
itemList[1].style.backgroundColor = "blue";
itemList[2].style.backgroundColor = "yellow";

// 버튼 클릭시 슬라이드 움직이기
btnList.forEach(function (btn, idx) {
  btn.addEbentListener("click", function () {
    wrapper.style.transform = `translateX(${idx * -100}vw)`;
  });
});
