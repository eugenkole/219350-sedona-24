var popupButton = document.querySelector(".booking-button");
var form = document.querySelector(".search-hotels");
var adults = document.querySelector("[name=adults-amount]");
var children = document.querySelector("[name=children-amount]");
var adultsStorage = localStorage.getItem("adults");
var childrenStorage = localStorage.getItem("children");

form.classList.add("search-hotels-hidden");
popupButton.addEventListener("click", function(evt){
  evt.preventDefault();
  if (form.classList.contains("search-hotels-show")) {
    form.classList.remove("search-hotels-show")
  } else {
    form.classList.add("search-hotels-show");
  }
  if (adultsStorage) {
    adults.value = adultsStorage;
  };
  if (childrenStorage) {
    children.value = childrenStorage;
  }
});

form.addEventListener("submit", function(){
  localStorage.setItem("adults", adults.value);
  localStorage.setItem("children", children.value);
});
