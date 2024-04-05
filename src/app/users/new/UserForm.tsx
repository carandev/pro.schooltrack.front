export interface UserForm {
    tipo_documento: string | null;
    numero_documento: string | null;
    primer_nombre: string | null;
    segundo_nombre: string | null;
    primer_apellido: string | null;
    segundo_apellido: string | null;
    telefono_contacto: string | null;
    correo: string | null;
    fecha_nacimiento: Date | null;
    promedio: string | null;
    tipo_usuario: string | null;
    estado: boolean | null;
    fecha_ingreso: Date | null;
}