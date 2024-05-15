import { AxiosPromise } from "axios";
import { Api, SERVICE } from "../api";
import { UserDTO, UserLoginDTO } from "../../dtos/user.dto";
import { getToken } from "../auth";

const token = getToken();

class UserService {
    private apiCore: Api;
    private baseUrl: String;

    constructor() {
        this.apiCore = new Api;
        this.baseUrl = SERVICE.CORE;
    }

    public async getUser(): AxiosPromise<UserLoginDTO> {
        return await this.apiCore.axios.get(`${this.baseUrl}auth/profile/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

export default UserService;