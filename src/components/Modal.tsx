"use client"
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({children, onClose, open}:{
    children:React.ReactNode,
    onClose:() => void,
    open:boolean
}) => {
    if(!open) return null;
    return (
        
        <div onClick={onClose} className="fixed inset-0 flex items-center backdrop-blur-2xl transition-all duration-300 px-2">
            {children}
        </div>
    )
}