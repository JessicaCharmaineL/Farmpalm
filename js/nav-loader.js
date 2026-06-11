fetch("/components/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        const hamburger = document.getElementById("hamburger");
        const rightColumn = document.querySelector(".right-column");

        if (hamburger && rightColumn) {

            // Open / Close hamburger
            hamburger.addEventListener("click", (e) => {
                e.stopPropagation();
                rightColumn.classList.toggle("active");
            });

            // Close when clicking outside
            document.addEventListener("click", (e) => {
                if (
                    !rightColumn.contains(e.target) &&
                    !hamburger.contains(e.target)
                ) {
                    rightColumn.classList.remove("active");
                }
            });

        }

        // =========================
        // Active Navigation
        // =========================

        const currentPage = window.location.pathname;

        if (
            currentPage.includes("about.html") ||
            currentPage.includes("faq.html")
        ) {
            document
                .getElementById("nav-about")
                ?.classList.add("active-nav");
        }

        else if (
            currentPage.includes("contact.html")
        ) {
            document
                .getElementById("nav-contact")
                ?.classList.add("active-nav");
        }

        else if (
            currentPage.includes("market.html") ||
            currentPage.includes("signupbuy.html")
        ) {
            document
                .getElementById("nav-buy")
                ?.classList.add("active-nav");
        }

        else if (
            currentPage.includes("farmer.html") ||
            currentPage.includes("aggregator.html") ||
            currentPage.includes("processor.html") ||
            currentPage.includes("signupsell.html")
        ) {
            document
                .getElementById("nav-supply")
                ?.classList.add("active-nav");
        }


/* =========================
   FLOATING MENU SYSTEM
========================= */

        const floatingNavBtn = document.getElementById("floatingNavBtn");
        const floatingMenu = document.getElementById("floatingMenu");

        if (floatingNavBtn && floatingMenu) {

            // Show button only after scrolling
            window.addEventListener("scroll", () => {

                if (window.scrollY > 400) {
                    floatingNavBtn.classList.add("show");
                } else {
                    floatingNavBtn.classList.remove("show");

                    // auto-close menu when scrolling back to top
                    floatingMenu.classList.remove("show");
                }

            });

            // Toggle floating menu
            floatingNavBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                floatingMenu.classList.toggle("show");
            });

            // Close menu when clicking outside
            document.addEventListener("click", (e) => {

                if (
                    floatingMenu.classList.contains("show") &&
                    !floatingMenu.contains(e.target) &&
                    !floatingNavBtn.contains(e.target)
                ) {
                    floatingMenu.classList.remove("show");
                }

            });

        }

        
    })
    .catch(error => {
        console.error("Navbar failed to load:", error);
    });