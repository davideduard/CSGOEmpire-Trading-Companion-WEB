import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-auth-layout',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div
			class="w-full h-full bg-darkBlue relative font-primary flex flex-col justify-between"
		>
			<div class="flex flex-col justify-between gap-3 pt-20">
				<p class="text-4xl text-yellow self-center font-primary">
					EmpireTrader Companion
				</p>
				<p
					class="text-md text-white text-opacity-30 self-center text-center font-primary"
				>
					Your first automated trading app to keep <br />
					easy track of your profits!
				</p>
			</div>

			<!--Form Fields-->
			<div class="flex flex-col items-center gap-2 pb-16 pt-2">
				<ng-content select="#form-fields"></ng-content>
			</div>

			<div class="flex flex-col">
				<ng-content select="#footer"></ng-content>
			</div>
		</div>
	`,
	styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {}
