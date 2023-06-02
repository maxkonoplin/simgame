import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/classes';
import { LABELS, MENU_ITEMS } from 'src/app/constants';
import { LabelData, MenuBtn, Person } from 'src/app/models';
import { PersonService } from 'src/app/services';
import { Interval } from 'luxon';
import * as humanizeDuration from 'humanize-duration';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends BaseComponent{
  public menuItems: MenuBtn[] = MENU_ITEMS;
  public labels: LabelData[] = LABELS;
  public ages: string = ''
  
  constructor(private readonly personSevice: PersonService) {
    super();

    this.personSevice.currentPerson$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((person) => {
      this.updateLabels(person);
      this.updateAges(person);
    });
  }

  private updateAges(person: Person): void {
    const birthdayDate = person.birthday;
    const birthdayInSeconds = birthdayDate.getTime() / 1000;
    const nowSeconds = new Date().getTime() / 1000;
    const differenceSeconds = nowSeconds - birthdayInSeconds;
    const nowDate = new Date(birthdayDate.getTime() + (differenceSeconds * 1000))

    const timeInterval = Interval.fromDateTimes(birthdayDate, nowDate).toDuration().valueOf();

    this.ages = humanizeDuration(timeInterval, {largest: 1 });
  }

  private updateLabels(person: Person): void {
    const [health, hunger, money, happines, intellect, income] = this.labels;

    health.data = person.characteristic.health;
    hunger.data = Math.round(person.characteristic.hunger);
    happines.data = person.characteristic.happines;
    intellect.data = person.characteristic.intellect;
  }
}