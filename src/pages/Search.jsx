import Layout from '../components/Layout'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/store'
import ProductCard from '../components/ProductCard'

export default function Search(){
  const [params] = useSearchParams()
  const q = (params.get('q')||'').toLowerCase()
  const results = products.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Search</h1>
          <p className="text-slate-400 mt-1">Showing results for “{q}”.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {results.length ? results.map(p => <ProductCard key={p.id} product={p}/>) : (
            <div className="text-slate-400">No results found.</div>
          )}
        </div>
      </section>
    </Layout>
  )
}
