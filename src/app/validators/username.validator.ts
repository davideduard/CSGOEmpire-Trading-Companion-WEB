import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const value = control.value;

		if (!value) {
			return null;
		}

		const usernamePattern: RegExp = /^[A-Za-z0-9._-]{3,}$/;
		const isUsernameValid: boolean = usernamePattern.test(value);

		return isUsernameValid ? null : { invalidUsername: { value: value } };
	};
}
