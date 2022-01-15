const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    activeClasses();
    panel.classList.add("active");
  });
});

// remove the active effect from the panel(can be reselected)
function activeClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
