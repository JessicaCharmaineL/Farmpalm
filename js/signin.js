const sign_in_btn = document.getElementById("signinbtn");

const sign_up_btn = document.getElementById("signupbtn");

const container = document.querySelector(".container");

sign_up_btn.onclick = () => {
    console.log("SIGN UP CLICKED");
    container.classList.add("sign-up-mode");
};

sign_in_btn.onclick = () => {
    console.log("SIGN IN CLICKED");
    container.classList.remove("sign-up-mode");
};


// for burger menu (toggle)

const burger = document.getElementById("burgerMenu");
const dropdown = document.getElementById("burgerDropdown");

burger.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});