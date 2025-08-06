document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const navigationLinks = document.getElementById('navigationLinks');
    const closeMenu = document.getElementById('closeMenu');

    // Get all links inside navigationLinks
    const allNavLinks = navigationLinks.querySelectorAll('a');

    function closeOverlay() {
      navigationLinks.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // Menu open
    if (menuButton) {
      menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        navigationLinks.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      });
    }

    // Close on close button
    closeMenu.addEventListener('click', (e) => {
      e.preventDefault();
      closeOverlay();
    });

    // Close on any link click
    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        closeOverlay();
      });
    });
  });