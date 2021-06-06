const bodyRef = document.querySelector('body');
const themeSwitchRef = document.getElementById('theme-switch-toggle');

const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const DEFAULT_THEME = bodyRef.classList.add(THEME.LIGHT);

themeSwitchRef.addEventListener('change', onSwitchSiteTheme);

function addCurrentSiteTheme() {
  if (localStorage.getItem('siteTheme')) {
    themeSwitchRef.checked = true;
    bodyRef.classList.replace(THEME.LIGHT, THEME.DARK);
  }
  DEFAULT_THEME;
}

addCurrentSiteTheme();

function onSwitchSiteTheme() {
  if (themeSwitchRef.checked) {
    bodyRef.classList.replace(THEME.LIGHT, THEME.DARK);
    localStorage.setItem('siteTheme', THEME.DARK);
  } else {
    bodyRef.classList.replace(THEME.DARK, THEME.LIGHT);
    localStorage.removeItem('siteTheme');
  }
}
