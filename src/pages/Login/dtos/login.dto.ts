export interface LoginDTO {
    email: string;
    password: string;
}

export interface TokensDTO {
    refresh: string;
    access: string;
}