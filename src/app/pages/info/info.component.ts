import { Component, OnInit } from '@angular/core';
import { Observable, interval, takeUntil } from 'rxjs';
import { Person } from 'src/app/models';
import { PersonService } from 'src/app/services';
import { BaseComponent } from 'src/app/classes';
import { Interval, Duration } from 'luxon';
import * as humanizeDuration from 'humanize-duration';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent extends BaseComponent implements OnInit {
  public person: Person;
  public livingTime: string = '';

  constructor(private readonly personService: PersonService) {
    super();

    this.personService.currentPerson$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((person) => {
      this.person = person;
    });
  }

  ngOnInit(): void {
    this.updateLivingTime();
    interval(5000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.updateLivingTime();
    });
  }

  private updateLivingTime(): void {
    const birthday = this.person.birthday;
    const birthdayInSeconds = birthday.getTime() / 1000;
    const nowSeconds = new Date().getTime() / 1000;
    const differenceSeconds = Math.round(nowSeconds - birthdayInSeconds) / 5;
    const nowDate = new Date(birthday.getTime() + (differenceSeconds * 1000 * 60 * 60))

    const timeInterval = Interval.fromDateTimes(birthday, nowDate).toDuration().valueOf();

    this.livingTime = humanizeDuration(timeInterval, {largest: 2 });
  }

}
