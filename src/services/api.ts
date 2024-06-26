import axios from "axios"
import { SERVICE } from "./auth"


class Api {
  public axios

  constructor(serviceUrl: string = SERVICE.CORE) {
    this.axios = axios.create({
      baseURL: serviceUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;version=v1_web',
      },
    })
    
    this.axios.interceptors.response.use(
      (response: any) => response,
      async (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            return Promise.reject() 
          }
          else if ((error.response.status === 403)) {
            //mandar pro login
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/";
          return Promise.reject()
        }
      }
    )
  }
}

export { Api, SERVICE }