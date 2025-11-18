import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-bold">Contact & Location</h1>
            <div className="mt-4 space-y-3 text-slate-300">
              <div>Phone: <a className="text-white" href="tel:+919047851160">+91 90478 51160</a></div>
              <div>WhatsApp: <a className="text-emerald-400" href="https://wa.me/919047851160" target="_blank">+91 90478 51160</a></div>
              <div>Address: LJ Car Accessories, Kovalam Bypass, Opp. Puthenpally, SM Lock Rd, Poonthura, Kerala</div>
              <div>Hours: Open Daily • 9:00 AM – 11:00 PM</div>
            </div>
            <div className="mt-6">
              <a href="https://wa.me/919047851160" target="_blank" className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500">Message on WhatsApp</a>
            </div>
          </div>
          <div>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center text-slate-400">
              Google Map embed goes here
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
