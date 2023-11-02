import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { Workplace } from '../models';

@Injectable({
    providedIn: 'root'
})
export class WorkplaceService extends BaseApiService {
    getAllWorkplaces(): Observable<Workplace[]> {
        return this.getAll<Workplace>('Workplace/GetAll');
    }

    assignUserToWorkplace(workplace: Workplace): Observable<any> {
        return this.post<any>('Workplace/AssignUserToWorkplace', workplace);
    }

    addWorkplace(workplace: Workplace): Observable<any> {
        return this.post<any>('Workplace/Add', workplace)
    }
}