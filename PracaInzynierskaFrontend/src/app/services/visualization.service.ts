import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Visualization } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService extends BaseApiService {

    getAllVisualizationsFromWorkplace(): Observable<Visualization[]> {
        return this.getAll<Visualization>('Visualization/GetAllItemsFromWorkplace');
    }

    getVisualization(id: string): Observable<Visualization> {
        return this.get<Visualization>(`Visualization/Get/${id}`);
    }

    editVisualization(visualization: Visualization): Observable<any> {
        return this.put<any>('Visualization/EditUserItem', visualization);
    }

    addVisualization(visualization: Visualization): Observable<any> {
        return this.post<any>('Visualization/AddUserItem', visualization);
    }

    deleteVisualization(id: string): Observable<any> {
        return this.delete<any>(`Visualization/Delete/${id}`)
    }

    getImages(visualizationId: string): Observable<any> {
        return this.getAll<any>('Visualization/GetImages/' + visualizationId);
    }

    addImage(visualizationId: string, file?: any): Observable<any>{
        const formData = new FormData();
        formData.append('file', file);
        return this.post<any>(`Visualization/AddImage/${visualizationId}`, formData);
    }

    deleteImage(id: string): Observable<any> {
        return this.delete<any>(`Visualization/DeleteImage/${id}`)
    }
}
