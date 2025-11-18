import { products } from '../data/store'
import ProductCard from './ProductCard'

export default function ProductCarousel(){
  // Simple horizontal scroll list
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <div className="text-sm text-slate-400">Swipe →</div>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
        {products.map(p => (
          <div key={p.id} className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] snap-start">
            <ProductCard product={p}/>
          </div>
        ))}
      </div>
    </section>
  )
}
