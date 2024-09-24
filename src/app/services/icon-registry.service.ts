import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class IconRegistryService {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {}

	registerCustomIcons(): void {
		this.matIconRegistry.addSvgIcon(
			'logout',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/logout.svg'
			)
		);

		this.matIconRegistry.addSvgIcon(
			'icon',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'/assets/icons/tradeicon.svg'
			)
		);
	}
}
