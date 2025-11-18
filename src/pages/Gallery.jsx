import Layout from '../components/Layout'
import { gallery } from '../data/store'

export default function Gallery(){
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="text-slate-400 mt-1">Before/after, installations and interiors.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <div className="aspect-[4/3]" style={{backgroundImage:`url(${src})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
