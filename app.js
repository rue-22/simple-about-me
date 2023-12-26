const ansElements = document.querySelectorAll(
    "#name-ans, #age-ans, #study-ans, #lose-ans"
);
const container = document.querySelector("#container");

container.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.classList.contains("btn")) {
        const button = e.target;
        const answerId = button.name;
        const actualAnswer = document.getElementById(answerId);

        if (actualAnswer.classList.contains("reveal")) {
            actualAnswer.classList.remove("reveal");
        } else {
            actualAnswer.classList.add("reveal");
        }
    }
});
