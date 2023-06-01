import { LabelData, MenuBtn } from "../models";

export const LABELS: LabelData[] = [
  {
    icon: 'fas fa-heart',
    class: 'btn-danger',
    data: 100
  },
  {
    icon: 'fas fa-utensils',
    class: 'btn-warning',
    data: 0
  },
  {
    icon: 'fas fa-dollar-sign',
    class: 'btn-success',
    data: 0
  },
  {
    icon: 'fas fa-laugh-beam',
    class: 'btn-info',
    data: 100
  },
  {
    icon: 'fas fa-book',
    class: 'btn-primary',
    data: 85
  },
  {
    icon: 'fas fa-piggy-bank',
    class: 'btn-secondary',
    data: 0
  }
];

export const MENU_ITEMS: MenuBtn[] = [
  {
    name: 'Инфо',
    icon: 'fas fa-info-circle',
    link: './info'
  },
  {
    name: 'Питание',
    icon: 'fas fa-hamburger',
    link: './food'
  },
  {
    name: 'Работа',
    icon: 'fas fa-briefcase',
    link: './work'
  },
  {
    name: 'Жилье',
    icon: 'fas fa-home',
    link: './house'
  },
  {
    name: 'Город',
    icon: 'fas fa-city',
    link: './city'
  },
  {
    name: 'Бизнесс',
    icon: 'fas fa-landmark',
    link: './business'
  },
  {
    name: 'Компьютер',
    icon: 'fas fa-laptop',
    link: './computer'
  }
];