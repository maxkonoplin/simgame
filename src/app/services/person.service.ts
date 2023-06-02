import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private currentPerson: BehaviorSubject<Person>;

  constructor() {
    this.currentPerson = new BehaviorSubject({
      name: '',
      birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30.4)),
      dateOfRelocationToCanada: new Date(),
      characteristic: {
        health: 100,
        hunger: 0,
        happines: 100,
        intellect: 85
      },
      position: null
    } as Person);
  }

  public get currentPerson$(): Observable<Person> {
    return this.currentPerson.asObservable();
  }

  public intervalChanges(): void {
    this.intervalHunger();
  }

  private intervalHunger(): void {
    const person = this.currentPerson.value;
    person.characteristic.hunger += 0.3;

    this.currentPerson.next(person);
  }
}
