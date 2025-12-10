import { ConvertedUrlItem } from "@/types/urlTypes"

export const UrlListItem = ({convertedUrl}:{convertedUrl: ConvertedUrlItem}) => {
    return (
        <div className="border rounded-md p-4 my-2">
                
                <div><span>Long URL:</span><span className="font-mono hover:underline cursor-pointer text-link line-clamp-1">{convertedUrl.trueUrl}</span></div>
                <p className="truncate">Short URL: {convertedUrl.shortUrl}</p>
        </div>
    )
}