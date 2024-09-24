import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-home-layout',
	standalone: true,
	template: `
		<div class="relative">
			<div class="bg-darkBlue-light w-[28rem] xl:w-[36rem] h-[100vh] absolute">
				<div
					class="w-full h-[14vh] items-center flex font-primary text-white pl-10 text-3xl"
				>
					<mat-icon svgIcon="icon" class="scale-[4] mr-10 ml-2"></mat-icon>
					<p><span class="text-yellow">EmpireTrader</span> Companion</p>
				</div>
				<div
					class="w-full h-[86vh] text-white font-primary flex justify-center pt-20"
				>
					<ul>
						<li>text</li>
						<li>text</li>
						<li>text</li>
					</ul>
				</div>
			</div>
			<ng-content select="app-nav-bar"></ng-content>
		</div>
	`,
	imports: [MatIconModule],
	styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {}
