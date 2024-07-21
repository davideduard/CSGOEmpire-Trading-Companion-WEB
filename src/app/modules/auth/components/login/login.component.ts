import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';

@Component({
	selector: 'app-login',
	template: ` <app-auth-layout>
		<div class="flex flex-col gap-16 items-center">
			<h1 class="text-white text-3xl tracking-wide font-primary">Log in</h1>
			<div class="w-96 flex flex-col items-center">
				<app-text-field
					#usernameField
					[(ngModel)]="username"
					label="username"
					name="username"
				></app-text-field>

				<app-text-field
					[(ngModel)]="password"
					label="password"
					type="password"
					name="password"
				></app-text-field>

				<div class="w-56 mt-5">
					<app-flat-button
						label="login"
						[isLoading]="isLoading"
						(click)="onLogin()"
						(keyup.enter)="onLogin()"
					></app-flat-button>
				</div>
			</div>
		</div>
	</app-auth-layout>`,
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username: string = '';
	password: string = '';

	@Input() isLoading = false;
	@Output() loginRequested = new EventEmitter<User>();

	onLogin(): void {
		this.loginRequested.emit({
			username: this.username,
			password: this.password
		});
	}
}
