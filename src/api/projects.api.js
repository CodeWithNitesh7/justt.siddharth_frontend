import Api from '../api/Instance'


export const create=(data)=>{
return Api.post("/projects/create",data);
}

export const update=(id,data)=>{
    return Api.put(`/projects/update/${id}`,data);
}

export const deleteProject=(id)=>{
    return Api.delete(`/projects/delete/${id}`)
}

export const getProject =()=>{
    return Api.get("/projects/getProject");
}