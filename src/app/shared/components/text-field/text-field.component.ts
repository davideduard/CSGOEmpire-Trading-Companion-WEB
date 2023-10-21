import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-text-field',
	standalone: true,
	imports: [CommonModule, MatInputModule],
	template: `
		<div class="w-96">
			<mat-form-field appearance="fill">
				<mat-label>{{ label }}</mat-label>
				<input type="{{ type }}" matInput />
			</mat-form-field>
		</div>
	`,
	styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
	@Input() label = '';
	@Input() type = 'username';
}
