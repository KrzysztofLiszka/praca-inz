import { WorkerDto, Workplace } from "src/app/models";

export interface WorkplacesState {
    workplaces: Workplace[];
    workersFromWorkplace: WorkerDto[];
    workplace?: Workplace;
    payments: any[];
}