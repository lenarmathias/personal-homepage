const localStorageKey = "theme";

export const saveThemeSetupInLocalStorage = theme =>
    localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeSetupFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || false;