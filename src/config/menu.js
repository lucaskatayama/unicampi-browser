import Institutos from 'containers/institutos/Institutos.react';
import Instituto from 'containers/institutos/Instituto.react';

const menu = [
  { header: true, text: 'MAIN NAVIGATION' },
  { text: 'Home', link: '/', icon: 'home' },
  { text: 'Institutos', link: '/institutos', icon: 'home', component: Institutos },
  { text: 'Institutos', link: '/institutos/:sigla', icon: 'home', component: Instituto, hidden: true },
  { text: 'Disciplinas', link: '/disciplinas', icon: 'home' },
  { text: 'Oferecimentos', link: '/oferecimentos', icon: 'home' },
  { text: 'Matriculados', link: '/matriculados', icon: 'home' }
];



export default menu;
