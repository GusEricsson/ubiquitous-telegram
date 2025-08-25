// main.js - Starter JavaScript file for Clinicmaster Website

console.log('main.js loaded');

// Add your custom JS below


        // Toggle mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
        function handleImgError(img, fallbackUrl) {
            if (!img.dataset.errorHandled) {
                img.src = fallbackUrl;
                img.dataset.errorHandled = "true";
            }
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            const menu = document.getElementById('mobile-menu');
            const button = event.target.closest('[onclick="toggleMobileMenu()"]');
            if (!button && !menu.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });

        // Toggle features dropdown for desktop
        function toggleFeaturesDropdown() {
            const dropdown = document.getElementById('features-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Toggle features dropdown for mobile
        function toggleMobileFeaturesDropdown() {
            const dropdown = document.getElementById('mobile-features-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Close dropdown when clicking outside (desktop)
        document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('features-dropdown');
            const button = event.target.closest('[onclick="toggleFeaturesDropdown()"]');

            if (!button && !dropdown.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Close mobile features dropdown when clicking outside (mobile)
        document.addEventListener('click', function (event) {
            const mobileDropdown = document.getElementById('mobile-features-dropdown');
            const mobileButton = event.target.closest('[onclick="toggleMobileFeaturesDropdown()"]');
            if (!mobileButton && mobileDropdown && !mobileDropdown.contains(event.target)) {
                mobileDropdown.classList.add('hidden');
            }
        });
        // Toggle resource hub dropdown for desktop
        function toggleResourceHubDropdown() {
            const dropdown = document.getElementById('resourcehub-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Toggle resource hub dropdown for mobile
        function toggleMobileResourceHubDropdown() {
            const dropdown = document.getElementById('mobile-resourcehub-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Close resource hub dropdown when clicking outside (desktop)
        document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('resourcehub-dropdown');
            const button = event.target.closest('[onclick="toggleResourceHubDropdown()"]');

            if (!button && !dropdown.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });

        // Close mobile resource hub dropdown when clicking outside (mobile)
        document.addEventListener('click', function (event) {
            const mobileDropdown = document.getElementById('mobile-resourcehub-dropdown');
            const mobileButton = event.target.closest('[onclick="toggleMobileResourceHubDropdown()"]');
            if (!mobileButton && mobileDropdown && !mobileDropdown.contains(event.target)) {
                mobileDropdown.classList.add('hidden');
            }
        });

        // Toggle Who We Care For dropdown for desktop
        function toggleWhoWeCareForDropdown() {
            const dropdown = document.getElementById('whowecarefor-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Toggle Who We Care For dropdown for mobile
        function toggleMobileWhoWeCareForDropdown() {
            const dropdown = document.getElementById('mobile-whowecarefor-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Close Who We Care For dropdown when clicking outside (desktop)
        document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('whowecarefor-dropdown');
            const button = event.target.closest('[onclick="toggleWhoWeCareForDropdown()"]');

            if (!button && !dropdown.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });
        // Close mobile Who We Care For dropdown when clicking outside (mobile)
        document.addEventListener('click', function (event) {
            const mobileDropdown = document.getElementById('mobile-whowecarefor-dropdown');
            const mobileButton = event.target.closest('[onclick="toggleMobileWhoWeCareForDropdown()"]');

            if (!mobileButton && mobileDropdown && !mobileDropdown.contains(event.target)) {
                mobileDropdown.classList.add('hidden');
            }
        });

        // Toggle AI Suite dropdown for desktop
        function toggleAiSuiteDropdown() {
            const dropdown = document.getElementById('aisuite-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Toggle AI Suite dropdown for mobile
        function toggleMobileAiSuiteDropdown() {
            const dropdown = document.getElementById('mobile-aisuite-dropdown');
            dropdown.classList.toggle('hidden');
        }

        // Close AI Suite dropdown when clicking outside (desktop)
        document.addEventListener('click', function (event) {
            const dropdown = document.getElementById('aisuite-dropdown');
            const button = event.target.closest('[onclick="toggleAiSuiteDropdown()"]');

            if (!button && !dropdown.contains(event.target)) {
                dropdown.classList.add('hidden');
            }
        });
        // Close mobile Ai Suite dropdown when clicking outside (mobile)
        document.addEventListener('click', function (event) {
            const mobileDropdown = document.getElementById('mobile-aisuite-dropdown');
            const mobileButton = event.target.closest('[onclick="toggleMobileAiSuiteDropdown()"]');

            if (!mobileButton && mobileDropdown && !mobileDropdown.contains(event.target)) {
                mobileDropdown.classList.add('hidden');
            }
        });

        // Simple Testimonial Carousel
        const slides = [
            document.getElementById('testimonial-slide-0'),
            document.getElementById('testimonial-slide-1'),
            document.getElementById('testimonial-slide-2'),
            document.getElementById('testimonial-slide-3'),
            document.getElementById('testimonial-slide-4')
        ];
        let current = 0;
        function showSlide(idx) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('hidden', i !== idx);
            });
        }
        document.getElementById('testimonial-prev').onclick = function () {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        };
        document.getElementById('testimonial-next').onclick = function () {
            current = (current + 1) % slides.length;
            showSlide(current);
        };
        // Optional: Auto-advance every 8 seconds
        setInterval(() => {
            current = (current + 1) % slides.length;
            showSlide(current);
        }, 8000);
        showSlide(current);