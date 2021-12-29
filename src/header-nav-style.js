import { css } from 'lit';

export const headerNavStyles = css`
  :host {
    display: block;
    margin:0;
    padding:0;
    font-family: var(--font-family, 'segoe ui');
    font-size: var(--font-size, 20px);
    width: 100vw;
    height: var(--header-nav-height, 50px);
  }

  * {
    box-sizing: border-box;
  }

  .main-logo {
    max-height: var(--header-nav-height, 50px);
    padding-left: 15px;
  }

  .nav {
    height: var(--header-nav-height, 50px);
    width: 100%;
    background-color: var(--header-nav-background-color, #ff7900);
    color: var(--header-nav-color, #fff);
    position: relative;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 0;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    float: right;
    font-size: 18px;
  }

  .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }

  .nav > .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > #nav-check {
    display: none;
  }

  .navbar-logo__link {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    height: 50px;
  }
`;

export const headerNavStylesMobile = `
  .nav > .nav-btn {
    display: inline-block!important;
    position: absolute;
    right: 1rem;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: var(--header-nav-height, 50px);
    height: var(--header-nav-height, 50px);
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: var(--header-nav-height, 50px);
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
`; 
