import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const value = control.value;
		if (!value) {
			return null;
		}

		const passwordValidationPattern: RegExp =
			/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

		const isValidPassword: boolean = passwordValidationPattern.test(value);
		return isValidPassword ? null : { weakPassword: { value: value } };
	};
}
