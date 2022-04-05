interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string; // Mudamos o parametro do Token para aceitar somente string
}

export default UserLogin;