import { Component, Input } from '@angular/core';
import { DataService } from '../../services';

@Component({
	selector: 'app-stats-page-container',
	template: ` <app-stats-page [username]="username"></app-stats-page> `,
	styleUrls: ['./stats-page.container.scss']
})
export class StatsPageContainer {
	username: string;

	constructor(private dataService: DataService) {
		this.username = this.dataService.getUsernameFromToken();
	}
}
