import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import ProductCarousel from '../components/ProductCarousel'
import { reviews } from '../data/store'

export default function Home(){
  return (
    <Layout>
      <Hero/>
      <CategoryGrid/>
      <ProductCarousel/>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-semibold mb-6">What Customers Say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center gap-2 text-yellow-400">
                {Array.from({length:r.rating}).map((_,i)=> <span key={i}>★</span>)}
                {Array.from({length:5-r.rating}).map((_,i)=> <span key={i} className="text-slate-600">★</span>)}
              </div>
              <div className="mt-2 font-semibold">{r.name}</div>
              <p className="text-slate-400 text-sm mt-1">“{r.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
