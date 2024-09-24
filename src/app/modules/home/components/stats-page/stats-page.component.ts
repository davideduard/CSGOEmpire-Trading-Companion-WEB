import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-stats-page',
	template: `
		<app-home-layout
			><app-nav-bar [username]="username"></app-nav-bar
		></app-home-layout>
	`,
	styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent {
	@Input() username: string = '';
}
