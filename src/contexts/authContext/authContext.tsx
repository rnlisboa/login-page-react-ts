import { ReactNode, createContext, useEffect, useState } from "react";
import { UserDTO, UserLoginDTO } from "../../dtos/user.dto";
import UserService from "../../services/userServices/userService";

type AuthContextData = {
    user: UserLoginDTO | undefined;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}:{children: ReactNode}){
    const [user, setUser] = useState<UserLoginDTO>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const service: UserService = new UserService();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(()=>{
        const token: string | null = localStorage.getItem("token");
        if(token){
          service.getUser().then((res) => {
            setUser(res.data);
            setIsLoading(false);
            setIsAuthenticated(true);
        }).catch((err) => {
            console.error(err);
          })
        } else {
            setIsLoading(false);
        }
    },[])

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}