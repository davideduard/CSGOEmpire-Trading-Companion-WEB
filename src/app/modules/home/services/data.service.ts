import { Injectable } from '@angular/core';
import { LoginRequest } from '../../auth/types';
import { jwtDecode } from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor() {}

	private getJWTToken(): string | null {
		const token: string | null = localStorage.getItem('auth-token');
		if (token) {
			return token;
		}
		return null;
	}

	getUsernameFromToken(): any {
		const token: string | null = this.getJWTToken();
		if (!token) {
			return null;
		}

		const username: LoginRequest = jwtDecode(token);
		return username.username;
	}
}
