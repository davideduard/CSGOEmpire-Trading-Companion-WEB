import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-drop-down-menu',
	template: `<div
		*ngIf="showMenu"
		[ngClass]="{
			'drop-down-menu-shown': !showMenu,
			'drop-down-menu-hidden': showMenu
		}"
	>
		<div class="triangle"></div>
		<ul>
			<li class="menu-item menu-first-element">
				<app-logout-container></app-logout-container>
			</li>
			<li class="menu-item menu-last-element">
				<a routerLink="/profile">
					<mat-icon svgIcon="profile" class="scale-[0.95]"></mat-icon>
					<span class="w-14">Profile</span>
				</a>
			</li>
		</ul>
	</div>`,
	styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent {
	@Input() showMenu: boolean = false;
}
