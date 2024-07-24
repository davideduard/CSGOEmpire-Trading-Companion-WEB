import { Injectable } from '@angular/core';
import { User } from '../../auth/types';
import { jwtDecode } from 'jwt-decode';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private readonly jwtToken: string = '';

	constructor() {
		this.jwtToken = this.getJWTToken();
	}

	private getJWTToken(): string {
		const token: string | null = localStorage.getItem('auth-token');
		if (token) {
			return token;
		}
		return '';
	}

	getUsernameFromToken(): any {
		const username: User = jwtDecode(this.jwtToken);
		return username.username;
	}
}
