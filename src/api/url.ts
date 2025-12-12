import api from "./http"

const getShortUrl=(longUrl:string)=>{
    return api.post("/api/v1/url/create-short-url", {
        url:longUrl
    })
}

export {getShortUrl};