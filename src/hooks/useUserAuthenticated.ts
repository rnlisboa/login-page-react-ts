import { useMutation } from "@tanstack/react-query";
import UserService from "../services/userServices/userService";

const userService = new UserService();

async function getUserProfile (){
    const {data: response} = await userService.getUser();
    return response;
}


const useUserAuthenticated = () => {
    const mutation = useMutation({
        mutationFn: () => {
            return getUserProfile().then(response => response);
        },
    })
    
    return mutation;
}

export default useUserAuthenticated;