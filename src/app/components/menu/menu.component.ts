import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/classes';
import { LABELS, MENU_ITEMS } from 'src/app/constants';
import { LabelData, MenuBtn, Person } from 'src/app/models';
import { PersonService } from 'src/app/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent{
  public menuItems: MenuBtn[] = MENU_ITEMS;
  public labels: LabelData[] = LABELS;
  
  constructor(private readonly personSevice: PersonService) {
    super();

    this.personSevice.currentPerson$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((person) => {
      this.updateLabels(person);
    });
  }

  private updateLabels(person: Person): void {
    const [health, hunger, money, happines, intellect, income] = this.labels;

    health.data = person.characteristic.health;
    hunger.data = Math.round(person.characteristic.hunger);
    happines.data = person.characteristic.happines;
    intellect.data = person.characteristic.intellect;
  }
}