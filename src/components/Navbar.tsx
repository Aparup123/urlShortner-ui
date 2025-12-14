import { Unlink } from "lucide-react"
import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
        <div className="font-bold text-xl flex justify-between gap-2 items-center cursor-pointer ">
          <div>S<span className="text-green-400">hr</span>nk</div>
          <span><Unlink/></span></div>
        <div className="flex md:gap-4 gap-2">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
        </div>
    </div>
  )
}