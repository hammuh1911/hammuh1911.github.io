// Theme Toggle

const button = document.getElementById("themeToggle");

if (button) {

    // Restore previous theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        button.textContent = "☀️ Light Mode";
    }

    button.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            button.textContent = "☀️ Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            button.textContent = "🌙 Dark Mode";

        }

    });

}

function copyPrompt(elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        alert("Prompt not found.");
        return;
    }

    navigator.clipboard.writeText(element.innerText)
        .then(() => {
            alert("Prompt copied to clipboard.");
        })
        .catch(err => {
            console.error(err);
            alert("Copy failed.");
        });
}