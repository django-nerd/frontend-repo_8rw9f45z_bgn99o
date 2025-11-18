import { Link } from 'react-router-dom'
import { categories } from '../data/store'

export default function CategoryGrid(){
  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Featured Categories</h2>
        <Link to="/" className="text-sm text-red-400 hover:text-red-300">View all</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map(cat => (
          <Link key={cat.slug} to={`/category/${cat.slug}`} className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
            <div className="aspect-[4/3] bg-gradient-to-b from-slate-800 to-slate-950" style={{backgroundImage:`url(${cat.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"/>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="text-white font-medium">{cat.name}</div>
              <span className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition">Shop →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
