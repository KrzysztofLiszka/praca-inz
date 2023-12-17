import { Injectable } from '@angular/core';
import { LoginDto, RegisterDto, WorkerDto } from '../models';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';

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

    getUserPicture(): Observable<any> {
        return this.get<any>('Auth/GetUserPicture');
    }

    updateUser(updateUser: any): Observable<any> {
        return this.post<any>('Auth/UpdateUser', updateUser);
    }

    updateUserPicture(file?: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.post<any>('Auth/UpdateUserProfilePicture', formData);
    }

    updateUserRoles(newRoleName: string, updateUser: any): Observable<any> {
        return this.get<any>('Auth/UpdateUserRole/' + newRoleName + '/' + updateUser.id);
    }

    updateWorkerHourlyRate(updateUser: any, newRate: number): Observable<any> {
        return this.post<any>('Workplace/UpdateWorkerHourlyRate/' + updateUser.id + '/' + newRate, null);
    }
}
