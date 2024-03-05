export interface User {
  id: number;
  tipo_documento: string;
  numero_documento: string;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  telefono_contacto: string;
  correo: string;
  fecha_nacimiento: Date;
  promedio: string;
  tipo_usuario: string;
  estado: boolean;
  fecha_ingreso: Date;
}
