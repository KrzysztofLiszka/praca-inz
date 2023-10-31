import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { LoginDto, RegisterDto, WorkerDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseApiService {
    get currentlyLoggedUser(): WorkerDto {
        const currentUser = localStorage.getItem('currentUser') || '{}';
        return JSON.parse(currentUser) as WorkerDto;
    }   

    isAuthenticated(): boolean {
        const token = localStorage.getItem('tokenPracaInz');
        return token != null;
    }

    loginToSystem(loginData: LoginDto): Observable<any> {
        return this.post<any>('Auth/Login', loginData);
    }

    registerToTheSystem(registerData: RegisterDto): Observable<any> {
        return this.post<any>('Auth/Register', registerData);
    }

    getCurrentUser(): Observable<WorkerDto> {
        return this.get<WorkerDto>('Auth/GetCurrentlyLoggedUser');
    }
}
