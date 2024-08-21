let isScrolling;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', function() {
            // Check scroll position and add/remove the scrolled class
            if (window.scrollY > 50) { // Adjust the scroll threshold as needed
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Clear any existing timeout
            window.clearTimeout(isScrolling);

            // Remove the hidden class if scrolling
            navbar.classList.remove('hidden');

            // Set a timeout to add the hidden class after scrolling stops
            isScrolling = setTimeout(function() {
                navbar.classList.add('hidden');
            }, 1000); // Adjust timeout to control how long the navbar stays visible after scrolling stops
        });