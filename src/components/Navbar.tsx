import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
        <div>LOGO</div>
        <div className="flex gap-4">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
        </div>
    </div>
  )
}