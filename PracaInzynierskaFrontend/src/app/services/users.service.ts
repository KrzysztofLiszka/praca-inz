import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { WorkerDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApiService {
    getAllUsers(): Observable<WorkerDto[]> {
        return this.getAll<WorkerDto>('Users/GetAllUsers');
    }

    deleteUser(id: string): Observable<any> {
        return this.delete<any>(`Users/DeleteUser/${id}`);
    }
}
