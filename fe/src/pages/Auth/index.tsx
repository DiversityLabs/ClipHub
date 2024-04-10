import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SiFacebook } from "react-icons/si"

export default function Auth() {
  return (
    <><Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-nbpurple3 via-nbgreen4 to-nbblue4">
          <User className="mr-2 h-4 w-4 inline" /> Register Now!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="self-center">Register a new account.</DialogTitle>
          <DialogDescription>
            Create your new account by input the credentials below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Username
            </Label>
            <Input
              id="name"
              placeholder="Your Username"
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-left">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-left">
              Password
            </Label>
            <Input
              id="username"
              placeholder="Password"
              className="col-span-3" />
          </div>
        </div>
        <Button type="submit">Submit</Button>
        <DialogDescription className="text-center">
          Or register with
        </DialogDescription>
        <DialogFooter>
          <Button className="justify-self-center">
            <FcGoogle className="mr-2 h-4 w-4" /> Google
          </Button>
          <Button>
            <SiFacebook className="mr-2 h-4 w-4" /> Facebook
          </Button>
          <Button>
            <FaGithub className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog><Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-l from-neolightblue via-neopurple to-neogreen">
            <User className="mr-2 h-4 w-4 inline" /> Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="self-center">Login to your account</DialogTitle>
            <DialogDescription>
              Input your credentials below for login to your account. Don't have an account? Close this window and navigate to Register menu!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Username
              </Label>
              <Input
                id="name"
                placeholder="Your Username"
                className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-left">
                Password
              </Label>
              <Input
                id="username"
                placeholder="Password"
                className="col-span-3" />
            </div>
          </div>
          <a href="/resetpw" className="text-xs text-right hover:underline">Forgot your password?</a>
          <Button type="submit">Submit</Button>
          <DialogDescription className="text-center">
            Or login with
          </DialogDescription>
          <DialogFooter>
            <Button className="justify-self-center">
              <FcGoogle className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button>
              <SiFacebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
            <Button>
              <FaGithub className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog></>
  )
}
