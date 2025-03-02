import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Persian Carpets',
  description: 'Authentic Persian Carpets Collection',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-16">
              <main className="flex-grow">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
