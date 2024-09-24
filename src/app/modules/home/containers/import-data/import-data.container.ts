import { Component } from '@angular/core';
import { DataService } from '../../services';

@Component({
	selector: 'app-import-data-container',
	template: ` <app-import-data [username]="username"> </app-import-data> `,
	styleUrls: ['./import-data.container.scss']
})
export class ImportDataContainer {
	username: string;

	constructor(private dataService: DataService) {
		this.username = this.dataService.getUsernameFromToken();
	}
}
