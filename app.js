document.querySelectorAll(".cart__button").forEach((element) => {
  element.onclick = function () {
    element.classList.add("clicked");
    setTimeout(function () {
      element.classList.remove("clicked");
    }, 2000);
  };
});
