import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
	providedIn: 'root'
})
export class AuthRepository {
	private apiUrl = 'http://localhost:8080/auth';

	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string): Observable<LoginResponse> {
		const requestData = { username: username, password: password };
		return this.httpClient.post<LoginResponse>(
			`${this.apiUrl}/login`,
			requestData
		);
	}

	isLoggedIn(): boolean {
		return localStorage.getItem('auth-token') != null;
	}
}
