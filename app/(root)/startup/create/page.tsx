import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"
import { redirect } from "next/navigation";

const page = async () => {
    //check if user is loged in 
    const session = await auth();
    if(!session) redirect('/');
  return (
    <>
      <section className="pink_container !min-[230px]">
        <h1 className="heading">Submit your startup</h1>
      </section>

      <StartupForm/>
    </>
  )
}

export default page
