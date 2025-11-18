import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappOrderLink } from '../data/store'

export default function ProductCard({ product }){
  return (
    <div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] bg-slate-800" style={{backgroundImage:`url(${product.image})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/product/${product.id}`} className="font-semibold text-slate-100 group-hover:text-white">{product.title}</Link>
        <p className="text-sm text-slate-400 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-3 text-red-400 font-semibold">{product.price}</div>
        <div className="mt-auto pt-4">
          <a href={whatsappOrderLink(`Hi LJ, I'm interested in ${product.title} (ID: ${product.id}).`)} target="_blank" className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm">
            <MessageCircle className="w-4 h-4"/> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
