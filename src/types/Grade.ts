import { AssignmentPeriod, AssignmentType } from "./Asignment";

export interface Grade {
    id: number;
    descripcion: string;
    periodo: AssignmentPeriod;
    tipo_calificacion: AssignmentType;
}