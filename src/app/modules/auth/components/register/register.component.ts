import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterRequest } from '../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
	matchFieldValidator,
	passwordValidator,
	usernameValidator
} from '../../../../validators';

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
							[errorMessage]="getUsernameErrorMessage()"
						></app-text-field>

						<app-text-field
							label="email"
							[formControl]="emailControl"
							[errorMessage]="getEmailErrorMessage()"
						></app-text-field>

						<app-text-field
							label="confirm email"
							[formControl]="confirmEmailControl"
							[errorMessage]="getConfirmEmailErrorMessage()"
						></app-text-field>

						<app-text-field
							label="password"
							type="password"
							[formControl]="passwordControl"
							[errorMessage]="getPasswordErrorMessage()"
						></app-text-field>

						<app-text-field
							label="confirm password"
							type="password"
							[formControl]="confirmPasswordControl"
							[errorMessage]="getConfirmPasswordErrorMessage()"
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
	usernameControl = new FormControl('', [
		Validators.required,
		usernameValidator()
	]);
	emailControl = new FormControl('', [Validators.required, Validators.email]);
	confirmEmailControl = new FormControl('', [
		Validators.required,
		Validators.email,
		matchFieldValidator('email')
	]);
	passwordControl = new FormControl('', [
		Validators.required,
		passwordValidator()
	]);
	confirmPasswordControl = new FormControl('', [
		Validators.required,
		matchFieldValidator('password')
	]);

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
		this.registerForm.markAllAsTouched();

		if (this.registerForm.valid) {
			this.registerRequested.emit({
				email: this.emailControl.value!,
				username: this.usernameControl.value!,
				password: this.passwordControl.value!
			});
		}
	}

	onLogin(): void {
		this.loginRequested.emit();
	}

	getUsernameErrorMessage(): string {
		if (this.usernameControl.hasError('required')) {
			return 'Username field cannot be empty';
		}

		if (this.usernameControl.hasError('invalidUsername')) {
			return 'Username should be at least 3 characters long and can only contain letters, numbers and allowed special characters (-, _, .)';
		}

		return '';
	}

	getEmailErrorMessage(): string {
		if (this.emailControl.hasError('required')) {
			return 'Email field cannot be empty';
		}

		if (this.emailControl.hasError('email')) {
			return 'Please use a valid email format';
		}

		return '';
	}

	getConfirmEmailErrorMessage(): string {
		if (this.confirmEmailControl.hasError('required')) {
			return 'Please confirm your email';
		}

		if (this.confirmEmailControl.hasError('email')) {
			return 'Please use a valid email format';
		}

		if (this.confirmEmailControl.hasError('mismatch')) {
			return 'Emails do not match';
		}

		return '';
	}

	getPasswordErrorMessage(): string {
		if (this.passwordControl.hasError('required')) {
			return 'Password field cannot be empty';
		}

		if (this.passwordControl.hasError('weakPassword')) {
			return 'The password must be at least 8 characters long, contain at least 1 capital letter, 1 number and 1 special character (!, @, #, $, %, ^, &, *, ., ?)';
		}

		return '';
	}

	getConfirmPasswordErrorMessage(): string {
		if (this.confirmPasswordControl.hasError('required')) {
			return 'Please confirm your password';
		}

		if (this.confirmPasswordControl.hasError('mismatch')) {
			return 'Passwords do not match';
		}

		return '';
	}
}
