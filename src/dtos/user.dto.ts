export interface UserLoginDTO {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: string | null;
    type: string;
    created: string;
    modified: string;
    role: string;
}

interface Avatar {
    id: number;
    high: string;
    medium: string;
    low: string;
}

export interface UserDTO {
    id: string;
    avatar: Avatar;
    name: string;
    created: Date;
    email: string;
    role: string;
    is_active: boolean;
    modified: Date;
    type: string
}
