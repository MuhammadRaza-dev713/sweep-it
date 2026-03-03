import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Sweep-It — All-in-One Job Management',
  description: 'Organise, track, and grow your business with Sweep-It',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto container-wide">
            {children}

            <div className="">
          <Footer />
            
        </div>

          </div>
        </main>

        
        
      </body>
    </html>
  )
}
