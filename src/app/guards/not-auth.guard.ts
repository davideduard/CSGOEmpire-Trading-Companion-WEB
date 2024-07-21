import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../modules/auth/services';
import { inject } from '@angular/core';

export const notAuthGuard: CanActivateFn = (route, state) => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	if (!authService.isLoggedIn()) {
		return true;
	} else {
		router.navigate(['/']);
		return false;
	}
};
