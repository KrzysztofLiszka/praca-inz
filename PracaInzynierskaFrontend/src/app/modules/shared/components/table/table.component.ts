import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Roles } from 'src/app/constants';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() dataSource: any;
    @Input() displayedColumns: string[] = [];
    @Input() displayedHeaders: string[] = [];
    roles = Roles;
    selectedRoles: string[] = [];

    @Output() addClicked = new EventEmitter<any>();
    @Output() editClicked = new EventEmitter<any>();
    @Output() deleteClicked = new EventEmitter<any>();
    @Output() selectClicked = new EventEmitter<any>();

    constructor(private authService: AuthService) { }

    onAddClick(): void {
        this.addClicked.emit();
    }

    onEditClick(item: any): void {
        this.editClicked.emit(item);
    }

    onDeleteClick(item: any): void {
        this.deleteClicked.emit(item);
    }

    getBase64Data(item: any): any | null {
        return `data:image/jpg;base64,${item.profilePicture}`;
    }

    hasProfilePicture(item: any): boolean {
        if (!item.profilePicture || item.profilePicture == "") return false;
        return true;
    }

    getRoleValue(item: any): string {
        return item.roleName;
    }

    changeRoleName(event: any, user: any): void {
        this.authService.updateUserRoles(event.target.value, user).subscribe(res => window.location.reload);
    }

    onHourlyRateBlur(event: any, user: any): void {
        this.authService.updateWorkerHourlyRate(user, event.target.value).subscribe(res => window.location.reload);
    }
}
