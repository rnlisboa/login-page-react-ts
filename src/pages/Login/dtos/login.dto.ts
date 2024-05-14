export interface LoginDTO {
    username: string;
    password: string;
}

export interface TokensDTO {
    refresh: string;
    access: string;
}