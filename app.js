// Scroll to projects section
function scrollToProjects() {
    const projectsSection = document.querySelector('#work');
    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize index page animations
if (document.querySelector('.projects-section') && !document.querySelector('.project-section')) {
    initIndexPageAnimations();
}

function initIndexPageAnimations() {
    // Scroll reveal for hero section elements
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const linkedinButton = document.querySelector('.linkedin-button');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (heroTitle) {
        setTimeout(() => heroTitle.classList.add('visible'), 100);
    }
    if (heroDescription) {
        setTimeout(() => heroDescription.classList.add('visible'), 300);
    }
    if (linkedinButton) {
        setTimeout(() => linkedinButton.classList.add('visible'), 500);
    }
    if (scrollIndicator) {
        setTimeout(() => scrollIndicator.classList.add('visible'), 700);
    }

    // Staggered reveal for project cards
    const projectCards = document.querySelectorAll('.project-card-wrapper');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        cardObserver.observe(card);
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.classList.add('is-sticky');
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        if (window.scrollY === 0) header.classList.remove('is-sticky');
    }
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Add click handlers for external links
document.querySelectorAll('.external-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a small delay for visual feedback
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 150);
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.hero-section, .projects-section, .contact-section');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation .nav-link:focus,
    .keyboard-navigation .contact-link:focus,
    .keyboard-navigation .cta-button:focus {
        outline: 2px solid var(--black);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Deferred YouTube embed: replace placeholder with iframe on click
// Initialize YouTube iframes with proper origin once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const iframes = document.querySelectorAll('iframe[data-youtube-id]');
    iframes.forEach(frame => {
        const id = frame.getAttribute('data-youtube-id');
        if (!id) return;
        const origin = (location.protocol === 'http:' || location.protocol === 'https:') ? location.origin : '';
        const src = `https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0&modestbranding=1&playsinline=1${origin ? `&origin=${encodeURIComponent(origin)}` : ''}`;
        frame.src = src;
        frame.style.width = '100%';
        frame.style.height = '100%';
        frame.style.border = '0';
    });

    // Generate Table of Contents
    generateTableOfContents();

    // Initialize scroll spy
    initScrollSpy();

    // Initialize prototype slider
    initPrototypeSlider();

    // Initialize scroll reveal
    initScrollReveal();

    // Initialize wireframes drag scroll
    initWireframesDragScroll();

    // Initialize image modal
    initImageModal();

    // Initialize flip card
    initFlipCard();

    // Initialize Visual Language Alignment
    initVisualLanguageAlignment();

    // Initialize button click toggle
    initButtonStateToggle();

    // Initialize input state simulation
    initInputStateSimulation();
});

// Initialize input state simulation for single field
function initInputStateSimulation() {
    const input = document.querySelector('.spring-input');
    if (!input) return;

    // Handle blur to simulate filled vs error state
    input.addEventListener('blur', function() {
        // Reset error state first
        this.classList.remove('error-input');

        // Remove any existing error message
        const nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('input-error-msg')) {
            nextEl.remove();
        }

        const value = this.value.trim();
        if (value.length > 0) {
            this.classList.add('filled');

            // Simple fake validation: if it doesn't contain @, show error style
            // This lets the user see the "Error" state by typing "test" and clicking away
            if (!value.includes('@')) {
                this.classList.add('error-input');

                // Add error message
                const msg = document.createElement('span');
                msg.className = 'input-error-msg';
                msg.style.color = '#F59779';
                msg.style.fontSize = '12px';
                msg.style.fontFamily = "'Satoshi', sans-serif";
                msg.style.paddingLeft = '24px'; // Align with text padding
                msg.style.marginTop = '2px'; // Reduced top margin
                msg.textContent = 'Invalid email address';

                // Insert after input
                this.insertAdjacentElement('afterend', msg);
            }
        } else {
            this.classList.remove('filled');
        }
    });
}

// Initialize button state toggle (click to focus, click again to static)
function initButtonStateToggle() {
    const buttons = document.querySelectorAll('.spring-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Toggle the focused state class
            if (this.classList.contains('is-focused')) {
                this.classList.remove('is-focused');
                this.blur(); // Remove native browser focus so :focus styles don't persist
            } else {
                this.classList.add('is-focused');
            }
        });
        // Removed blur listener to allow buttons to toggle independently without affecting each other
    });
}

// Generate table of contents from headings
function generateTableOfContents() {
    const tocContainer = document.getElementById('tableOfContents');
    const sidebar = document.querySelector('.floating-sidebar');

    if (!tocContainer || !sidebar) return;

    // Find all h2 and h3 headings in hero and project sections
    const heroSection = document.querySelector('.hero-section');
    const projectSections = document.querySelectorAll('.project-section');

    // Collect all headings from hero and project sections
    const headings = [];

    // Add hero section headings (but skip the TURTLUP tag)
    if (heroSection) {
        heroSection.querySelectorAll('h2, h3').forEach(heading => {
            // Skip the TURTLUP tag and role/expertise/team/year labels
            const text = heading.textContent.trim();
            if (!['TURTLUP', 'ROLE', 'EXPERTISE', 'TEAM', 'YEAR'].includes(text.toUpperCase())) {
                headings.push(heading);
            }
        });
    }

    // Add project section headings (but skip flip card headings)
    projectSections.forEach(section => {
        const sectionHeadings = section.querySelectorAll('h2, h3');
        sectionHeadings.forEach(heading => {
            // Skip headings inside flip cards
            if (!heading.closest('.flip-card')) {
                headings.push(heading);
            }
        });
    });

    if (headings.length === 0) return;

    // Show sidebar
    sidebar.classList.add('visible');

    // Create dots indicator
    const indicator = document.createElement('div');
    indicator.className = 'sidebar-indicator';

    // Store mapping between headings and dots
    const headingToDotMap = new Map();

    headings.forEach((heading) => {
        const dot = document.createElement('div');
        dot.className = 'sidebar-dot';

        // Add class based on heading level
        if (heading.tagName === 'H2') {
            dot.classList.add('h2-dot');
        } else if (heading.tagName === 'H3') {
            dot.classList.add('h3-dot');
        }

        // Store mapping
        headingToDotMap.set(heading, dot);

        indicator.appendChild(dot);
    });

    sidebar.appendChild(indicator);

    // Store mapping globally for scroll spy
    window.headingToDotMap = headingToDotMap;

    // Create list
    const list = document.createElement('div');

    headings.forEach((heading, index) => {
        // Generate ID if not present
        if (!heading.id) {
            const text = heading.textContent.trim().toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            heading.id = `section-${text}-${index}`;
        }

        // Create link
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();

        // Add class based on heading level
        if (heading.tagName === 'H3') {
            link.classList.add('toc-h3');
        }

        // Add click handler
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById(heading.id);
            if (target) {
                // If the heading is inside a prototype slide, scroll the slider to show it first
                const prototypeSlide = target.closest('.prototype-slide');
                if (prototypeSlide) {
                    const slider = document.getElementById('prototypeSlider');
                    if (slider) {
                        // Find the index of this slide
                        const slides = Array.from(slider.querySelectorAll('.prototype-slide'));
                        const slideIndex = slides.indexOf(prototypeSlide);

                        if (slideIndex !== -1) {
                            // Scroll the horizontal slider to show this slide
                            const slideWidth = slider.clientWidth;
                            slider.scrollTo({
                                left: slideIndex * slideWidth,
                                behavior: 'smooth'
                            });

                            // Wait a bit for the slider to scroll, then scroll the page
                            setTimeout(() => {
                                const rect = target.getBoundingClientRect();
                                const offsetTop = window.scrollY + rect.top - 100; // Account for header
                                window.scrollTo({
                                    top: offsetTop,
                                    behavior: 'smooth'
                                });
                            }, 300);
                            return;
                        }
                    }
                }

                // For regular headings, scroll directly
                const rect = target.getBoundingClientRect();
                const offsetTop = window.scrollY + rect.top - 100; // Account for header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });

        list.appendChild(link);
    });

    tocContainer.appendChild(list);
}

// Initialize scroll spy to highlight current section
function initScrollSpy() {
    const tocLinks = document.querySelectorAll('#tableOfContents a[href^="#"]');

    // Use the EXACT same headings array structure as generateTableOfContents
    const heroSection = document.querySelector('.hero-section');
    const projectSections = document.querySelectorAll('.project-section');

    // Collect all headings in the same order as generateTableOfContents
    const headings = [];

    // Add hero section headings (but skip the TURTLUP tag) - matching generateTableOfContents exactly
    if (heroSection) {
        heroSection.querySelectorAll('h2, h3').forEach(heading => {
            // Skip the TURTLUP tag and role/expertise/team/year labels
            const text = heading.textContent.trim();
            if (!['TURTLUP', 'ROLE', 'EXPERTISE', 'TEAM', 'YEAR'].includes(text.toUpperCase())) {
                headings.push(heading);
            }
        });
    }

    // Add project section headings - matching generateTableOfContents exactly (but skip flip card headings)
    projectSections.forEach(section => {
        const sectionHeadings = section.querySelectorAll('h2, h3');
        sectionHeadings.forEach(heading => {
            // Skip headings inside flip cards
            if (!heading.closest('.flip-card')) {
                headings.push(heading);
            }
        });
    });

    // Generate IDs matching generateTableOfContents format
    headings.forEach((heading, index) => {
        if (!heading.id) {
            const text = heading.textContent.trim().toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            heading.id = `section-${text}-${index}`;
        }
    });

    if (tocLinks.length === 0 || headings.length === 0) return;

    function updateActiveLink() {
        const scrollOffset = 150; // Offset for header
        const scrollPosition = window.scrollY + scrollOffset;

        // Check which prototype slide is currently visible (if any)
        const slider = document.getElementById('prototypeSlider');
        let visiblePrototypeHeading = null;

        if (slider) {
            const slides = Array.from(slider.querySelectorAll('.prototype-slide'));
            const sliderRect = slider.getBoundingClientRect();
            const sliderLeft = sliderRect.left;
            const sliderRight = sliderRect.right;
            const sliderCenter = sliderLeft + sliderRect.width / 2;

            // Find which slide is currently most visible (has the most overlap with viewport)
            let bestSlide = null;
            let maxOverlap = 0;

            for (const slide of slides) {
                const slideRect = slide.getBoundingClientRect();
                // Calculate overlap between slide and slider viewport
                const overlapLeft = Math.max(sliderLeft, slideRect.left);
                const overlapRight = Math.min(sliderRight, slideRect.right);
                const overlap = Math.max(0, overlapRight - overlapLeft);

                if (overlap > maxOverlap) {
                    maxOverlap = overlap;
                    bestSlide = slide;
                }
            }

            if (bestSlide) {
                const h3Heading = bestSlide.querySelector('h3');
                if (h3Heading) {
                    visiblePrototypeHeading = h3Heading;
                }
            }
        }

        // Find the current section using getBoundingClientRect for accuracy
        let currentSection = null;

        for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];

            // If this is a prototype heading, check if it's the visible one
            const prototypeSlide = heading.closest('.prototype-slide');
            if (prototypeSlide) {
                // Only consider prototype headings if we have a visible one
                if (visiblePrototypeHeading && heading === visiblePrototypeHeading) {
                    // Check if we're scrolled to the prototype section area
                    const wrapper = heading.closest('.prototype-slider-wrapper');
                    if (wrapper) {
                        const wrapperRect = wrapper.getBoundingClientRect();
                        // Check if the wrapper is in view (with some buffer)
                        if (wrapperRect.top <= scrollPosition + 100 && wrapperRect.bottom >= scrollPosition - 200) {
                            currentSection = heading;
                            break;
                        }
                    }
                }
                continue; // Skip other prototype headings
            }

            // For regular headings, use normal logic
            const rect = heading.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;

            if (scrollPosition >= sectionTop - 50) { // Add small buffer
                currentSection = heading;
                break;
            }
        }

        // Update active states for links
        tocLinks.forEach(link => {
            link.classList.remove('active');

            if (currentSection && link.getAttribute('href') === `#${currentSection.id}`) {
                link.classList.add('active');
            }
        });

        // Update active states for dots
        if (window.headingToDotMap) {
            window.headingToDotMap.forEach((dot, heading) => {
                dot.classList.remove('active');

                if (currentSection && heading === currentSection) {
                    dot.classList.add('active');
                }
            });
        }
    }

    // Initial update
    updateActiveLink();

    // Update on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Also update when the prototype slider scrolls horizontally
    const slider = document.getElementById('prototypeSlider');
    if (slider) {
        let sliderTicking = false;
        slider.addEventListener('scroll', function() {
            if (!sliderTicking) {
                window.requestAnimationFrame(function() {
                    updateActiveLink();
                    sliderTicking = false;
                });
                sliderTicking = true;
            }
        });
    }
}

    // Initialize prototype slider navigation
    function initPrototypeSlider() {
        const slider = document.getElementById('prototypeSlider');
        const prevBtn = document.getElementById('prototypePrevBtn') || document.querySelector('.prototype-nav-prev');
        const nextBtn = document.getElementById('prototypeNextBtn') || document.querySelector('.prototype-nav-next');

        if (!slider || !prevBtn || !nextBtn) return;

        // Center chevrons with slide content
        function centerChevrons() {
            const firstSlide = slider.querySelector('.prototype-slide');
            if (firstSlide) {
                const slideRect = firstSlide.getBoundingClientRect();
                const wrapperRect = slider.parentElement.getBoundingClientRect();
                const slideCenter = slideRect.top + slideRect.height / 2;
                const wrapperTop = wrapperRect.top;
                const offset = slideCenter - wrapperTop;

                prevBtn.style.top = offset + 'px';
                nextBtn.style.top = offset + 'px';
                prevBtn.style.transform = 'translateY(-50%)';
                nextBtn.style.transform = 'translateY(-50%)';
            }
        }

        // Center on load and resize
        centerChevrons();
        window.addEventListener('resize', centerChevrons);

        function updateButtons() {
        const scrollLeft = slider.scrollLeft;
        const scrollWidth = slider.scrollWidth;
        const clientWidth = slider.clientWidth;

        // Disable prev button if at the start
        prevBtn.disabled = scrollLeft === 0;

        // Disable next button if at the end
        nextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
    }

    // Initial button state
    updateButtons();

    // Previous button
    prevBtn.addEventListener('click', function() {
        const sliderRect = slider.getBoundingClientRect();
        const scrollAmount = sliderRect.width;
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Next button
    nextBtn.addEventListener('click', function() {
        const sliderRect = slider.getBoundingClientRect();
        const scrollAmount = sliderRect.width;
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Update button states on scroll
    slider.addEventListener('scroll', updateButtons);

    // Update button states on resize
    window.addEventListener('resize', updateButtons);
}

// Initialize scroll reveal animation
function initScrollReveal() {
    const projectDetails = document.querySelectorAll('.project-details');

    if (projectDetails.length === 0) return;

    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    projectDetails.forEach(detail => {
        revealObserver.observe(detail);
    });
}

// Initialize wireframes drag scroll
function initWireframesDragScroll() {
    const slider = document.querySelector('.wireframes-slider');

    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// Initialize image modal for click-to-enlarge
function initImageModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <span class="image-modal-close">&times;</span>
        <img src="" alt="Enlarged image">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.image-modal-close');

    // Get clickable images (exclude wireframes and prototype slider images)
    const clickableImages = document.querySelectorAll('.project-text img, .persona-grid img');

    clickableImages.forEach(img => {
        img.addEventListener('click', (e) => {
            modal.classList.add('active');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Initialize flip card for HMW question
function initFlipCard() {
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        // Handle click
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });

        // Handle keyboard (Enter or Space)
        flipCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                flipCard.classList.toggle('flipped');
            }
        });
    }
}

// Initialize Visual Language Alignment
function initVisualLanguageAlignment() {
    const img = document.querySelector('.mood-board-img');
    const strip = document.querySelector('.color-strip');
    const contrastBoxes = document.querySelectorAll('.contrast-box');

    if (!img || !strip) return;

    function align() {
        const height = img.offsetHeight;

        if (height > 0) {
            // Set strip height to match mood board image
            strip.style.height = height + 'px';

            // Set strip width based on 9 square blocks (1/9 of height)
            // This ensures width = block height
            const blockHeight = height / 9;
            strip.style.width = blockHeight + 'px';

            // Set contrast boxes to same height as color blocks
            contrastBoxes.forEach(box => {
                box.style.height = blockHeight + 'px';
            });
        }
    }

    if (img.complete) {
        align();
    } else {
        img.onload = align;
    }

    // Align on resize
    window.addEventListener('resize', align);

    // Align periodically to catch any layout shifts
    setTimeout(align, 100);
    setTimeout(align, 500);
    setTimeout(align, 1000);
}
// --- Artifact Slideshow & Modal Logic ---

let slideIndex = 1;
// We need to wait for DOM to be ready, but these functions are called via onclick
// so they need to be global or accessible.
// We'll initialize the slideshow when the DOM is ready.

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.slideshow-container')) {
        showArtifactSlides(slideIndex);
    }
});

// Next/previous controls
window.plusArtifactSlides = function(n) {
  showArtifactSlides(slideIndex += n);
}

// Thumbnail image controls
window.currentArtifactSlide = function(n) {
  showArtifactSlides(slideIndex = n);
}

function showArtifactSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // Dots functionality removed as requested
  // let dots = document.getElementsByClassName("dot");
  let modalSlides = document.getElementsByClassName("mySlidesModal");

  if (!slides.length) return; // Guard clause

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all main slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Hide all modal slides (syncing them)
  if (modalSlides.length) {
      for (i = 0; i < modalSlides.length; i++) {
        modalSlides[i].style.display = "none";
      }
  }

  // Remove active class from dots - removed
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }

  // Show current slide
  slides[slideIndex-1].style.display = "block";

  // Show current modal slide if modal exists
  if (modalSlides.length > 0) {
      modalSlides[slideIndex-1].style.display = "block";
  }

  // if (dots.length > 0) {
  //   dots[slideIndex-1].className += " active";
  // }
}

// Modal controls
window.openArtifactModal = function() {
  document.getElementById("artifactModal").style.display = "block";
  // Sync modal slide with current slide
  showArtifactSlides(slideIndex);
}

window.closeArtifactModal = function() {
  document.getElementById("artifactModal").style.display = "none";
}
