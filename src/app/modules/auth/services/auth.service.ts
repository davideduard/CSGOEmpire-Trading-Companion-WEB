import { Injectable } from '@angular/core';
import { AuthRepository } from '../repositories';
import { Observable } from 'rxjs';
import { User } from '../types';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	login(username: string, password: string): Observable<LoginResponse> {
		return this.authRepository.login(username, password);
	}

	isLoggedIn(): boolean {
		return this.authRepository.isLoggedIn();
	}
}
