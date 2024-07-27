import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-logout',
	template: `
		<button (click)="onLogout()">
			<mat-icon svgIcon="logout" class="scale-[0.95]"></mat-icon>
			<span>Logout</span>
		</button>
	`,
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
	@Output() logoutRequested: EventEmitter<void> = new EventEmitter<void>();

	public onLogout(): void {
		this.logoutRequested.emit();
	}
}
