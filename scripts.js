const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? null : "dark";

  toggleBtn.classList.add("phase");

  setTimeout(() => {
    // Apply theme after phase-out starts
    if (newTheme) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, 150); // Phase-out before switch

  setTimeout(() => {
    toggleBtn.classList.remove("phase");
  }, 400); // Phase-in done
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
}
