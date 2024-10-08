import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RoutingService {
	private currentUrl: string = '';
	private prevUrl: string = '';

	constructor(private router: Router) {
		this.currentUrl = this.router.url;
		let skipFirstNavigation = true;

		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				if (skipFirstNavigation) {
					skipFirstNavigation = false;
				} else {
					this.prevUrl = this.currentUrl;
				}
				this.currentUrl = event.url;
			}
		});
	}

	public getPreviousUrl(): string {
		return this.prevUrl;
	}
}
