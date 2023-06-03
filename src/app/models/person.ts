import { House } from "./house";
import { Job } from "./job";

export interface Person {
	name: string;
	birthday: Date;
	dateOfRelocationToCanada: Date;
	characteristic: Characteristic;
	statistic: PersonStatistic;
	position: Job | null;
	home: House | null;
}

export interface Characteristic {
	health: number;
	hunger: number;
	happines: number;
	intellect: number;
}

export interface PersonStatistic {
	earnedMoney: number;
	writedProgramm: number;
	wriptedVirus: number;
	readBooks: number;
}
