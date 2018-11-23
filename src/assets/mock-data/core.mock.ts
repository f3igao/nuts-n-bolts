import { INavLink } from './../../app/models/core.interface';

export const NAV_LINKS: INavLink[] = [
  { name: 'About', url: '/', right: false },
  { name: 'Registration', url: '/register', right: false },
  { name: 'Army', url: '/army', right: false },
  { name: 'Jobs', url: '/todo', right: false },
  { name: 'Login', url: '/login', right: true },
];
