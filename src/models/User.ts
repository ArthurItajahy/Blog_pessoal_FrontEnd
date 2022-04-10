interface User {
    id: number;
    nome: string;
    usuario: string;
    senha?: string | null;
    foto: string
}

export default User;