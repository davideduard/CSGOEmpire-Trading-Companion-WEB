import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { User } from '../../types';
import { LoginResponse } from '../../types/login-response.type';
import { Router } from '@angular/router';
import { RoutingService } from '../../../../services';

@Component({
	selector: 'app-login-container',
	template: `
		<app-login [isLoading]="isLoading" (loginRequested)="onLogin($event)">
		</app-login>
	`,
	styleUrls: ['./login-container.component.scss']
})
export class LoginContainer {
	isLoading: boolean = false;
	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	public onLogin(user: User): void {
		this.isLoading = true;
		this.authService.login(user.username, user.password).subscribe({
			next: (response: LoginResponse) => {
				if (response.token) {
					const token = response.token;
					localStorage.setItem('auth-token', token);
					this.router.navigate(['/']);
					this.isLoading = false;
				}
			},
			error: err => {
				console.log('err');
				this.isLoading = false;
			}
		});
	}
}
