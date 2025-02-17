export function autoScroll() {
  const container = document.getElementById("welcome-page-img-container");
  let position = 0;
  let isPaused = false;

  function slideImages() {
    if (!isPaused) {
      position -= 0.35;
      container.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }
    }
    requestAnimationFrame(slideImages);
  }

  container.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    isPaused = true;
  });

  container.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // 이미지 복사본 생성 및 슬라이드 시작
  function createInfiniteScroll() {
    const originalImages = Array.from(container.querySelectorAll("img"));
    originalImages.forEach((img) => {
      const clone = img.cloneNode(true);
      container.appendChild(clone);
    });
    slideImages();
  }

  createInfiniteScroll();
}
