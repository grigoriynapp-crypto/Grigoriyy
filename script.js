// Небольшие анимации появления при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .skill-card, .interest, .social").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Плавный эффект при движении мыши на фото
const avatar = document.querySelector(".avatar-card");
if (avatar && window.matchMedia("(pointer:fine)").matches) {
  avatar.addEventListener("mousemove", (e) => {
    const r = avatar.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    avatar.style.transform = `rotate(${2 + x * 3}deg) translate(${x * 5}px, ${y * 5}px)`;
  });
  avatar.addEventListener("mouseleave", () => {
    avatar.style.transform = "rotate(2deg)";
  });
}
