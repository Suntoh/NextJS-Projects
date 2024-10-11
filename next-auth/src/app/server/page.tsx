import { options } from "../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import UserProfile from "../components/UserProfile"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <section className="flex flex-col gap-4">
            <UserProfile user={session?.user} pagetype={"Server"} />
        </section>
    )

}