import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:8005",
})

//inceptor
api.interceptors.request.use((
    config)=>{
        const access_token=localStorage.getItem('access_token');
        console.log('Request interceptor - Token from storage:', access_token)
        if(access_token){
            config.headers.Authorization= `Bearer ${access_token}`
            console.log('Authorization header set:', config.headers.Authorization)
        }
        return config;
    },(error) => {
        return Promise.reject(error)
    }
);

export default api;