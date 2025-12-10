import { RequestShortUrlForm } from "./RequestShortUrlForm"

export const Hero = ({showConversion}:
  {
    showConversion:(url:string)=>void,
  }) => {
  return (
    <div className="mt-30 flex flex-col gap-4 items-center ">
        <h1 className="md:text-5xl sm:text-3xl text-2xl tracking-tight font-medium">
            Your URLs Need Fat Loss
        </h1>
        <h2 className="md:text-2xl sm:text-xl text-sm text-center tracking-tight">
            Place Your URL here and make it <br/> shorter in single click
        </h2>

        <RequestShortUrlForm showConversion={showConversion}/>
        
        <div className="w-50 h-50 rounded-full bg-green-300 blur-3xl absolute -z-1 top-[-20] left-0 lg:top-[-20] lg:left-150 animate-[pulse_10s_linear_infinite]"></div>
        
        <div className="w-50 h-50 rounded-full bg-green-300 blur-3xl absolute -z-1 top-100 right-[-50] lg:top-[-20] lg:right-[-50] animate-toandfro"></div>
        <div className="w-50 h-50 rounded-full bg-green-400 blur-[5rem] absolute -z-1 bottom-[-20] right-60 "></div>
    </div>
  )
}
