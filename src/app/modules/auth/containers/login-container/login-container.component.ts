import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { User } from '../../types';
import { LoginResponse } from '../../types/login-response.type';
import { Router } from '@angular/router';

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

	onLogin(user: User): void {
		this.isLoading = true;
		this.authService.login(user.username, user.password).subscribe(
			(response: LoginResponse) => {
				if (response.token) {
					const token: string = response.token;
					localStorage.setItem('auth-token', token);
					this.router.navigate(['/']);
					this.isLoading = false;
				}
			},
			error => {
				console.log('err');
			}
		);
	}
}
