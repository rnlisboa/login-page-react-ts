import { AxiosPromise } from "axios";
import { Api, SERVICE } from "../../../services/api";
import { LoginDTO, TokensDTO } from "../dtos/login.dto";
import { UserLoginDTO } from "../../../dtos/user.dto";

interface LoginResponse {
    user: UserLoginDTO;
    tokens: TokensDTO;
}

class LoginService {
    private apiCore: Api;
    private baseUrl: String;

    constructor() {
        this.apiCore = new Api;
        this.baseUrl = SERVICE.CORE;
    }

    public async login(credentials: LoginDTO): AxiosPromise<LoginResponse> {
        return await this.apiCore.axios.post(`${this.baseUrl}auth/login/`, credentials)
    }
}

export default LoginService;