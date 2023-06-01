import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/classes';
import { LabelData, MenuBtn } from 'src/app/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent implements OnInit {
  public menuItems: MenuBtn[];
  public labels: LabelData[];
  
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.menuItems = [
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

    this.labels = [
      {
        icon: 'fas fa-heart',
        class: 'btn-danger',
        data: 0
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
        data: 0
      },
      {
        icon: 'fas fa-book',
        class: 'btn-primary',
        data: 0
      },
      {
        icon: 'fas fa-piggy-bank',
        class: 'btn-secondary',
        data: 0
      }
    ];
  }
}
