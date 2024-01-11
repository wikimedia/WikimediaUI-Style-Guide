var icon = document.getElementById("icon");

icon.onclick = function () {
    var setTheme = document.body;
    setTheme.classList.toggle("dark-theme");

    var theme;
    if (setTheme.classList.contains("dark-theme")) {
        img.src = "../resources/dark theme icon/sun.png";
        theme = "Dark";
    } else {
        img.src = "../resources/dark theme icon/moon.png";
        theme = "light";
    }

    // Save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

// Get and apply the theme on page load
const img = document.getElementById("img");
let savedTheme = JSON.parse(localStorage.getItem("PageTheme"));
if (savedTheme === "Dark") {
    document.body.className = "dark-theme";
    img.src = "../resources/dark theme icon/sun.png";
} else {
    img.src = "../resources/dark theme icon/moon.png";
}
