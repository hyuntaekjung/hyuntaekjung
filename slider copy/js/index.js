let itemList = document.querySelectorAll(".item");
let btnList = document.querySelectorAll(".btns li button");
let wrapper = document.querySelector(".wrapper");

btnList.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    wrapper.style.transform = `translateX(${idx * -100}vw)`;
  });
});
