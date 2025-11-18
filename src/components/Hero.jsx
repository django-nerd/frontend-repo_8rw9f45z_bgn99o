import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Premium Car Accessories
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Kerala’s trusted auto shop for quality upgrades and fast installation.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/category/car-accessories" className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium">Shop Accessories</Link>
            <a href="#featured" className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-600 text-slate-200">Browse</a>
          </div>
        </div>
      </div>
    </section>
  )
}
