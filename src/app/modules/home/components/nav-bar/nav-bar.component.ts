import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	template: `
		<nav class="nav-bar">
			<ul class="nav-list">
				<li>
					<a
						class="nav-item"
						routerLink="/import"
						routerLinkActive="active-route"
						>Import Data</a
					>
				</li>
				<li>
					<a
						class="nav-item"
						routerLink="/stats"
						routerLinkActive="active-route"
						>Stats</a
					>
				</li>
				<li>
					<a
						class="nav-item"
						routerLink="/history"
						routerLinkActive="active-route"
						>Trade History</a
					>
				</li>
			</ul>
			<app-profile-picture [username]="username"></app-profile-picture>
		</nav>
	`,
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
	@Input() username: string = '';
}
