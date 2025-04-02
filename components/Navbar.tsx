// in the Layout.tx file of (root)
import Link from "next/link"
import Image from "next/image"
import { auth ,signOut,signIn } from "@/auth" 
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import signout, signin from @auth only, bcoz 'next-auth/react wont work

// import GitHub from "next-auth/providers/github";

const Navbar = async () => { // adding async here is cannot be done in client component
   const session = await auth();
  return (
      <header className="px-4 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
          <Image src="/logo2.png" alt="logo" width={144} height={50}/>
          </Link>

          <div className="flex items-center gap-5 text-black">
              {/* only want to render things when our user loged in, so use auth user session */}
              {/* if session exists and if session has user then render this additional info */}
              {session && session?.user ?(
                <>
                   <Link href="/startup/create">
                      <span className="max-sm:hidden">Create</span>
                      <BadgePlus className="size-6 sm:hidden"/>
                   </Link>

                    {/* this is react19 forms */}
                   <form action={async ()=>{
                     'use server'
                     await signOut({redirectTo:"/"})}
                    }>
                      <button type="submit">
                      <span className="max-sm:hidden">Logout</span>
                      <LogOut className="size sm:hidden test-red-500"/>
                      </button>
                   </form>

                   <Link href={`/user/${session?.id}`}>
                      <Avatar className="size-10">
                        <AvatarImage 
                        src={session?.user?.image || ''}
                        alt={session?.user?.name || ''}
                        />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                   </Link>
                </>
              ) : (
                // what happens if dont have a user? display login
                // button (onClick) is the client component and its not possible to invoke client function from server so use form actions with server actions. react19 forms
                <form action={async ()=> {
                  // - signin is asynchronous 
                    "use server"; // this ensure that this function is called on server

                      await signIn('github');
                  }}>
                      <button type="submit">Login</button>
                </form>
              )}
          </div>
        </nav>
      </header>
  )
}

export default Navbar
