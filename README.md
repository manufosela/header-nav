# \<header-nav>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i header-nav
```

## Usage

### Linear elements

```html
<script type="module">
  import 'header-nav/header-nav.js';
</script>

<header-nav>
  <ul>
    <li id="sobreNosotros" data-link="about-us.html" title="Sobre Nosotros">
      <a href="es/about-us.html" target="">Sobre Nosotros</a>
    </li>
    <li
      id="nuestrosProductos"
      data-link="ourproducts.html"
      title="Nuestros Productos"
    >
      <a href="/ourproducts.html" target="">Nuestros Productos</a>
    </li>
    <li id="contact" data-link="contact.html" title="Contact">
      <a href="es/contact.html" target="">Contact</a>
    </li>
    <li id="home" data-link="/" title="Home">
      <a href="/" target="">Home</a>
    </li>
  </ul>
</header-nav>
```

### Nested elements

```html
<ul>
  <li id="nuestrosServicios" title="NUESTROS SERVICIOS">
    <ul>
      <li id="agile" data-link="agile.html" title="AGILE TRANSFORMATION">
        <a href="es/agile.html" target="">AGILE TRANSFORMATION</a>
      </li>
      <li
        id="acompanamientoAgile"
        data-link="https://formacionagile.kairosds.com/"
        title="FORMACIÓN AGILE &amp; UPSKILLING"
      >
        <a href="es/https://formacionagile.kairosds.com/" target="_blank"
          >FORMACIÓN AGILE &amp; UPSKILLING</a
        >
      </li>
      <li
        id="software-developer"
        data-link="development.html"
        title="SOFTWARE DEVELOPMENT"
      >
        <a href="es/development.html" target="">SOFTWARE DEVELOPMENT</a>
      </li>
      <li id="design" data-link="ux.html" title="LEAN PRODUCT DESIGN">
        <a href="es/ux.html" target="">LEAN PRODUCT DESIGN</a>
      </li>
      <li id="devops" data-link="#devops" title="DEVOPS &amp; ARQUITECTURE">
        <a href="es/#devops" target="">DEVOPS &amp; ARQUITECTURE</a>
      </li>
      <li id="data" data-link="#data" title="DATA &amp; NEW TECHNOLOGIES">
        <a href="es/#data" target="">DATA &amp; NEW TECHNOLOGIES</a>
      </li>
      <li id="innovacion" data-link="innovation.html" title="INNOVACIÓN">
        <a href="es/innovation.html" target="">INNOVACIÓN</a>
      </li>
      <li
        id="nextgen"
        data-link="https://digitalxperience.kairosds.com/fondoseu/"
        title="FONDOS NEXTGEN EU"
      >
        <a
          href="es/https://digitalxperience.kairosds.com/fondoseu/"
          target="_blank"
          >FONDOS NEXTGEN EU</a
        >
      </li>
    </ul>
  </li>
  <li id="sobreNosotros" title="SOBRE NOSOTROS">
    <ul>
      <li
        id="conoceKairosDS"
        data-link="about-us.html"
        title="CONOCE KAIRÓS DS"
      >
        <a href="es/about-us.html" target="">CONOCE KAIRÓS DS</a>
      </li>
      <li
        id="formacionInterna"
        data-link="internal-training.html"
        title="FORMACIÓN INTERNA"
      >
        <a href="es/internal-training.html" target="">FORMACIÓN INTERNA</a>
      </li>
      <li id="ventures" data-link="ventures.html" title="VENTURES">
        <a href="es/ventures.html" target="">VENTURES</a>
      </li>
      <li
        id="kairosDigitalXperience"
        data-link="https://digitalxperience.kairosds.com/"
        title="KAIRÓS DIGITAL XPERIENCE"
      >
        <a href="es/https://digitalxperience.kairosds.com/" target="_blank"
          >KAIRÓS DIGITAL XPERIENCE</a
        >
      </li>
    </ul>
  </li>
  <li id="unete" data-link="join-us.html" title="ÚNETE">
    <a href="es/join-us.html" target="">ÚNETE</a>
  </li>
  <li id="eventos" data-link="events.html" title="EVENTOS">
    <a href="es/events.html" target="">EVENTOS</a>
  </li>
  <li id="contacto" data-link="contact.html" title="CONTACTO">
    <a href="es/contact.html" target="">CONTACTO</a>
  </li>
  <li id="blog" data-link="https://blog.kairosds.com/" title="BLOG">
    <a href="es/https://blog.kairosds.com/" target="_blank">BLOG</a>
  </li>
</ul>
```

## Linting and formatting To scan the project for linting and formatting

errors, run ```bash npm run lint

</ul>
````

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
