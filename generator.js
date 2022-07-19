import { getCookie, getUuid } from "./utils.js";

export class Generator {
  constructor() {
    if (Generator.instance instanceof Generator) {
      return Generator.instance;
    }
    Generator.instance = this;
  }

  createCookie() {
    if (!getCookie("uuid")) {
      const CookieDate = new Date();
      CookieDate.setFullYear(CookieDate.getFullYear() + 1);
      document.cookie = `uuid=${getUuid()}; expires=${CookieDate.toGMTString()}; path=/`;
    }
  }
}
