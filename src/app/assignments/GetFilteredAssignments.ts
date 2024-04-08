import { AssignmentPeriod, AssignmentType } from "../../types/Asignment";

export interface GetFilteredAssignments {
    subjectId: number;
    gradeId: number;
    type: AssignmentType;
    period: AssignmentPeriod;
}