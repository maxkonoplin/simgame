import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
	protected readonly destroy$ = new Subject();

	constructor() {}

	ngOnDestroy() {
		this.destroy$.next(null);
		this.destroy$.complete();
	}
}
