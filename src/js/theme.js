const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    body: document.querySelector('body'),
    switchInput: document.querySelector('.theme-switch__toggle'),
  };

  let getItemKey = localStorage.getItem('keyTheme');

  if (!getItemKey) {
    refs.body.classList.add(Theme.LIGHT);
    refs.switchInput.checked = false;
  } else {
    refs.body.classList.add(getItemKey);
    refs.switchInput.checked = Theme.LIGHT !== getItemKey;
  }
  refs.switchInput.addEventListener('change', () => {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem('keyTheme', Theme.DARK);
    } else if (refs.body.classList.contains(Theme.DARK)) {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('keyTheme', Theme.LIGHT);
    }
  });
});
