import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-import-data',
	template: ` <app-nav-bar [username]="username"></app-nav-bar> `,
	styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent {
	@Input() username: string = '';
}
