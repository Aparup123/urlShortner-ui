import { ConvertedUrlItem } from "@/types/urlTypes"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { RxCopy } from "react-icons/rx"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { openLinkNewTab } from "@/utils/openLinkNewTab"

export const UrlListItem = ({ convertedUrl }: { convertedUrl: ConvertedUrlItem }) => {
    return (
        <div className="border rounded-md p-4 my-2 flex justify-between gap-2">
            <div>
                <p className="font-mono cursor-pointer text-lg line-clamp-1 break-all min-w-0">{convertedUrl.shortUrl}</p>
                <p className="line-clamp-1 break-all min-w-0">{convertedUrl.trueUrl}</p>
            </div>
            <div className="flex items-center gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span onClick={()=>openLinkNewTab(convertedUrl.shortUrl)} className="cursor-pointer hover:scale-120"><FiExternalLink/></span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-xs">Open Link</p> 
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span onClick={()=>copyToClipboard(convertedUrl.shortUrl)} className="cursor-pointer hover:scale-120"><RxCopy /></span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-xs">Copy Short URL</p> 
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}