import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WorkplaceActions } from 'src/app/modules/workplaces/store';
import { getPaymentsSelector } from 'src/app/modules/workplaces/store/selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'app-payments-page',
    templateUrl: './payments-page.component.html',
    styleUrls: ['./payments-page.component.scss']
})
export class PaymentsPageComponent implements OnInit {
    formGroup = this.fb.group({
        fromDate: new FormControl<Date | null>(null),
        toDate: new FormControl<Date | null>(null),
    });

    payments$!: Observable<any[]>;
    displayedColumns: string[] = ['name', 'surname', 'image', 'payment'];
    displayedHeaders: string[] = ["Nazwa", 'Nazwisko', 'Zdjęcie', "Wypłata za dany okres"];

    constructor(private store: Store<AppState>, private fb: FormBuilder) {
        this.selectPayments();
    }

    ngOnInit(): void {
        this.dispatchPayments();
    }

    dispatchPaymentsWithFilters(): void {
        if (!this.formGroup.value.fromDate) return;
        if (!this.formGroup.value.toDate) return;
        this.store.dispatch(WorkplaceActions.getAllPayments({ from: this.formGroup.value.fromDate, to: this.formGroup.value.toDate }));
    }

    private selectPayments(): void {
        this.payments$! = this.store.select(getPaymentsSelector);
    }

    private dispatchPayments(): void {
        this.store.dispatch(WorkplaceActions.getAllPayments({}));
    }
}
