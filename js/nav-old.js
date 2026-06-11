const hamburger = document.getElementById("hamburger");
const rightColumn = document.querySelector(".right-column");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    rightColumn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !rightColumn.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        rightColumn.classList.remove("active");
    }
});