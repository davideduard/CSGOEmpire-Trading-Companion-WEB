import { Component } from '@angular/core';
import { DataService } from '../../services';

@Component({
	selector: 'app-profile-page-container',
	template: ` <app-profile-page [username]="username"> </app-profile-page> `,
	styleUrls: ['./profile-page.container.scss']
})
export class ProfilePageContainer {
	username: string;

	constructor(private dataService: DataService) {
		this.username = this.dataService.getUsernameFromToken();
	}
}
