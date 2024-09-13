import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterRequest } from '../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { F } from '@angular/cdk/keycodes';

@Component({
	selector: 'app-register',
	template: `
		<app-auth-layout>
			<div class="flex flex-col gap-8 items-center" id="form-fields">
				<h1 class="text-white text-3xl tracking-wide font-primary">
					Create an Account
				</h1>

				<form [formGroup]="registerForm" (ngSubmit)="onRegister()">
					<div class="w-96 flex flex-col items-center gap-7">
						<app-text-field
							label="username"
							[formControl]="usernameControl"
						></app-text-field>

						<app-text-field
							label="email"
							[formControl]="emailControl"
							[errorMessage]="getEmailErrorMessage()"
						></app-text-field>

						<app-text-field
							label="confirm email"
							[formControl]="confirmEmailControl"
						></app-text-field>

						<app-text-field
							label="password"
							type="password"
							[formControl]="passwordControl"
						></app-text-field>

						<app-text-field
							label="confirm password"
							type="password"
							[formControl]="confirmPasswordControl"
						></app-text-field>

						<div class="w-56 mt-5">
							<app-flat-button
								label="Continue"
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
				Already have an account? <br />
				Click
				<u class="text-yellow hover:cursor-pointer" (click)="onLogin()">
					here</u
				>
				to login
			</p>
		</app-auth-layout>
	`,
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	//Register form control
	usernameControl = new FormControl('', [Validators.required]);
	emailControl = new FormControl('', [Validators.required, Validators.email]);
	confirmEmailControl = new FormControl('', [
		Validators.required,
		Validators.email
	]);
	passwordControl = new FormControl('', [Validators.required]);
	confirmPasswordControl = new FormControl('', [Validators.required]);

	registerForm = new FormGroup({
		username: this.usernameControl,
		email: this.emailControl,
		confirmEmail: this.confirmEmailControl,
		password: this.passwordControl,
		confirmPassword: this.confirmPasswordControl
	});

	@Input() isLoading: boolean = false;
	@Output() loginRequested: EventEmitter<void> = new EventEmitter<void>();
	@Output() registerRequested: EventEmitter<RegisterRequest> =
		new EventEmitter<RegisterRequest>();

	onRegister() {
		this.registerRequested.emit({
			email: this.emailControl.value!,
			username: this.usernameControl.value!,
			password: this.passwordControl.value!
		});
	}

	onLogin(): void {
		this.loginRequested.emit();
	}

	getEmailErrorMessage() {
		if (this.emailControl.hasError('required')) {
			return 'Email is required';
		} else if (this.emailControl.hasError('email')) {
			return 'Please enter a valid email';
		}
		return '';
	}
}
