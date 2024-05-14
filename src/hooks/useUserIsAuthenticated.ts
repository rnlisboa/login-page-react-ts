export const userIsAuthenticated = () => {
    const token: string | null = localStorage.getItem("token");
    if(token){
        return token;
    }
    return false;
}