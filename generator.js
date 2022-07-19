import { getUuid } from "./uuid.js";

export class Generator {
  constructor() {
    if (Generator.instance instanceof Generator) {
      return Generator.instance;
    }
    Generator.instance = this;
  }

  getDomain() {
    const url = window.location.href;
    const domain = new URL(url).hostname;
    return domain;
  }

  createCookie() {
    const CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 1);
    document.cookie = `uuid=${getUuid()}; expires=${CookieDate.toGMTString()}; path=/`;
  }
}
