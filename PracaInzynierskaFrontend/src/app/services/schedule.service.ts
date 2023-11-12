import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Schedule } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService extends BaseApiService {

    getAllSchedulensFromWorkplace(): Observable<Schedule[]> {
        return this.getAll<Schedule>('Schedule/GetAllItemsFromWorkplace');
    }

    getSchedule(id: string): Observable<Schedule> {
        return this.get<Schedule>(`Schedule/Get/${id}`);
    }

    editSchedule(schedule: Schedule): Observable<any> {
        const scheduleToUpdate = { ...schedule };
        const date = new Date(schedule.date);
        date.setDate(date.getDate() + 1);
        scheduleToUpdate.date = date;
        return this.put<any>('Schedule/EditUserItem', scheduleToUpdate);
    }

    addSchedule(schedule: Schedule): Observable<any> {
        const scheduleToAdd = { ...schedule };
        const date = new Date(schedule.date);
        date.setDate(date.getDate() + 1);
        scheduleToAdd.date = date;
        return this.post<any>('Schedule/AddUserItem', scheduleToAdd);
    }

    deleteSchedule(id: string): Observable<any> {
        return this.delete<any>(`Schedule/Delete/${id}`)
    }

    getSchedulesFromTimeline(from?: Date, to?: Date): Observable<Schedule[]> {
        if (!from || !to) return this.getUserItemsWithFilters<Schedule>();
        return this.getUserItemsWithFilters<Schedule>(from.toDateString(), to.toDateString());
    }
}
