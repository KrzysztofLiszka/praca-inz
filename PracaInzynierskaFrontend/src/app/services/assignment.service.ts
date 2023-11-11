import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { Assignment } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService extends BaseApiService {
    getAllAssignmentsFromWorkplace(): Observable<Assignment[]> {
        return this.getAll<Assignment>('Assignment/GetAllItemsFromWorkplace');
    }

    getAssignment(id: string): Observable<Assignment> {
        return this.get<Assignment>(`Assignment/Get/${id}`);
    }

    editAssignment(assignment: Assignment): Observable<any> {
        return this.put<any>('Assignment/EditUserItem', assignment);
    }

    addAssignment(assignment: Assignment): Observable<any> {
        return this.post<any>('Assignment/AddUserItem', assignment);
    }

    deleteAssignment(id: string): Observable<any> {
        return this.delete<any>(`Assignment/Delete/${id}`)
    }
}
