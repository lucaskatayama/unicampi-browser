import Institutos from 'containers/institutos/Institutos.react';
import Instituto from 'containers/institutos/Instituto.react';
import Disciplina from 'containers/disciplinas/Disciplina.react';

const menu = [
  { header: true, text: 'MAIN NAVIGATION' },
  { text: 'Home', link: '/', icon: 'home' },
  { text: 'Institutos', link: '/institutos', icon: 'home', component: Institutos },
  { text: 'Institutos', link: '/institutos/:sigla', icon: 'home', component: Instituto, hidden: true },
  { text: 'Disciplina', link: '/disciplina/:sigla', icon: 'home', component: Disciplina, hidden: true },
  { text: 'Oferecimentos', link: '/oferecimentos', icon: 'home' },
  { text: 'Matriculados', link: '/matriculados', icon: 'home' }
];



export default menu;
