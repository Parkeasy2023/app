import {api} from "../../api";

export interface IRegister {
    //dados de cadastro
    name?: string
    email?: string
    usuario?: string
    password?: string
    document?: string
    telefone?: string
    sexo?: string
    datanasc?: string
}

export interface IAuthenticate {
    //dados de autenticação
    document?: string
    password?: string
}

//respostas das requisições
export interface IUser {
    //dados(todos?)
    token: any;
    id: number
    name: string
    email: string
    usuario?: string
    document?: string
    telefone: string
    sexo?: string
    datanasc?: string
}

export interface IUserLogin {
    //dados
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}

class UserData {
    register(data: IRegister){
        return api.post<IUser>('/register', data) //Dado que será retornado após o cadastro IUser
    }
    login(data: IAuthenticate){
        return api.post<IUserLogin>('/login', data)//Dado que será retornado após o login IUserLogin
    }
}

export default new UserData()