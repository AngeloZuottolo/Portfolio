(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const cookieKey = 'portfolio-theme';

  const readThemeCookie = () => {
    const pattern = new RegExp('(?:^|; )' + cookieKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)');
    const match = document.cookie.match(pattern);
    if (!match) {
      return 'light';
    }
    const value = decodeURIComponent(match[1]);
    return value === 'dark' || value === 'light' ? value : 'light';
  };

  const writeThemeCookie = (theme) => {
    document.cookie = cookieKey + '=' + encodeURIComponent(theme) + '; Path=/';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      const isDark = theme === 'dark';
      toggle.textContent = isDark ? '☀️ Tema chiaro' : '🌙 Tema scuro';
      toggle.setAttribute('aria-label', isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro');
    }
  };

  const initialTheme = readThemeCookie();
  applyTheme(initialTheme);

  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    writeThemeCookie(nextTheme);
  });
})();
