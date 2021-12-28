import { LitElement, html } from 'lit';
// import { classMap } from 'lit/directives/class-map.js';
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
      mainMenu: {
        type: Array,
      },
      dropdownServices: {
        type: Array,
      },
      dropdownAboutUs: {
        type: Array,
      },
      capacities: {
        type: Array,
      },
      countries: {
        type: Array,
      },
      selected: {
        type: String,
      },
      route: {
        type: String,
      },
      languageSelected: {
        type: Boolean,
        attribute: false,
      },
      language: {
        type: String,
      },
      lang: {
        type: String,
      },
    };
  }

  static get styles() {
    return [headerNavStyles];
  }

  constructor() {
    super();
    this.selected = '';
    this.menuItems = [];
    this.languages = [];
    this.route = window.location.pathname;
    this.language = '';
    this.indexCounter = 0;

    this._allMenusInactive = this._allMenusInactive.bind(this);
  }

  _allMenusInactive(e) {
    const menus = this.shadowRoot.querySelectorAll('[id^="dropdown_container_"]');
    menus.forEach((menu) => {
      const menuID = menu.getAttribute('id');
      const menuIndex = menu.getAttribute('index');
      const eventID = `dropdown_container_${e.currentTarget.id.toLowerCase()}`;
      const iconMenuRight = this.shadowRoot.querySelector(`#arrow-right-navigation_${menuIndex}`);
      const iconMenuLeft = this.shadowRoot.querySelector(`#arrow-left-navigation_${menuIndex}`);
      if (!menu.classList.contains('inactive') && menuID !== eventID) {
        menu.classList.add('inactive');
        if (window.innerWidth < 1029) {
          iconMenuRight.classList.remove('inactive');
          iconMenuLeft.classList.add('inactive');
        }
      }
      window.addEventListener('scroll', () => {
        menu.classList.add('inactive');
      });
    });
  }

  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();
    const childNodes = this._HTMLChildren();
    [this.mainMenu] = childNodes;
    console.log(this.mainMenu);
    document.body.addEventListener('click', this._allMenusInactive);
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) super.disconnectedCallback();
    document.body.removeEventListener('click', this._allMenusInactive);
  }

  // handleClick(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this._allMenusInactive(e);
  //   const id = e.currentTarget.id.toLowerCase();
  //   const target = this.shadowRoot.querySelector(`#dropdown_container_${id}`);
  //   target.classList.toggle('inactive');
  //   if (window.innerWidth < 1024) {
  //     this.handleClickBack(e);
  //   }
  // }

  // handleClickEnter(e) {
  //   this._allMenusInactive(e);
  //   const id = e.currentTarget.id.toLowerCase();
  //   const indexIdString = e.currentTarget.id.indexOf('-');
  //   const idFormated = id.slice(indexIdString + 1);
  //   const target = this.shadowRoot.querySelector(`#dropdown_container_${idFormated}`);
  //   if (target !== null) {
  //     target.classList.remove('inactive');
  //   }
  // }

  // handleClickBack(e) {
  //   const menus = this.shadowRoot.querySelectorAll('[id^="dropdown_container_"]');
  //   menus.forEach((menu, index) => {
  //     const arrowMenuRight = this.shadowRoot.querySelector(`#arrow-right-navigation_${index}`);
  //     const arrowMenuLeft = this.shadowRoot.querySelector(`#arrow-left-navigation_${index}`);
  //     const indexMenu = menu.getAttribute('index');
  //     const indexValue = e.currentTarget.attributes.index.value;
  //     if (!menu.classList.contains('inactive') && indexMenu === indexValue) {
  //       arrowMenuRight.classList.add('inactive');
  //       arrowMenuLeft.classList.remove('inactive');
  //     } else {
  //       arrowMenuRight.classList.remove('inactive');
  //       arrowMenuLeft.classList.add('inactive');
  //     }
  //   });
  // }

  // fakeAction() {
  //   // fake action empty
  //   this._null = null;
  // }

  // renderDropdown(id, dropdownMenu) {
  //   const HTMLDropdown = [];
  //   const dropdownMenuKeys = Object.keys(dropdownMenu);
  //   dropdownMenuKeys.forEach((drodownMenuItem) => {
  //     const item = dropdownMenu[drodownMenuItem];
  //     const selfLink = item['data-link'].substr(0, 1);
  //     const linkItem = `/${this.language}/${item['data-link']}`;
  //     const menuItemLink = 
  //       // eslint-disable-next-line no-nested-ternary
  //       item['data-link'] === 'https://formacionagile.kairosds.com/' ? 'https://formacionagile.kairosds.com/' : 
  //       // eslint-disable-next-line no-nested-ternary
  //       item['data-link'] === 'https://digitalxperience.kairosds.com/fondoseu/' ? 'https://digitalxperience.kairosds.com/fondoseu/' : 
  //       item['data-link'] === 'https://digitalxperience.kairosds.com/' ? 'https://digitalxperience.kairosds.com/' : 
  //       /* IF NOT */ linkItem;
  //     HTMLDropdown.push(
  //       html`
  //         ${selfLink !== '#' ? 
  //         html`
  //           <li class="dropdown-nav-li" role="none">
  //             <a class="drop__menu-link ${classMap({ selected: this.route === menuItemLink })}"
  //               href="${menuItemLink}" rel="noopener noreferrer" target="${item[0].target || '_self'}">
  //               ${item.title}
  //             </a>
  //           </li> ` :
  //         html`
  //           <li class="dropdown-nav-li link-itself" id="${item.id}" role="none">
  //             <a class="drop__menu-link" href="${item['data-link']}">${item.title}</a>
  //           </li>
  //         `}
  //       `);
  //   });
  //   return html`
  //     <div id="dropdown_container_${id.toLowerCase()}" class="dropdown-services-container inactive" index="${this.indexCounter}">
  //       <ul class="dropdown-nav dropdown-services" role="menubar">
  //         ${HTMLDropdown.map((el) => el)}
  //       </ul>
  //     </div>`;
  // }

  // renderMenuItemComplex(menuItem) {
  //   const HTMLMenuItemComplex = [];
  //   HTMLMenuItemComplex.push(html`
  //     <img  
  //       id="arrow-left-navigation_${this.indexCounter}"
  //       class="arrow-left-navigation inactive ${menuItem.title.replace(/\s/g, '')}" 
  //       src="/assets/images/arrow-left-icon.svg"
  //       alt="flecha de acceso a submenu" 
  //       @click="${this.handleClickBack}" 
  //       @keyup="${this.handleClickBack}" 
  //       index="${this.indexCounter}" />
  //     <span 
  //       id="${menuItem.id}"
  //       role="menuitem" 
  //       index="${this.indexCounter}"
  //       tabindex="0"
  //       @click="${this.handleClick}" 
  //       @keyup="${this.handleClick}" 
  //       class="${classMap({ location__link: true })}">
  //         ${menuItem.title}
  //         <img 
  //           class="${window.innerWidth < 1024 ? 'inactive' : 'arrow-down-dropdown'}" 
  //           src="/assets/images/arrow-down-kw.svg"
  //           alt="=&gt;"/>
  //     </span>
  //     ${window.innerWidth < 1024 ? html`
  //     <img id="arrow-right-navigation_${this.indexCounter}"
  //       class="arrow-right-navigation ${menuItem.title.replace(/\s/g, '')}" 
  //       src="/assets/images/arrow-right-icon.svg" 
  //       alt="=&gt;"
  //       index="${this.indexCounter}" />`
  //   : html``}
  //     ${this.renderDropdown(menuItem.id, menuItem[0])}`);
  //   this.indexCounter += 1;
  //   return html`${HTMLMenuItemComplex.map((el) => el)}`;
  // }

  // renderMenuItem(menuItem) {
  //   const menuItemLink = menuItem['data-link'];
  //   const htmlMenu = html`
  //     ${menuItem['data-link'] ? html`
  //       <li @keydown="${this.handleClickEnter}" id="li-${menuItem.id}" class="navbar-list__item" role="none" >
  //         <a class=${classMap({ location__link: true, selected: this.route === menuItemLink })}
  //           href=${menuItemLink}
  //           rel="noopener noreferrer" target="${menuItem.target || '_self'}"
  //           role="menuitem">
  //           ${menuItem.title}
  //         </a>
  //       </li>
  //     `
  //   : html` 
  //     <li @keydown="${this.handleClickEnter}" id="li-${menuItem.id}" class="navbar-list__item" role="none">${this.renderMenuItemComplex(menuItem)}</li>`}
  //   `;
  //   return htmlMenu;
  // }

  // renderMainMenu() {
  //   const HTMLMainMenu = [];
  //   const menuItemKeys = Object.keys(this.mainMenu);
  //   menuItemKeys.forEach((menuItem) => {
  //     HTMLMainMenu.push(this.renderMenuItem(this.mainMenu[menuItem]));
  //   });
  //   return html`${HTMLMainMenu.map((el) => el)}`;
  // }

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
