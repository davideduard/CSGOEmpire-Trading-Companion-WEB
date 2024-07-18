import { Injectable } from '@angular/core';
import { AuthRepository } from '../repositories';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private authRepository: AuthRepository) {}

	login(username: string, password: string): Observable<User> {
		return this.authRepository.login(username, password);
	}
}
