"use client"
import { Container } from "@/components/Container";
import { ConvertedUrlList } from "@/components/ConvertedUrlList";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { UrlResponseModal } from "@/components/UrlResponseModal";
import { LoadingContext } from "@/contexts/LoadingContext";
import { ConvertedUrlItem } from "@/types/urlTypes";
import { useState } from "react";



export default function Home() {
  const [urlResponseModalOpen, setUrlResponseModalOpen] = useState<boolean>(false)
  const [recievedShortUrl, setRecievedShortUrl ] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [convertedUrls, setConvertedUrls] = useState<Array<ConvertedUrlItem>>([{shortUrl:"Hellodasdasdasdasdasdasdasdasdasdasdsdassadasdasdasdasdasddasdas", trueUrl:"helloworld"}, {shortUrl:"Hello", trueUrl:"helloworld"}])
  const handleClose=()=>{
    setUrlResponseModalOpen(false)

  }
  const showConversion=(shortUrl:string)=>{
    setRecievedShortUrl(shortUrl)
    setUrlResponseModalOpen(true)
  }
  return (
    <LoadingContext value={[isLoading, setIsLoading]}>
      <div className="overflow-hidden relative h-screen">
        <Container className="mt-7 "><Navbar /></Container>
        <Container><Hero showConversion={showConversion} /></Container>
        <UrlResponseModal open={urlResponseModalOpen} onClose={handleClose} shortUrl={recievedShortUrl}/>
        <Container className="mt-7 max-w-xl"><ConvertedUrlList convertedUrls={convertedUrls}/></Container>
      </div>
    </LoadingContext>
  );
}
