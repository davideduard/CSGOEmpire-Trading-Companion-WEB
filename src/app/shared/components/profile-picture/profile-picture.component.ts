import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-profile-picture',
	standalone: true,
	imports: [CommonModule],
	template: ` <div class="profile">{{ profileInitials }}</div> `,
	styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
	@Input() username: string = '';

	public profileInitials: string = '';

	private generateInitials(): void {
		this.profileInitials = this.username.charAt(0).toUpperCase();
	}

	ngOnInit(): void {
		this.generateInitials();
	}
}
