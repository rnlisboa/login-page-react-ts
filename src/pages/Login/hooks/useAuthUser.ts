import { useMutation } from "@tanstack/react-query";
import { LoginDTO } from "../dtos/login.dto";
import LoginService from "../service/loginService";

const service = new LoginService();

const loginRequest = async (credentials: LoginDTO) => {
    const { data: response } = await service.login(credentials);
    return response;
}

export const useLoginRequest = () => {
    const mutation = useMutation({
        mutationFn: (credentials: LoginDTO) => {
            return loginRequest(credentials).then((response) => response);
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.tokens.access);
            localStorage.setItem("refresh_token", data.tokens.refresh);
            window.location.href = "/profile";
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    return mutation;
}