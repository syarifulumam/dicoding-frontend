import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburgerButton'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
