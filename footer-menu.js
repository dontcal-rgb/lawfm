const footerMenuViewport = window.matchMedia('(max-width: 560px)');

document.querySelectorAll('.footer-menu').forEach(menu => {
  const groups = [...menu.querySelectorAll('.footer-menu-group')];

  if (footerMenuViewport.matches) {
    groups.forEach(group => { group.open = false; });
  }

  groups.forEach(group => {
    group.addEventListener('toggle', () => {
      if (!footerMenuViewport.matches || !group.open) return;
      groups.forEach(other => {
        if (other !== group) other.open = false;
      });
    });
  });

  footerMenuViewport.addEventListener('change', event => {
    if (event.matches) groups.forEach(group => { group.open = false; });
  });
});