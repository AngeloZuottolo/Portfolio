(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const storageKey = 'portfolio-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      const isDark = theme === 'dark';
      toggle.textContent = isDark ? '☀️ Tema chiaro' : '🌙 Tema scuro';
      toggle.setAttribute('aria-label', isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro');
    }
  };

  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
  applyTheme(initialTheme);

  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
})();
