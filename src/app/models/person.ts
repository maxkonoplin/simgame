import { Job } from "./job";

export interface Person {
	name: string;
	birthday: string;
	characteristic: Characteristic;

	position: Job;
}

export interface Characteristic {
	health: number;
	hunger: number;
	money: number;
	happines: number;
	intellect: number;
}
