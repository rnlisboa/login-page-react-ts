import { AxiosPromise } from "axios";
import { Api, SERVICE } from "../api";
import { UserDTO } from "../../dtos/user.dto";

class UserService {
    private apiCore: Api;
    private baseUrl: String;

    constructor() {
        this.apiCore = new Api;
        this.baseUrl = SERVICE.CORE;
    }

    public async getUser(): AxiosPromise<UserDTO> {
        return await this.apiCore.axios.post(`${this.baseUrl}auth/profile/`)
    }
}

export default UserService;