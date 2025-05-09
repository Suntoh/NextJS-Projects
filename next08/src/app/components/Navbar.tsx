import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-red-400 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="max-w-xl mx-auto sm:px-4 flex justify-between">
                <h1 className="text-3xl font-bold mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Next Todos</Link>
                </h1>

                {/* prefetchเป็นfalse บังคับให้hard navigate ไม่ soft->cache */}
                <Link prefetch={false} 
                href="/add" className="text-2xl text-white/90 no-underline hover:text-white">Add</Link>

            </div>
        </nav>
    )
}