import Api from './Instance'

// login API
export const login=(data)=>{
    return Api.post("/auth/login",data);
}

// Logout Api
export const logout=(data)=>{
    return Api.post("/auth/logout",data);
}

