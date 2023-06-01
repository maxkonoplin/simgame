import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { interval, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/classes';
import { PersonService } from 'src/app/services';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('audioEl') audioChildren: ElementRef<HTMLAudioElement>;

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

  ngAfterViewInit(): void {
    this.audioChildren.nativeElement.volume = 0.05;
  }
}
