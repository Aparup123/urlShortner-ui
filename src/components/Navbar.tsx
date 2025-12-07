import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div>LOGO</div>
        <div className="flex md:gap-4 gap-2">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
        </div>
    </div>
  )
}