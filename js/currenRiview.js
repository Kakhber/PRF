const listTitle = document.querySelectorAll(".li-list");
const allLi = document.querySelectorAll(".li-all");

for (let i = 0; i < listTitle.length; i++) {
    listTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, listTitle[i])
  );
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i].classList.contains(item.attributes.id.value)) {
        allLi[i].style.display = "block";
    } else {
        allLi[i].style.display = "none";
    }
  }
}

function changeActivePosition(activeItem) {
  for (let i = 0; i < listTitle.length; i++) {
    listTitle[i].classList.remove("active");
  }
  activeItem.classList.add("active");
}