document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const navigationLinks = document.getElementById('navigationLinks');
  const closeMenu = document.getElementById('closeMenu');

  // Get all links inside navigation overlay
  const allNavLinks = navigationLinks ? navigationLinks.querySelectorAll('a') : [];

  // Function to close the overlay
  function closeOverlay() {
    if (navigationLinks) {
      navigationLinks.classList.add('hidden');
    }
    document.body.classList.remove('overflow-hidden');
  }

  // Open menu overlay
  if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
      console.log('Menu button clicked!'); // <-- Debug log
      navigationLinks.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  // Close overlay when clicking close button
  if (closeMenu) {
    closeMenu.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigation
      closeOverlay();
    });
  }

  // Close overlay when clicking any link inside the overlay
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
    });
  });
});
