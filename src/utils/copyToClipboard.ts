import { toast } from "sonner";

export const copyToClipboard = async (text:string) => {
    await navigator.clipboard.writeText(text)
    toast.success("URL copied to clipboard");
}