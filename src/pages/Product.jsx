import Layout from '../components/Layout'
import { useParams, Link } from 'react-router-dom'
import { products, whatsappOrderLink } from '../data/store'
import ProductCard from '../components/ProductCard'

export default function Product(){
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const related = products.filter(p => p.category === product?.category && p.id !== id)

  if (!product) return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-slate-400">Product not found.</div>
      </section>
    </Layout>
  )

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 bg-slate-900" style={{backgroundImage:`url(${product.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-slate-400 mt-2">{product.description}</p>
            <div className="mt-4 text-red-400 text-xl font-semibold">{product.price}</div>
            <div className="mt-6">
              <div className="font-semibold mb-2">Specifications</div>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                {product.specs?.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href={whatsappOrderLink(`Hi LJ, I'd like to order ${product.title} (ID: ${product.id}).`)} target="_blank" className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500">Order on WhatsApp</a>
              <Link to={`/category/${product.category}`} className="px-5 py-3 rounded-lg border border-slate-700 hover:border-slate-600">Back to Category</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Related Products</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {related.map(p => <ProductCard key={p.id} product={p}/>) }
        </div>
      </section>
    </Layout>
  )
}
