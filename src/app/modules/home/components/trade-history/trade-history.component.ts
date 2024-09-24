import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-trade-history',
	template: ` <app-nav-bar [username]="username"> </app-nav-bar> `,
	styleUrls: ['./trade-history.component.scss']
})
export class TradeHistoryComponent {
	@Input() username: string = '';
}
