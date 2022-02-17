import { option } from 'src/app/shared/Interface/option.model';
export const homeOptions: option[] = [
  {
    id: 1,
    title: 'Static Home',
    value: 'static',
  },
  {
    id: 2,
    title: 'Slider Home',
    value: 'slider',
  },
];

export const pagesOptions: option[] = [
  {
    id: 1,
    title: '404 page',
    value: '404',
  },
  {
    id: 2,
    title: 'About',
    value: 'about',
  },
  {
    id: 3,
    title: 'Cart',
    value: 'cart',
  },
  {
    id: 4,
    title: 'Check Out',
    value: 'checkOut',
  },
  {
    id: 5,
    title: 'Contact',
    value: 'contact',
  },
  {
    id: 6,
    title: 'News',
    value: 'news',
  },
  {
    id: 7,
    title: 'Shop',
    value: 'shop',
  },
];

export const shopOptions: option[] = [
  {
    id: 1,
    title: 'Shop',
    value: 'shop',
  },
  {
    id: 2,
    title: 'Check Out',
    value: 'checkOut',
  },
  {
    id: 3,
    title: 'Cart',
    value: 'cart',
  },
];

export const paidOptions: option[] = [
  {
    id: 1,
    title: 'Egyptian Pound',
    value: 'EGP',
    selected: false,
  },
  {
    id: 2,
    title: 'Dollar',
    value: 'USD',
    selected: true,
  },
  {
    id: 3,
    title: 'Euro',
    value: 'EUR',
    selected: false,
  },
];

export const languageOptions: option[] = [
  {
    id: 1,
    title: 'Arabic',
    value: 'ar',
    selected: false,
  },
  {
    id: 2,
    title: 'English',
    value: 'en',
    selected: true,
  },
];

export const invert_colorsOptions: option[] = [
  {
    id: 1,
    title: 'Light',
    value: 'light',
    selected: true,
  },
  {
    id: 2,
    title: 'Dark',
    value: 'dark',
    selected: false,
  },
];
