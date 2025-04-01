import { auth } from "@/auth";
import SearchForms from "@/components/SearchForms";
import StartupCard ,{StartupTypeCard} from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { Search } from "lucide-react";
import { start } from "repl";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

   const query=(await searchParams).query;

   const params={search:query || null};

   const session= await auth();

   console.log(session?.id);

  //  const posts= await client.fetch(STARTUP_QUERY);

   const {data:posts}= await sanityFetch({query:STARTUP_QUERY,params})

  //  console.log(JSON.stringify(posts,null,2));

  //  const posts=[{
  //   _createdAt: new Date().toDateString(),
  //   views:100,
  //   author:{_id:1,name:"Varun Bhai"},
  //   _id:1,
  //   description:"This is a description",
  //   image:"https://sastrarobotics.com/wp-content/uploads/2017/07/robotic-automation.jpg",
  //   category:"Robots",
  //   title:"Robotics Startup",
  //  }]

  return (
    <>
    <section className="pink_container">
       <h1 className="heading">Pitch your StartUp, <br/> Connect With Entrepreneurs</h1>
       <p className="sub-heading !max-w-3xl">
        {/* we are a community of entrepreneurs, investors, and professionals who are passionate about startups. We are here to help you connect with other entrepreneurs, investors, and professionals who can help you grow your business. */}
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
       </p>
       <SearchForms query={query}/>
    </section>

   {/* section for cards */}
    <section className="section_container">
        <p className="text-30-semibold">
          {query? `Seach Results for "${query}"`: 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
            {posts?.length>0 ? (
              posts.map((post:StartupTypeCard,index:number)=>(
                <StartupCard key={post?._id} post={post}/>
              )
            )):(
              <p className="no-results">No Startups found</p>
            )}
        </ul>
    </section>

      <SanityLive />
    </>
  );
}
