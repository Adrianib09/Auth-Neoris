export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string; // Administrador || Recepcionista
    dateAdded: string;
    profileImage: string;
}
