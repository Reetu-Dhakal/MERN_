import api from ".";

export const login = async(data) => {
    try{
        const response = await api.post('/auth/login',data);
        console.log(response)

        return response.data

    }catch(error){
        console.log(error)
    }
}
//? resgister
