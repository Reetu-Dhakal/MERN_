import api from ".";

export const login = async(data) => {
    try{
        const response = await api.post('/auth/login',data);
        console.log('Login API response:', response)
        return response.data
    }catch(error){
        console.error('Login API error:', error.response?.data || error.message)
        throw error
    }
}
//? register
export const register = async(data) => {
    try{
        const response = await api.post('/auth/register',data);
        console.log('Register API response:', response)
        return response.data
    }catch(error){
        console.error('Register API error:', error.response?.data || error.message)
        throw error
    }
}

//get user detail
export const getUserDetails = async() => {
    try{
        const response = await api.get('/auth/user-detail')
        return response.data
    } catch(error){
        console.log(error)
        throw error
    }
}

