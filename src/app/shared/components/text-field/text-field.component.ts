import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
	ControlValueAccessor,
	FormControl,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule
} from '@angular/forms';

@Component({
	selector: 'app-text-field',
	standalone: true,
	imports: [CommonModule, MatInputModule, ReactiveFormsModule],
	template: `
		<div class="w-96">
			<mat-form-field appearance="fill">
				<mat-label>{{ label }}</mat-label>
				<input
					matInput
					[type]="type"
					[formControl]="formControl"
					[value]="value"
				/>
			</mat-form-field>
			<mat-error *ngIf="formControl?.invalid && formControl?.touched">
				{{ errorMessage }}
			</mat-error>
		</div>
	`,
	styleUrls: ['./text-field.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextFieldComponent),
			multi: true
		}
	]
})
export class TextFieldComponent implements ControlValueAccessor {
	@Input() label: string = '';
	@Input() type: string = 'text';
	@Input() formControl!: FormControl;
	@Input() errorMessage: string = '';

	value: string = '';

	writeValue(value: string): void {
		this.value = value ? value : '';
	}
	registerOnChange(fn: any): void {}
	registerOnTouched(fn: any): void {}
}
