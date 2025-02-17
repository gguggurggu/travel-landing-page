export function customScroll() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const indicator = document.querySelector(".scroll-indicator span");
    if (indicator) {
      indicator.style.width = scrollPercent + "%";
    }
  });
}
