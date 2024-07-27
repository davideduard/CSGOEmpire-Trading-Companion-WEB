import { Component, Input } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '../../../modules/auth/auth.module';
@Component({
	selector: 'app-drop-down-menu',
	standalone: true,
	template: `<div
		*ngIf="showMenu"
		[ngClass]="{
			'drop-down-menu-shown': !showMenu,
			'drop-down-menu-hidden': showMenu
		}"
	>
		<!--		<div class="triangle"></div>-->
		<app-logout-container
			class="menu-item menu-first-element menu-last-element"
		></app-logout-container>
	</div>`,
	imports: [NgClass, NgIf, NgForOf, MatIconModule, AuthModule],
	styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent {
	@Input() showMenu: boolean = false;
}
