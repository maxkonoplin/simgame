import { Component, OnInit } from '@angular/core';
import { interval, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/classes';
import { PersonService } from 'src/app/services';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent extends BaseComponent implements OnInit {
  constructor(private readonly personService: PersonService) {
    super();
  }

  ngOnInit(): void {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.personService.intervalChanges();
    });
  }
}
