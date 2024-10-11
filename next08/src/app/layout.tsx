import './globals.css'
import Navbar from "./components/Navbar"

export const metadata = {
  title: 'Next Todos',
  description: 'Created for practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-red-200">
        <Navbar />
        <main className="mx-auto max-w-xl p-4 bg-stone-200 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}