import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-auth-layout',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="w-full h-full bg-darkBlue relative">
			<div class="flex flex-col gap-3 pt-20">
				<p class="text-2xl text-yellow self-center">EmpireTrader Companion</p>
				<p class="text-xs text-white text-opacity-30 self-center text-center">
					Your first automated trading app to keep <br />
					easy track of your profits!
				</p>
			</div>
			<div
				class="flex flex-col absolute bottom-0 mb-10 left-1/2 -translate-x-1/2"
			>
				<p class="text-white text-opacity-30 self-center text-center">
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
