$(function () {
  (function () {
    "use strict";

    var items = document.querySelectorAll(".animated-search-filter > *");
    var itemHeight = items[0].offsetHeight;
    var texts = [];
    var i = -1;
    var len = items.length;

    while (++i < len) {
      texts.push(items[i].textContent.trim());
    }


    [0, 1].forEach(function (index) {
      document.querySelectorAll("input.animated-search-filter")[index].addEventListener("input", function () {
        var re = new RegExp(this.value, "i");
        texts.forEach(function (element, index) {
          if (re.test(element)) {
            items[index].classList.remove("hidden")
          }
          else {
            items[index].classList.add("hidden")
          }
        })
      })
    });
  })();
});
