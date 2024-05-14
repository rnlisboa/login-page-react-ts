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
    image_high_url: string;
    image_medium_url: string;
    image_low_url: string;
}

interface Role {
    value: number;
    label: string;
}

export interface UserDTO {
    id: string;
    avatar: Avatar;
    name: string;
    last_name: string;
    email: string;
    role: Role;
    last_login: string;
    staff_role: Role;
}
