import { useMutation, useQuery } from "@tanstack/react-query";
import UserService from "../services/userServices/userService";

const userService = new UserService();

async function getUserProfile (){
    const {data: response} = await userService.getUser();
    return response;
}


const useUserAuthenticated = () => {
    const query = useQuery({
        queryFn: getUserProfile,
        queryKey: ['get-user-profile'],
    })

    return {
        ...query,
        data: query?.data
    }
}

export default useUserAuthenticated;