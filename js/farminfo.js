// Top Right Side Cards

function animateCounters() {
    const counters = document.querySelectorAll(".price-card h2");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const prefix = counter.getAttribute("data-prefix") || "";
        const suffix = counter.getAttribute("data-suffix") || "";

        let current = 0;
        const increment = target / 100;

        function update() {
            current += increment;

            if (current < target) {
                counter.innerText =
                    prefix +
                    Math.floor(current).toLocaleString() +
                    suffix;
                requestAnimationFrame(update);
            } else {
                counter.innerText =
                    prefix +
                    target.toLocaleString() +
                    suffix;
            }
        }

        update();
    });
}

window.addEventListener("load", animateCounters);


// Log Harvest Modal or Pop-up Form

const openLogModal = document.getElementById("openLogModal");
const logModal = document.getElementById("logModal");
const closeLogModal = document.getElementById("closeLogModal");

openLogModal.addEventListener("click", function (e) {
    e.preventDefault();
    logModal.classList.add("active");
});

closeLogModal.addEventListener("click", function () {
    logModal.classList.remove("active");
});

window.addEventListener("click", function (e) {
    if (e.target === logModal) {
        logModal.classList.remove("active");
    }
});

// Sell Harvest Modal or Pop-up Form

const openSellModal = document.getElementById("openSellModal");
const sellModal = document.getElementById("sellModal");
const closeSellModal = document.getElementById("closeSellModal");

openSellModal.addEventListener("click", function(e){
    e.preventDefault();
    sellModal.classList.add("active");
});

closeSellModal.addEventListener("click", function(){
    sellModal.classList.remove("active");
});

window.addEventListener("click", function(e){
    if(e.target === sellModal){
        sellModal.classList.remove("active");
    }
});