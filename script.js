// The loaders are CSS-driven and run automatically.
// This script adds a small keyboard accessibility enhancement.
document.addEventListener("keydown", (event) => {
  if (event.key === "Home") {
    document.querySelector(".loader-board").scrollTo({ top: 0, behavior: "smooth" });
  }
  if (event.key === "End") {
    const board = document.querySelector(".loader-board");
    board.scrollTo({ top: board.scrollHeight, behavior: "smooth" });
  }
});
