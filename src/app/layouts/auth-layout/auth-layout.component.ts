import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-auth-layout',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="w-full h-full bg-darkBlue relative">
			<div class="flex flex-col gap-3 pt-20">
				<p class="text-2xl text-yellow self-center font-primary">
					EmpireTrader Companion
				</p>
				<p
					class="text-xs text-white text-opacity-30 self-center text-center font-primary"
				>
					Your first automated trading app to keep <br />
					easy track of your profits!
				</p>
			</div>

			<!--Form Fields-->
			<div
				class="flex flex-col items-center absolute gap-2 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3"
			>
				<ng-content></ng-content>
			</div>

			<div
				class="flex flex-col absolute bottom-0 mb-10 left-1/2 -translate-x-1/2"
			>
				<p
					class="text-white text-opacity-30 self-center text-center font-primary"
				>
					You don't have an account already? <br />
					Click
					<u class="text-yellow hover:cursor-pointer"> here</u>
					to sign-up
				</p>
			</div>
		</div>
	`,
	styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {}
