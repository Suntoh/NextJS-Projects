import { options } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import UserProfile from "./components/UserProfile"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <div>
      {session ? (
        <UserProfile user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">Not logged In</h1>
      )}
    </div>
  )
}