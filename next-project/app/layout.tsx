import './globals.css'
import Navbar from './components/NavBar'
import MyProfilePic from './components/MyProfilePic'
import { Metadata } from 'next'



export const metadata: Metadata= {
  title: "Suntoh's blog",
  description: 'Created by Suntoh using Next.js 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-red-200 text-gray-100 drop-shadow-lg">
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl
        prose-red dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}