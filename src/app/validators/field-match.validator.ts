import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchFieldValidator(controlName: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const parent = control.parent;

		if (!parent) {
			return null;
		}

		const matchingControl = parent.get(controlName);
		if (!matchingControl) {
			return null;
		}

		if (control.value !== matchingControl.value) {
			return { mismatch: true };
		}

		return null;
	};
}
