import { ReactNode, createContext, useEffect, useState } from "react";
import { UserDTO, UserLoginDTO } from "../../dtos/user.dto";
import useUserAuthenticated from "../../hooks/useUserAuthenticated";

type AuthContextData = {
    user: UserDTO | undefined;
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}:{children: ReactNode}){
    const [user, setUser] = useState<UserDTO | undefined>();
    const isAuthenticated = !!user;

    useEffect(()=>{
        const token: string | null = localStorage.getItem("token");
        if(token){
            const userResponse = useUserAuthenticated();
            if(userResponse.isSuccess) setUser(userResponse.data);
        }
    },[])
    return (
        <AuthContext.Provider value={{user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}