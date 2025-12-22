// ============================================
// JAVASCRIPT - GRAND DISPLAY MAKER
// ============================================

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Add scroll reveal classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Features cards - different animations for each
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    if (index % 3 === 0) {
      card.classList.add("fade-in-left");
    } else if (index % 3 === 1) {
      card.classList.add("scale-in");
    } else {
      card.classList.add("fade-in-right");
    }
    observer.observe(card);
  });

  // Solution cards - rotating animations
  const solutionCards = document.querySelectorAll(".solution-card");
  solutionCards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add("rotate-in");
    } else {
      card.classList.add("scale-in");
    }
    observer.observe(card);
  });

  // Portfolio items - fade from different directions
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item, index) => {
    if (index % 4 === 0) {
      item.classList.add("fade-in-left");
    } else if (index % 4 === 1) {
      item.classList.add("fade-in-right");
    } else if (index % 4 === 2) {
      item.classList.add("scale-in");
    } else {
      item.classList.add("rotate-in");
    }
    observer.observe(item);
  });

  // Testimonial cards - scale in
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.classList.add("scale-in");
    observer.observe(card);
  });

  // Stats cards - fade in from bottom
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card, index) => {
    card.classList.add("scroll-reveal");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Section headers
  const sectionHeaders = document.querySelectorAll(".section-header");
  sectionHeaders.forEach((header) => {
    header.classList.add("scroll-reveal");
    observer.observe(header);
  });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.style.display = "flex";
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 500) {
        backToTopButton.style.display = "none";
      }
    }, 300);
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuToggle.textContent = navLinks.classList.contains("active")
      ? "✕"
      : "☰";
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuToggle.textContent = "☰";
    });
  });
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Trigger entrance animations
  setTimeout(() => {
    const heroElements = document.querySelectorAll(
      ".hero-badge, .hero-title, .hero-description, .hero-stats, .hero-buttons"
    );
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 100);
});

// ============================================
// LAZY LOADING FOR IMAGES (if you add real images)
// ============================================
const lazyLoadImages = () => {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

lazyLoadImages();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for mousemove events
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
