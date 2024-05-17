import { ReactNode, createContext, useEffect, useState } from "react";
import { UserDTO } from "../../dtos/user.dto";
import UserService from "../../services/userServices/userService";
import { useNavigate } from "react-router-dom";

type AuthContextData = {
    user: UserDTO | undefined;
    isAuthenticated: boolean;
    isLoading: boolean;
    logout: ()=>void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}:{children: ReactNode}){
    const [user, setUser] = useState<UserDTO>();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const service: UserService = new UserService();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
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

    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isLoading, logout}}>
            {children}
        </AuthContext.Provider>
    )
}