import { Component } from '@angular/core';
import { DataService } from '../../services';

@Component({
	selector: 'app-trade-history-container',
	template: ` <app-trade-history [username]="username"> </app-trade-history> `,
	styleUrls: ['./trade-history.container.scss']
})
export class TradeHistoryContainer {
	username: string;

	constructor(private dataService: DataService) {
		this.username = this.dataService.getUsernameFromToken();
	}
}
