document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const navigationLinks = document.getElementById('navigationLinks');
  const closeMenu = document.getElementById('closeMenu');

  // Get all links inside navigationLinks
  const allNavLinks = navigationLinks ? navigationLinks.querySelectorAll('a') : [];

  function closeOverlay() {
    if (navigationLinks) {
      navigationLinks.classList.add('hidden');
    }
    document.body.classList.remove('overflow-hidden');
  }

  // Menu open
  if (menuButton) {
    menuButton.addEventListener('click', (e) => {
      // only prevent default if it's actually a <a>
      if (menuButton.tagName.toLowerCase() === 'a') e.preventDefault();
      navigationLinks?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  // Close on close button
  if (closeMenu) {
    closeMenu.addEventListener('click', (e) => {
      if (closeMenu.tagName.toLowerCase() === 'a') e.preventDefault();
      closeOverlay();
    });
  }

  // Close on any link click (but still allow navigation)
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
    });
  });
});
