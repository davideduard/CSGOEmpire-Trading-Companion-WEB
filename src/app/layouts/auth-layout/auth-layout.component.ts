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
					EmpireTrader <span class="text-white">Companion</span>
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
				<ng-content></ng-content>
			</div>

			<div class="flex flex-col">
				<p
					class="text-white text-opacity-30 text-md self-center text-center font-primary pb-5"
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
