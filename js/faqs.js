const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {

            if(item !== currentItem){
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});