document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const navigationLinks = document.getElementById('navigationLinks');
  const closeMenu = document.getElementById('closeMenu');

  console.log('menuButton:', menuButton);
  console.log('navigationLinks:', navigationLinks);
  console.log('closeMenu:', closeMenu);

  const allNavLinks = navigationLinks ? navigationLinks.querySelectorAll('a') : [];

  function closeOverlay() {
    if (navigationLinks) navigationLinks.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      console.log('menu clicked'); // check if click fires
      navigationLinks?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      closeOverlay();
    });
  }

  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeOverlay();
    });
  });
});
