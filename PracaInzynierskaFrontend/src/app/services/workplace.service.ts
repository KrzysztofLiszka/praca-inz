import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { WorkerDto, Workplace } from '../models';

@Injectable({
    providedIn: 'root'
})
export class WorkplaceService extends BaseApiService {
    getAllWorkplaces(): Observable<Workplace[]> {
        return this.getAll<Workplace>('Workplace/GetAll');
    }

    getWorkersFromWorkplace(): Observable<WorkerDto[]> {
        return this.getAll<WorkerDto>('Workplace/GetWorkersFromWorkplace');
    }

    assignUserToWorkplace(workplace: Workplace): Observable<any> {
        return this.post<any>('Workplace/AssignUserToWorkplace', workplace);
    }

    addWorkplace(workplace: Workplace): Observable<any> {
        return this.post<any>('Workplace/Add', workplace)
    }
}