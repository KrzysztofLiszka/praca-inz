import { TimeSpent } from "src/app/models";

export interface SpentHourState {
    timeSpentsFromUser: TimeSpent[],
    timeSpent?: TimeSpent
}
