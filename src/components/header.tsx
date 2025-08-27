import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
function Header() {
  const user = null; 

  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
    style={{
        boxShadow: shadow
    }}>
        <Link className="flex items-end gap-2" href="/">
            <Image 
            src="/circlejelo.png"
            height={60}
            width={60}
            className="rounded-full"
            priority alt="picture"/>

            <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                GREAT <span>notes</span>
            </h1>
        </Link>

        <div className="flex gap-4">
            { user ? (
                "Logout"
            ) : (
                <>
                <Button asChild className="hidden sm:block">
                    <Link href="/signup">
                    Sign Up</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
                </>
            )}
            <DarkModeToggle />
        </div>
    </header>
  )
}

export default Header
