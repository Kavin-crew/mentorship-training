"use strict";

// to select all the buttons
const tabs = document.querySelectorAll(".item");
// to select the parent element
const tabsContainer = document.querySelector(".accordion");

// event deligation
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".item");
  console.log(clicked);
  if (!clicked) return;

  if (clicked.classList.contains("active")) {
    clicked.classList.remove("active");
  } else {
    tabs.forEach((btn) => btn.classList.remove("active"));
    //   then add active class to current tab clicked
    clicked.classList.add("active");
  }
});
