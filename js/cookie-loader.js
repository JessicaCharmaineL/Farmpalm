fetch("/components/cookie-banner.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("cookie").innerHTML = data;

        const banner = document.getElementById("cookieBanner");
        const acceptBtn = document.getElementById("acceptCookies");
        const declineBtn = document.getElementById("declineCookies");

        if (!banner) {
            console.error("Cookie banner not found in DOM");
            return;
        }

        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem("farmpalmCookies");

        if (cookieChoice === "accepted" || cookieChoice === "declined") {
            // Already decided — keep it hidden
            banner.style.display = "none";
        } else {
            // No choice yet — show the banner
            banner.style.display = "flex";
        }

        acceptBtn?.addEventListener("click", () => {
            localStorage.setItem("farmpalmCookies", "accepted");
            banner.style.display = "none";
        });

        declineBtn?.addEventListener("click", () => {
            localStorage.setItem("farmpalmCookies", "declined");
            banner.style.display = "none";
        });
    })
    .catch(err => console.error("Cookie loader failed:", err));