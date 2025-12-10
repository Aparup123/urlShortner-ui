import { createContext } from "react";

export const LoadingContext=createContext<[boolean, (loading:boolean)=>void]>([false, ()=>{}])