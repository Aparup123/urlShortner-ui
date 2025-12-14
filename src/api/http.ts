import axios from "axios";
console.log("Backend URL is: ", process.env.NEXT_PUBLIC_BACKEND_URL)
const api=axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ,
})

export default api

