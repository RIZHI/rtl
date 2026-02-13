function requestPilot() {
  const phoneNumber = "919791536477";
  const message =
    "Hello Team, I would like to request the details of the pilot version.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

const blocks = document.querySelectorAll(".block");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

blocks.forEach((block) => observer.observe(block));
