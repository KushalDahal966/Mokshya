document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuButton = document.getElementById('menuButton');       // Menu open button
  const navigationLinks = document.getElementById('navigationLinks'); // Overlay container
  const closeMenu = document.getElementById('closeMenu');         // Close button inside overlay

  // Get all links inside overlay
  const allNavLinks = navigationLinks ? navigationLinks.querySelectorAll('a') : [];

  // Function to close overlay
  function closeOverlay() {
    if (navigationLinks) {
      navigationLinks.classList.add('hidden'); // hide overlay
    }
    document.body.classList.remove('overflow-hidden'); // re-enable scrolling
  }

  // -------------------
  // Open Menu Button
  // -------------------
  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      // Only prevent default if it's an <a> tag
      if (menuButton.tagName.toLowerCase() === 'a') e.preventDefault();
      navigationLinks?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  // -------------------
  // Close Button inside overlay
  // -------------------
  if (closeMenu) {
    closeMenu.addEventListener('click', (e) => {
      if (closeMenu.tagName.toLowerCase() === 'a') e.preventDefault();
      closeOverlay();
    });
  }

  // -------------------
  // Close overlay when any link inside is clicked
  // -------------------
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
      // Navigation still works because we do NOT prevent default
    });
  });
});
