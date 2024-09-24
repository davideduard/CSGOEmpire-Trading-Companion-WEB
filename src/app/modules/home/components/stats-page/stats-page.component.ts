import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-stats-page',
	template: ` <app-nav-bar [username]="username"></app-nav-bar> `,
	styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent {
	@Input() username: string = '';
}
