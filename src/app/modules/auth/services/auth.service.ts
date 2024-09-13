import { Injectable } from '@angular/core';
import { AuthRepository } from '../repositories';
import { Observable } from 'rxjs';
import { LoginRequest, RegisterRequest, RegisterResponse } from '../types';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	public login(loginUser: LoginRequest): Observable<LoginResponse> {
		return this.authRepository.login(loginUser);
	}

	public register(registerUser: RegisterRequest): Observable<RegisterResponse> {
		return this.authRepository.register(registerUser);
	}

	public isLoggedIn(): boolean {
		return this.authRepository.isLoggedIn();
	}

	public logOut(): void {
		this.authRepository.logOut();
	}
}
