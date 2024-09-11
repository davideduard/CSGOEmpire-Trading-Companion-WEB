import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register-container',
	template: ` <app-register (loginRequested)="onLogin()"></app-register> `,
	styleUrls: ['./register.container.scss']
})
export class RegisterContainer {
	constructor(private router: Router) {}

	public onLogin(): void {
		this.router.navigate(['/auth/login']);
	}
}
