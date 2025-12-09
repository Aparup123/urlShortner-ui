"use client"
import { BsArrowRightCircle } from "react-icons/bs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FormEvent, useState } from "react"
import { getShortUrl } from "@/api/url"
import { toast } from "sonner"

interface shortUrlResponseData{
  shortUrl:string,
  trueUrl:string
}

export const RequestShortUrlForm = ({showConversion}:{showConversion:(url:string)=>void}) => {
  const [longUrl, setLongUrl] = useState<string>("")
  const handleRequestShortUrlFormSubmit=async (e:FormEvent)=>{
    e.preventDefault()
    try{
      const response=await getShortUrl(longUrl) 
      const data:shortUrlResponseData=response.data;
      const shortUrl=data.shortUrl;
      console.log(shortUrl)
      showConversion(shortUrl)
      toast.success("Url Conversion Successful.")
    }catch(e){
      toast.error("Url Conversion Failed!")
    }
    
    
  }
  return (
    <form className="flex gap-2 mt-5" onSubmit={handleRequestShortUrlFormSubmit}>
            <Input 
              type="text" 
              placeholder="Your Long URL" 
              className="md:w-sm"
              onChange={(e)=>setLongUrl(e.target.value)}
              />
            <Button
              type="submit"
              aria-label="Convert the link"
            ><BsArrowRightCircle/></Button>
    </form>
  )
} 