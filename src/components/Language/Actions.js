import Cookies from "js-cookie";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const LOAD_LANGUAGE = "LOAD_LANGUAGE";

const cookieName = "chrome-lang";

export function changeLanguage(lang) {
  Cookies.set(cookieName, lang);

  return {
    type: CHANGE_LANGUAGE,
    lang
  };
}

export function loadLanguage() {
  const lang = Cookies.get(cookieName);

  return {
    type: LOAD_LANGUAGE,
    lang
  };
}
