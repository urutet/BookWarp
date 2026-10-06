(() => {
  const header = document.querySelector('.site-header');
  const wrap = header.querySelector('.nav-wrap');
  const brand = wrap.querySelector('.brand');
  const nav = wrap.querySelector('.site-nav');
  const links = nav.querySelector('.nav-links');
  const toggle = nav.querySelector('.nav-toggle');

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function updateLayout() {
    // Measure the full navigation at its natural width before deciding whether it fits.
    header.classList.remove('is-collapsed');
    const gap = parseFloat(getComputedStyle(wrap).gap) || 0;
    const linkGap = parseFloat(getComputedStyle(links).columnGap) || 0;
    const linkWidths = [...links.children].reduce((width, link) => width + link.getBoundingClientRect().width, 0);
    const needed = brand.getBoundingClientRect().width + linkWidths + linkGap * (links.children.length - 1) + gap;
    const collapsed = needed > wrap.clientWidth;
    header.classList.toggle('is-collapsed', collapsed);
    if (!collapsed) closeMenu();
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  new ResizeObserver(updateLayout).observe(wrap);
  document.fonts?.ready.then(updateLayout);
  updateLayout();
})();
