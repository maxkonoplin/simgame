import { Job } from "./job";

export interface Person {
	name: string;
	birthday: Date;
	characteristic: Characteristic;

	position: Job | null;
}

export interface Characteristic {
	health: number;
	hunger: number;
	happines: number;
	intellect: number;
}
