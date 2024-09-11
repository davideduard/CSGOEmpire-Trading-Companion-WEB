import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';

@Component({
	selector: 'app-login',
	template: ` <app-auth-layout>
		<div class="flex flex-col gap-16 items-center" id="form-fields">
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

		<p
			class="text-white text-opacity-30 text-md self-center text-center font-primary pb-5"
			id="footer"
		>
			You don't have an account already? <br />
			Click
			<u class="text-yellow hover:cursor-pointer" (click)="onRegister()">
				here</u
			>
			to sign-up
		</p>
	</app-auth-layout>`,
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	username: string = '';
	password: string = '';

	@Input() isLoading: boolean = false;
	@Output() loginRequested: EventEmitter<User> = new EventEmitter<User>();
	@Output() registerRequested: EventEmitter<void> = new EventEmitter<void>();

	onLogin(): void {
		this.loginRequested.emit({
			username: this.username,
			password: this.password
		});
	}

	onRegister(): void {
		this.registerRequested.emit();
	}
}
