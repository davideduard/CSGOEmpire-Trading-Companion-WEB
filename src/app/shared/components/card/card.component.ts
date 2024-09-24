import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule],
	template: ` <div class="card"></div> `,
	styleUrls: ['./card.component.scss']
})
export class CardComponent {}
