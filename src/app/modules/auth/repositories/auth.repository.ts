import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, RegisterRequest, RegisterResponse } from '../types';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
	providedIn: 'root'
})
export class AuthRepository {
	private apiUrl = 'http://localhost:8080/auth';

	constructor(private httpClient: HttpClient) {}

	public login(loginUser: LoginRequest): Observable<LoginResponse> {
		return this.httpClient.post<LoginResponse>(
			`${this.apiUrl}/login`,
			loginUser
		);
	}

	public register(registerUser: RegisterRequest): Observable<RegisterResponse> {
		return this.httpClient.post<RegisterResponse>(
			`${this.apiUrl}/register`,
			registerUser
		);
	}

	public isLoggedIn(): boolean {
		return localStorage.getItem('auth-token') != null;
	}

	public logOut(): void {
		localStorage.removeItem('auth-token');
	}
}
