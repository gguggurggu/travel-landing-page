export function bannerSlider() {
  let currentBannerIndex = 0;
  const banners = document.querySelectorAll(".banner");

  banners[currentBannerIndex].style.display = "block";

  setInterval(() => {
    banners[currentBannerIndex].style.display = "none";
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    banners[currentBannerIndex].style.display = "block";
  }, 3000);
}
