const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? null : "dark";

  toggleBtn.classList.add("rotate");
  setTimeout(() => toggleBtn.classList.remove("rotate"), 500);

  if (newTheme) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
}
