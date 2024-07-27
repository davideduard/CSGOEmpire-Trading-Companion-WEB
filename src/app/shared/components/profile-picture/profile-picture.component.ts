import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownMenuComponent } from '../drop-down-menu/drop-down-menu.component';

@Component({
	selector: 'app-profile-picture',
	standalone: true,
	imports: [CommonModule, DropDownMenuComponent],
	template: `
		<div>
			<div class="profile" (click)="toggleMenu()">{{ profileInitials }}</div>
			<app-drop-down-menu [showMenu]="showMenu"></app-drop-down-menu>
		</div>
	`,
	styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
	@Input() username: string = '';

	public profileInitials: string = '';
	public showMenu: boolean = false;

	private generateInitials(): void {
		this.profileInitials = this.username.charAt(0).toUpperCase();
	}

	ngOnInit(): void {
		this.generateInitials();
	}

	toggleMenu(): void {
		this.showMenu = !this.showMenu;
	}
}
