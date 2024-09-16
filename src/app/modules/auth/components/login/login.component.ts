import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginRequest } from '../../types';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-login',
	template: ` <app-auth-layout>
		<div class="flex flex-col gap-16 items-center" id="form-fields">
			<h1 class="text-white text-3xl tracking-wide font-primary">Log in</h1>

			<form [formGroup]="loginForm" (ngSubmit)="onLogin()">
				<div class="w-96 flex flex-col items-center gap-7">
					<app-text-field
						label="username or email"
						[formControl]="usernameControl"
					></app-text-field>

					<app-text-field
						label="password"
						type="password"
						[formControl]="passwordControl"
					></app-text-field>

					<div class="w-56 mt-5">
						<app-flat-button
							label="Login"
							[isLoading]="isLoading"
							type="submit"
						></app-flat-button>
					</div>
				</div>
			</form>
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
	usernameControl = new FormControl('');
	passwordControl = new FormControl('');

	loginForm = new FormGroup({
		username: this.usernameControl,
		password: this.passwordControl
	});

	@Input() isLoading: boolean = false;
	@Output() loginRequested: EventEmitter<LoginRequest> =
		new EventEmitter<LoginRequest>();
	@Output() registerRequested: EventEmitter<void> = new EventEmitter<void>();

	onLogin(): void {
		this.loginForm.markAllAsTouched();

		this.loginRequested.emit({
			username: this.usernameControl.value!,
			password: this.passwordControl.value!
		});
	}

	onRegister(): void {
		this.registerRequested.emit();
	}
}
