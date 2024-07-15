const layoutContainer = document.querySelector(".layout-container");
const overlay = document.querySelector(".overlay-sidebar");
const primaryNav = document.querySelector(".primary-navigation");
const toggleButton = document.querySelector(".toggle-button");

function toggleSidebar() {
    const isHidden = primaryNav.dataset.hidden === "true";
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    primaryNav.dataset.hidden = !isHidden;
    toggleButton.setAttribute("aria-expanded", !isExpanded);
    overlay.classList.add("active");
}

function closeSidebar() {
    toggleButton.setAttribute("aria-expanded", false);
    primaryNav.dataset.hidden = true;
    overlay.classList.remove("active");
}

function closeFromOutside(e) {
    if (!primaryNav.parentElement.contains(e.target)) {
        closeSidebar();
    }
}

function handleKeyDown(e) {
    if (e.key === "Escape") {
        closeSidebar();
    }
}

layoutContainer.addEventListener("click", closeFromOutside);
toggleButton.addEventListener("click", toggleSidebar);
document.addEventListener("keydown", handleKeyDown);