import { Component, inject } from '@angular/core';
import { AuthService } from '../../services';
import { LoginRequest } from '../../types';
import { LoginResponse } from '../../types';
import { Router } from '@angular/router';
import {
	MatSnackBar,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
	selector: 'app-login-container',
	template: `
		<app-login
			[isLoading]="isLoading"
			(loginRequested)="onLogin($event)"
			(registerRequested)="onRegister()"
		>
		</app-login>
	`,
	styleUrls: ['./login.container.scss']
})
export class LoginContainer {
	isLoading: boolean = false;
	horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	private _snackBar = inject(MatSnackBar);

	constructor(
		private authService: AuthService,
		private router: Router
	) {}

	public onLogin(loginUser: LoginRequest): void {
		this.isLoading = true;
		this.authService.login(loginUser).subscribe({
			next: (response: LoginResponse) => {
				if (response.token) {
					const token = response.token;
					localStorage.setItem('auth-token', token);
					this.router.navigate(['/']);
					this.isLoading = false;
				}
			},
			error: err => {
				this._snackBar.open(err.error, 'Close', {
					horizontalPosition: this.horizontalPosition,
					verticalPosition: this.verticalPosition
				});
				this.isLoading = false;
			}
		});
	}

	public onRegister(): void {
		this.router.navigate(['/auth/register']);
	}
}
