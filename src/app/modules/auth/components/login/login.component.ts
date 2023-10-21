import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	template: ` <app-auth-layout>
		<div class="flex flex-col gap-16 items-center mt-16">
			<h1 class="text-white text-5xl tracking-wide font-primary">Log in</h1>
			<div class="w-96">
				<app-text-field label="username"></app-text-field>
				<app-text-field label="password" type="password"></app-text-field>
			</div>
		</div>
	</app-auth-layout>`,
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {}
