import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-register',
	template: `
		<app-auth-layout>
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
	@Output() loginRequested: EventEmitter<void> = new EventEmitter<void>();

	onLogin(): void {
		this.loginRequested.emit();
	}
}
