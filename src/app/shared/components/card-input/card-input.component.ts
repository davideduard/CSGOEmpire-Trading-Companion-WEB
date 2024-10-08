import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-card-input',
	standalone: true,
	imports: [CommonModule, MatInputModule],
	template: `<div class="input-placeholder">
		<p *ngIf="inputTitle" class="input-title">{{ inputTitle }}</p>
		<input
			class="card-input"
			type="text"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[type]="type"
		/>
	</div>`,
	styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent {
	@Input() disabled: boolean = false;
	@Input() placeholder: string = '';
	@Input() inputTitle: string = '';
	@Input() type: string = 'text';
}
