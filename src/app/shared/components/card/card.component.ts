import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="card-container">
			<h3 class="card-title" *ngIf="title">{{ title }}</h3>
			<div class="card">
				<ng-content></ng-content>
			</div>
		</div>
	`,
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() title: string = '';
}
