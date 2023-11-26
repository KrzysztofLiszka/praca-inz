import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Visualization } from 'src/app/models';
import { AppState } from 'src/app/store/app.state';
import { VisualizationActions, getVisualizationsFromWorkplaceSelector } from '../../store';
import { Router } from '@angular/router';

@Component({
    selector: 'app-visualizations-page',
    templateUrl: './visualizations-page.component.html',
    styleUrls: ['./visualizations-page.component.scss']
})
export class VisualizationsPageComponent implements OnInit {
    readonly EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
    visualizations$!: Observable<Visualization[]>;
    displayedColumns: string[] = ['name', 'enter-delete'];
    displayedHeaders: string[] = ["Nazwa", "Otwórz"];

    constructor(private store: Store<AppState>, private router: Router) {
        this.selectVisualizations();
    }

    ngOnInit(): void {
        this.dispatchVisualization();
    }

    private selectVisualizations(): void {
        this.visualizations$ = this.store.select(getVisualizationsFromWorkplaceSelector);
    }

    private dispatchVisualization(): void {
        this.store.dispatch(VisualizationActions.getAllItemsFromWorkplace());
    }

    deleteVisualization(item: Visualization): void {
        this.store.dispatch(VisualizationActions.deleteItem({ id: item.id }));
    }

    addVisualization(): void {
        var visualization: any = {};
        visualization.name = "";
        this.store.dispatch(VisualizationActions.addItem({ item: visualization }));
    }

    openEditPage(visualization: Visualization): void {
        this.router.navigateByUrl(`/edit-visualization/${visualization.id}`);
    }
}
