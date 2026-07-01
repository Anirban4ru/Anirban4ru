function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle the menu and icon states
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Add a fade effect when the menu opens
  if (menu.classList.contains("open")) {
    menu.style.opacity = "0";
    setTimeout(() => (menu.style.opacity = "1"), 10);
  } else {
    menu.style.opacity = "1";
    setTimeout(() => (menu.style.opacity = "0"), 10);
  }

  // Close the menu when clicking outside the dailer menu and without hovering around keep it on the screen as it is
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !icon.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  });
}

// Close the menu if a link inside it is clicked to shut the drop box downconsole.log("Menu toggled");
console.log("Menu opened");
console.log("Menu closed");
console.log("Link clicked, menu closed");
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  });
});
