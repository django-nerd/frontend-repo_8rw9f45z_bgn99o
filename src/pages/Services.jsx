import Layout from '../components/Layout'
import { Wrench, Radio, Cable, Battery, Gauge } from 'lucide-react'

const services = [
  { icon: Wrench, title: 'Installation', desc: 'Fast and professional accessory installation with warranty.' },
  { icon: Radio, title: 'Stereo Fitting', desc: 'Android players, speakers, amp tuning and integration.' },
  { icon: Cable, title: 'Wiring', desc: 'Clean wiring, relay kits, fog lamps, reverse camera.' },
  { icon: Battery, title: 'Battery Replacement', desc: 'Home/Shop delivery, testing and replacement.' },
  { icon: Gauge, title: 'Interior Upgrades', desc: 'Ambient lighting, seat covers, floor mats and more.' },
]

export default function Services(){
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">What We Offer</h1>
          <p className="text-slate-400 mt-1">Premium services to enhance your car’s look and comfort.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <s.icon className="w-8 h-8 text-red-500"/>
              <div className="mt-3 font-semibold">{s.title}</div>
              <p className="text-slate-400 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
