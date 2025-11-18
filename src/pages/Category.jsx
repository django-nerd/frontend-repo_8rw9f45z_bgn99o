import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { categories, products } from '../data/store'

export default function Category(){
  const { slug } = useParams()
  const cat = categories.find(c => c.slug === slug)
  const items = products.filter(p => p.category === slug)

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{cat ? cat.name : 'Category'}</h1>
          <p className="text-slate-400 mt-1">Explore our selection of {cat ? cat.name.toLowerCase() : 'products'}.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.length ? items.map(p => <ProductCard key={p.id} product={p}/>) : (
            <div className="text-slate-400">No products yet. Check back soon.</div>
          )}
        </div>
      </section>
    </Layout>
  )
}
