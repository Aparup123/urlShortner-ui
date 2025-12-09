"use client"
import { RxCopy } from "react-icons/rx"
import { Modal } from "./Modal"
import { Button } from "./ui/button"
import { BiLinkExternal } from "react-icons/bi"
import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { link } from "fs"
import { toast } from "sonner"

export const UrlResponseModal = ({ open, onClose, shortUrl }:
    {
        open: boolean,
        onClose: () => void,
        shortUrl: string
    }
) => {

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(shortUrl)
        toast.success("URL copied to clipboard");
    }

    const openShortUrl=()=>{
        window.open(shortUrl, "_blank")
    }

    return (
        <Modal onClose={onClose} open={open}>
            <div onClick={(e) => e.stopPropagation()} className="max-w-xl border rounded-md bg-white/5 backdrop-blur-2xl p-4 flex flex-col gap-6 mx-auto shadow-2xl">
                <h2 className="lg:text-2xl font-medium text-center tracking-wide">Conversion Information</h2>
                <div className="flex flex-col gap-2">
                    <h3 className="text-md font-medium ml-1">Short URL</h3>
                    <div className="border rounded-md py-2 px-4 flex justify-between items-center gap-2">
                        <p className="font-mono min-w-0 break-all hover:underline cursor-pointer text-link line-clamp-1">{shortUrl}</p>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span onClick={copyToClipboard} className="cursor-pointer p-2 border rounded-md hover:scale-110"><RxCopy /></span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Copy URL</p>
                            </TooltipContent>
                        </Tooltip>

                    </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-around ">
                    <Button variant={"destructive"} onClick={onClose} className="flex-1">Close</Button>
                    <Button onClick={openShortUrl} className="flex-1" >Open <span><BiLinkExternal /></span></Button>
                </div>
            </div>
        </Modal>
    )
}