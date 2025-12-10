import { ConvertedUrlItem } from "@/types/urlTypes"
import { UrlListItem } from "./UrlListItem"

export const ConvertedUrlList = ({convertedUrls}:{convertedUrls:Array<ConvertedUrlItem>}) => {
  return (
    <div className=" bg-white/5 backdrop-blur-2xl p-4 rounded-md">
        {convertedUrls.map((convertedUrl)=><UrlListItem convertedUrl={convertedUrl}/>)}
    </div>
  )
}