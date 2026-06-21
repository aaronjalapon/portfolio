import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import InteractiveHeroBg from './InteractiveHeroBg'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-[-1]">
        <InteractiveHeroBg />
      </div>
      
      {/* Content */}
      <Header />
      <main className="flex-grow z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
