import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { Documentation } from '../models';

@Injectable({
    providedIn: 'root'
})
export class DocumentationService extends BaseApiService {

    getAllDocumentationsFromWorkplace(): Observable<Documentation[]> {
        return this.getAll<Documentation>('Documentation/GetAllItemsFromWorkplace');
    }

    getDocumentation(id: string): Observable<Documentation> {
        return this.get<Documentation>(`Documentation/Get/${id}`);
    }

    editDocumentation(documentation: Documentation): Observable<any> {
        return this.put<any>('Documentation/EditUserItem', documentation);
    }

    addDocumentation(documentation: Documentation): Observable<any> {
        return this.post<any>('Documentation/AddUserItem', documentation);
    }

    deleteDocumentation(id: string): Observable<any> {
        return this.delete<any>(`Documentation/Delete/${id}`)
    }
}
