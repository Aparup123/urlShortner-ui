"use client"
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { UrlResponseModal } from "@/components/UrlResponseModal";
import { useState } from "react";


export default function Home() {
  const [urlResponseModalOpen, setUrlResponseModalOpen] = useState<boolean>(false)
  const [recievedShortUrl, setRecievedShortUrl ] = useState<string>("")
  const handleClose=()=>{
    setUrlResponseModalOpen(false)

  }
  const showConversion=(shortUrl:string)=>{
    setRecievedShortUrl(shortUrl)
    setUrlResponseModalOpen(true)
  }
  return (
    <div className="overflow-hidden relative h-screen">
      <Container className="mt-7 "><Navbar /></Container>
      <Container><Hero showConversion={showConversion}/></Container>
      <UrlResponseModal open={urlResponseModalOpen} onClose={handleClose} shortUrl={recievedShortUrl}/>
    </div>
  );
}
