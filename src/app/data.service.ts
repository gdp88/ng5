import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
	goal=this.goals.asObservable(); //another property

  constructor() { }

	changeGoal(goal) { //this method will be accessible from other components
		this.goals.next(goal);
	}

}
