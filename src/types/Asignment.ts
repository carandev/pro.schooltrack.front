export interface Assignment {
    id: number;
    note: number;
    description: string;
    type: AssignmentType;
    teacherId: number;
    studentId: number;
    courseId: number;
    materialId: number;
}

export enum AssignmentType {
    Normal = 10,
    Acumulativa = 20,
    Resit = 30
}

export enum AssignmentPeriod {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4,
    Fifth = 5
}