/* ============================================================
   WANG SHUANGWEI — Personal Brand Website V2.0
   Main JavaScript — Animations, Counters, Interactions
   ============================================================ */

(function () {
  'use strict';

  /* --- Utility: throttle --- */
  function throttle(fn, wait) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, arguments);
      }
    };
  }

  /* --- Utility: debounce --- */
  function debounce(fn, wait) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(this, arguments);
      }, wait);
    };
  }

  /* ============================================================
     1. Navigation — scroll state
     ============================================================ */
  var nav = document.querySelector('.nav');

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', throttle(updateNav, 100));
  updateNav();

  /* ============================================================
     2. Smooth scroll for anchor links
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ============================================================
     3. Scroll Reveal — Intersection Observer
     ============================================================ */
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ============================================================
     4. Timeline animation
     ============================================================ */
  var timelineItems = document.querySelectorAll('.timeline-item');

  if ('IntersectionObserver' in window) {
    var timelineObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineItems.forEach(function (item, i) {
      item.style.transitionDelay = (i * 0.15) + 's';
      timelineObserver.observe(item);
    });
  }

  /* ============================================================
     5. Number Counter Animation
     ============================================================ */
  function animateCounter(el, target, suffix, duration) {
    var start = 0;
    var startTime = null;
    duration = duration || 2000;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var current = Math.floor(easedProgress * target);

      // Format number with commas for thousands
      var formatted = current.toLocaleString('en-US');
      el.textContent = formatted + (suffix || '');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        var finalFormatted = target.toLocaleString('en-US');
        el.textContent = finalFormatted + (suffix || '');
      }
    }

    requestAnimationFrame(step);
  }

  var countersAnimated = false;

  function initCounters() {
    if (countersAnimated) return;

    var counters = document.querySelectorAll('.counter');

    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10);
      var suffix = counter.getAttribute('data-suffix') || '';

      if ('IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                animateCounter(counter, target, suffix, 2200);
                counterObserver.unobserve(entry.target);
                countersAnimated = true;
              }
            });
          },
          { threshold: 0.5 }
        );
        counterObserver.observe(counter);
      } else {
        animateCounter(counter, target, suffix, 2200);
      }
    });
  }

  initCounters();

  /* ============================================================
     6. Growth OS Step Animation
     ============================================================ */
  var gosSteps = document.querySelectorAll('.gos-step');

  if ('IntersectionObserver' in window) {
    var gosObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            gosObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    gosSteps.forEach(function (step, i) {
      step.style.transitionDelay = (i * 0.12) + 's';
      gosObserver.observe(step);
    });
  }

  /* ============================================================
     7. Key Results Cards Animation
     ============================================================ */
  var krCards = document.querySelectorAll('.kr-card');

  if ('IntersectionObserver' in window) {
    var krObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            krObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    krCards.forEach(function (card, i) {
      card.style.transitionDelay = (i * 0.1) + 's';
      krObserver.observe(card);
    });
  }

  /* ============================================================
     8. Parallax effect for hero visual
     ============================================================ */
  var heroVisual = document.querySelector('.hero-visual');

  function handleParallax() {
    if (!heroVisual) return;
    if (window.innerWidth < 1024) return;

    var scrollY = window.scrollY;
    var heroHeight = document.querySelector('.hero');
    if (!heroHeight) return;

    var heroBottom = heroHeight.offsetTop + heroHeight.offsetHeight;
    if (scrollY > heroBottom) return;

    var offset = scrollY * 0.08;
    heroVisual.style.transform = 'translateY(' + offset + 'px)';
  }

  window.addEventListener('scroll', throttle(handleParallax, 16));

  /* ============================================================
     9. Logo wall — hover effect enhancement
     ============================================================ */
  document.querySelectorAll('.logo-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.08)';
    });
    item.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  /* ============================================================
     10. Capability card — hover state management
     ============================================================ */
  document.querySelectorAll('.cap-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      this.style.zIndex = '2';
    });
    card.addEventListener('mouseleave', function () {
      this.style.zIndex = '';
    });
  });

  /* ============================================================
     11. Mobile navigation toggle
     ============================================================ */
  var mobileToggle = document.querySelector('.nav-mobile-toggle');
  var mobileMenu = document.querySelector('.nav-mobile-menu');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        // Animate hamburger
        var spans = mobileToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
          if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
          if (spans[1]) spans[1].style.opacity = '0';
          if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        } else {
          if (spans[0]) spans[0].style.transform = '';
          if (spans[1]) spans[1].style.opacity = '';
          if (spans[2]) spans[2].style.transform = '';
        }
      }
    });
  }

  /* ============================================================
     12. Typed effect for hero subtitle (optional enhancement)
     ============================================================ */
  var heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    // Add a subtle fade-in already handled by CSS
    // This is a placeholder for future typed.js integration
  }

  /* ============================================================
     13. Project card tilt effect (subtle)
     ============================================================ */
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -2;
      var rotateY = ((x - centerX) / centerX) * 2;

      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      setTimeout(function () {
        card.style.transition = '';
      }, 500);
    });
  });

  /* ============================================================
     14. Contact form handling (placeholder for future)
     ============================================================ */
  var contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Future: integrate with Formspree / EmailJS
      alert('感谢您的联系！我会尽快回复。');
    });
  }

  /* ============================================================
     15. Page load animation
     ============================================================ */
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    // Trigger hero animations
    var heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('visible');
    }
  });

  /* ============================================================
     16. Active nav link highlighting
     ============================================================ */
  var sections = document.querySelectorAll('[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    var scrollY = window.scrollY + 200;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', throttle(highlightNav, 100));

  /* ============================================================
     17. Preloader (optional)
     ============================================================ */
  var preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.style.opacity = '0';
        setTimeout(function () {
          preloader.style.display = 'none';
        }, 400);
      }, 300);
    });
  }

  /* ============================================================
     18. Console Easter Egg
     ============================================================ */
  if (window.console) {
    console.log(
      '%c汪双维 — 连锁门店增长顾问',
      'font-size: 20px; font-weight: bold; color: #C4783A;'
    );
    console.log(
      '%c增长，不靠运气。',
      'font-size: 14px; color: #6B5E54;'
    );
  }

})();
