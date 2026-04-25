const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const metricElements = document.querySelectorAll("[data-count]");

const animateNumber = (element) => {
  const target = Number(element.dataset.count);

  if (Number.isNaN(target)) {
    return;
  }

  const duration = 1300;
  const start = performance.now();

  const frame = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

if ("IntersectionObserver" in window) {
  const metricObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          metricObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  metricElements.forEach((element) => metricObserver.observe(element));
} else {
  metricElements.forEach((element) => animateNumber(element));
}
