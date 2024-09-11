import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-logout-container',
	template: ` <app-logout (logoutRequested)="onLogout()"></app-logout> `,
	styleUrls: ['./logout.container.scss']
})
export class LogoutContainer {
	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	public onLogout(): void {
		this.authService.logOut();
		this.router.navigate(['/auth/login']);
	}
}
