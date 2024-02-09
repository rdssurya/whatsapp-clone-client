import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`,data);
    } catch (error) {
        console.log("Error while addUser API:", error.message);
    }
};

export const getUsers = async() => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("Error while getting users:", error.message);
    }
} 

export const setConversation = async(data) => {
    try{
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(error){
        console.log("Error while calling setConversation", error.message);
    }
};

export const getConversation = async(data)=>{
    try{
        const response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    }
    catch(error){
        console.log("Error while calling getConversation", error.message);
    }
};

export const newMessage = async(data) => {
    try{
        const response = await axios.post(`${url}/message/add`, data);
        return response.data;
    }
    catch(error){
        console.log("Error while calling newMessage", error.message);
    }
}

export const getMessages = async(id) => {
    try {
        const response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getMessages", error.message);
    }
}


export const uploadFile = async(data) => {
    try {
        return await axios.post(`${url}/file/upload`,data);
    } catch (error) {
        console.log("Error while calling uploadFile", error.message);
    }
}