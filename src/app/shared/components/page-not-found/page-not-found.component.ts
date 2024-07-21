import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoutingService } from '../../../services';

@Component({
	selector: 'app-page-not-found',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div
			class="relative font-primary text-white w-full h-full flex flex-col justify-between"
		>
			<p class="text-5xl font-bold text-center pt-20">
				<span class="text-yellow">404</span>, NOT FOUND :(
			</p>
			<p class="text-4xl text-center">
				We are sorry, but the page you are searching for <br />
				is currently not available
			</p>
			<div class="text-center text-lg pb-10">
				<p
					class="text-white text-opacity-30 self-center text-center font-primary"
				>
					If you want to go back to the previous page <br />
					Click
					<u
						class="text-yellow hover:cursor-pointer"
						(click)="goToLastGoodURL()"
					>
						here</u
					>
				</p>
			</div>
		</div>
	`,
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
	constructor(
		private router: Router,
		private routingService: RoutingService
	) {}

	public goToLastGoodURL(): void {
		const prevUrl: string = this.routingService.getPreviousUrl();
		if (prevUrl) {
			this.router.navigate([prevUrl]);
		} else {
			this.router.navigate(['/']);
		}
	}
}
