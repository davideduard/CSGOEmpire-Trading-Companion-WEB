import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable({
	providedIn: 'root'
})
export class AuthRepository {
	private apiUrl = 'http://localhost:8080/auth';

	constructor(private httpClient: HttpClient) {}

	login(username: string, password: string): Observable<User> {
		const requestData = { username: username, password: password };
		return this.httpClient.post<User>(`${this.apiUrl}/login`, requestData);
	}
}
