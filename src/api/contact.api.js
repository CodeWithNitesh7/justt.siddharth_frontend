import Api from '../api/Instance'

export const submitContact=(data)=>{
    return Api.post("/contact/form",data);
}

export const getContact =()=>{
    return Api.get("/contact/formdata");
}