import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest, RegisterResponse } from '../../types';
import { AuthService } from '../../services';

@Component({
	selector: 'app-register-container',
	template: `
		<app-register
			[isLoading]="isLoading"
			(loginRequested)="onLogin()"
			(registerRequested)="onRegister($event)"
		></app-register>
	`,
	styleUrls: ['./register.container.scss']
})
export class RegisterContainer {
	isLoading: boolean = false;

	constructor(
		private router: Router,
		private authService: AuthService
	) {}

	public onRegister(registerUser: RegisterRequest): void {
		this.isLoading = true;
		this.authService.register(registerUser).subscribe({
			next: (response: RegisterResponse) => {
				if (response.token) {
					const token = response.token;
					localStorage.setItem('auth-token', token);
					this.router.navigate(['/']);
					this.isLoading = false;
				}
			},
			error: err => {
				console.log(err.error);
				this.isLoading = false;
			}
		});
	}

	public onLogin(): void {
		this.router.navigate(['/auth/login']);
	}
}
