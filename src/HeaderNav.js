import { LitElement, html } from 'lit';
import { MixinGetLightDom } from '@manufosela/mixin-getlightdom';
import { headerNavStyles } from './header-nav-style.js';

/**
 * `header-nav`
 * HeaderNav
 *
 * @customElement header-nav
 * @litElement
 */
export class HeaderNav extends MixinGetLightDom(LitElement) {
  static get is() {
    return 'header-nav';
  }

  static get properties() {
    return {
      logo: {
        type: String,
      },
      menuItems: {
        type: Array,
      },
    };
  }

  static get styles() {
    return [headerNavStyles];
  }

  constructor() {
    super();
    this.logo = null;
    this.menuItems = [];
    this.selected = '';
  }

  lightDomElements() {
    const HTMLMainMenu = [];
    const ligthDomElements = [...this.querySelectorAll('*')];
    ligthDomElements.forEach((ligthDomElement) => {
      HTMLMainMenu.push(ligthDomElement);
    });
    return html`${HTMLMainMenu.map((el) => el)}`;
  }

  renderLogo() {
    if (this.logo) {
      return html`
        <div id="home" class="navbar-logo">
          <a class="navbar-logo__link location__link" rel="noopener noreferrer"
            href="/">
            <img class="main-logo" src="${this.logo}" alt="logo" />
          </a>
        </div>`;
    } 
    return html``;
  }

  render() {
    return html`
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">${this.renderLogo()}</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          ${this.lightDomElements()}
        </div>
      </div>
    `;
  }
}
