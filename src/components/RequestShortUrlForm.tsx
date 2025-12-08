"use client"
import { BsArrowRightCircle } from "react-icons/bs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { FormEvent, useState } from "react"
import { getShortUrl } from "@/api/url"

export const RequestShortUrlForm = () => {
  const [longUrl, setLongUrl] = useState<string>("")
  const handleRequestShortUrlFormSubmit=async (e:FormEvent)=>{
    e.preventDefault()
    const response=await getShortUrl(longUrl) 
    console.log(response.data)
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
            ><BsArrowRightCircle/></Button>
    </form>
  )
}