
function requestPilot() {
  alert(
    "Thanks for your interest. Pilot requests are currently handled manually.",
  );
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
