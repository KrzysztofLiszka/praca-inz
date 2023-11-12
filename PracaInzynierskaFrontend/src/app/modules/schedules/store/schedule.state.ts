import { Schedule } from "src/app/models";

export interface SchedulesState {
    schedules: Schedule[];
    schedulesFromTimeline: Schedule[];
}