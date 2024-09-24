import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-profile-page',
	template: ` <app-nav-bar [username]="username"></app-nav-bar>
		<div class="profile-page-container">
			<app-card></app-card>
			<app-card></app-card>
		</div>`,
	styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
	@Input() username: string = '';
}
