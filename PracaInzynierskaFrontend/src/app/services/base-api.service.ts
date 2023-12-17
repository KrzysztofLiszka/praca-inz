import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseApiService {

    private readonly apiUrl = 'https://localhost:7061/api';

    constructor(private httpClient: HttpClient) { }

    protected get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(`${this.apiUrl}/${url}`);
    }

    protected getAll<T>(url: string): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.apiUrl}/${url}`);
    }

    protected post<T>(url: string, data: any): Observable<T> {
        return this.httpClient.post<T>(`${this.apiUrl}/${url}`, data);
    }

    protected put<T>(url: string, data: any): Observable<T> {
        return this.httpClient.put<T>(`${this.apiUrl}/${url}`, data);
    }

    protected delete<T>(url: string): Observable<T> {
        return this.httpClient.delete<T>(`${this.apiUrl}/${url}`);
    }

    protected getUserItemsWithFilters<T>(fromDate?: string, toDate?: string): Observable<T[]> {
        if (!fromDate || !toDate) return this.httpClient.get<T[]>(`${this.apiUrl}/Schedule/GetUserItemsWithFilters`);
        let params = new HttpParams()
            .set('from', fromDate)
            .set('to', toDate);
        return this.httpClient.get<T[]>(`${this.apiUrl}/Schedule/GetUserItemsWithFilters`, { params });
    }

    protected getPaymentsFromTimeline<T>(fromDate?: string, toDate?: string): Observable<T[]> {
        if (!fromDate || !toDate) return this.httpClient.get<T[]>(`${this.apiUrl}/Workplace/GetPayments`);
        let params = new HttpParams()
            .set('from', fromDate)
            .set('to', toDate);
        return this.httpClient.get<T[]>(`${this.apiUrl}/Workplace/GetPayments`, { params });
    }
}
