import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, Phone, MessageCircleMore, Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/category/car-accessories', label: 'Car Accessories' },
  { to: '/category/mobile-holders', label: 'Mobile Holders' },
  { to: '/category/car-perfumes', label: 'Car Perfumes' },
  { to: '/category/stereos-android', label: 'Stereos & Android Players' },
  { to: '/category/horns-wiring', label: 'Horns & Wiring Kits' },
  { to: '/category/led-lights', label: 'LED & Glow Kits' },
  { to: '/category/body-kits', label: 'Body Kits' },
  { to: '/category/battery-sales', label: 'Battery Sales' },
]

export default function Layout({ children }) {
  const [query, setQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const onSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/search?q=${encodeURIComponent(query)}`)
    setMobileOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 rounded-md hover:bg-slate-800" onClick={() => setMobileOpen(v=>!v)}>
                <Menu className="w-6 h-6"/>
              </button>
              <Link to="/" className="font-extrabold tracking-tight text-xl sm:text-2xl">
                <span className="text-white">LJ</span>
                <span className="text-red-500"> Car</span>
                <span className="text-slate-300"> Accessories</span>
              </Link>
            </div>

            {/* search */}
            <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search accessories, brands, categories..." className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"/>
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400"/>
              </div>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm">Search</button>
            </form>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+919047851160" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                <Phone className="w-5 h-5"/> +91 90478 51160
              </a>
              <a href="https://wa.me/919047851160" target="_blank" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg">
                <MessageCircleMore className="w-5 h-5"/> WhatsApp
              </a>
              <button className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <ShoppingCart className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>
        {/* mobile search + nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/95">
            <div className="p-4 space-y-3">
              <form onSubmit={onSearch} className="flex items-center gap-2">
                <div className="relative w-full">
                  <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search accessories..." className="w-full bg-slate-900/80 border border-slate-800 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"/>
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400"/>
                </div>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm">Go</button>
              </form>
              <nav className="grid grid-cols-2 gap-2">
                {navItems.map(n => (
                  <NavLink key={n.to} to={n.to} onClick={()=>setMobileOpen(false)} className={({isActive})=>`text-sm px-3 py-2 rounded-md border border-slate-800 hover:bg-slate-900 ${isActive? 'bg-slate-900 text-white':'text-slate-300'}`}>{n.label}</NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Desktop nav bar */}
      <div className="hidden lg:block border-b border-slate-800 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <nav className="flex items-center gap-4 py-3">
            {navItems.map(n => (
              <NavLink key={n.to} to={n.to} className={({isActive})=>`text-sm px-3 py-1.5 rounded-md hover:bg-slate-900 ${isActive? 'bg-slate-900 text-white':'text-slate-300'}`}>{n.label}</NavLink>
            ))}
          </nav>
        </div>
      </div>

      <main>{children}</main>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919047851160" target="_blank" className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
        <MessageCircleMore className="w-5 h-5"/> Chat / Order
      </a>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold">LJ Car Accessories</div>
            <p className="text-slate-400 mt-3 text-sm">Kovalam Bypass, Opp. Puthenpally, SM Lock Rd, Poonthura, Thiruvananthapuram, Kerala</p>
            <p className="text-slate-400 mt-2 text-sm">Open Daily • 9:00 AM – 11:00 PM</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <div className="grid gap-2 text-slate-300 text-sm">
              <Link to="/">Home</Link>
              <Link to="/services">What We Offer</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact & Location</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Categories</div>
            <div className="grid gap-2 text-slate-300 text-sm">
              {navItems.slice(0,6).map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Connect</div>
            <div className="grid gap-2 text-slate-300 text-sm">
              <a href="tel:+919047851160">Phone: +91 90478 51160</a>
              <a href="https://wa.me/919047851160" target="_blank">WhatsApp: +91 90478 51160</a>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800"></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800"></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">© 2025 LJ Car Accessories • Designed by Muhammed Misab</div>
      </footer>
    </div>
  )
}
