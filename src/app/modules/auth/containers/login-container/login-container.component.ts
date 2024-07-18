import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { User } from '../../types';

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
	constructor(private authService: AuthService) {}

	onLogin(user: User): void {
		this.isLoading = true;
		this.authService
			.login(user.username, user.password)
			.subscribe((response: User) => {
				console.log(response);
				this.isLoading = false;
			});
	}
}
