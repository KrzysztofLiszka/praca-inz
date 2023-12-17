import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { TimeSpent } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimeSpentService extends BaseApiService {

    getAllTimeSpentsFromUser(): Observable<TimeSpent[]> {
        return this.getAll<TimeSpent>('TimeSpent/GetAllUserItems');
    }

    getTimeSpent(id: string): Observable<TimeSpent> {
        return this.get<TimeSpent>(`TimeSpent/Get/${id}`);
    }

    editTimeSpent(timeSpent: TimeSpent): Observable<any> {
        return this.put<any>('TimeSpent/EditUserItem', timeSpent);
    }

    addTimeSpent(timeSpent: TimeSpent): Observable<any> {
        return this.post<any>('TimeSpent/AddUserItem', timeSpent);
    }

    deleteTimeSpent(id: string): Observable<any> {
        return this.delete<any>(`TimeSpent/Delete/${id}`)
    }
}
