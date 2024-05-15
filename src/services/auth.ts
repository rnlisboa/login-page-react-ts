interface serviceInt {
    [key: string]: string
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const SERVICE: serviceInt = {
    CORE: 'https://api.homologation.cliqdrive.com.br/'
}