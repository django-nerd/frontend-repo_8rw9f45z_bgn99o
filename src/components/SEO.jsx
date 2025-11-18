export default function SEO({ title = 'LJ Car Accessories – Premium Car Accessories in Kerala', description = 'Shop premium car accessories, stereos, LED lights, wiring kits and more. Fast installation at Poonthura, Thiruvananthapuram. Open daily 9 AM – 11 PM.', keywords = 'car accessories kerala, poonthura, thiruvananthapuram, android stereo, car perfume, led lights, horns, mobile holder' }){
  document.title = title
  const metaDesc = document.querySelector('meta[name="description"]') || document.head.appendChild(document.createElement('meta'))
  metaDesc.setAttribute('name','description')
  metaDesc.setAttribute('content', description)
  const metaKeys = document.querySelector('meta[name="keywords"]') || document.head.appendChild(document.createElement('meta'))
  metaKeys.setAttribute('name','keywords')
  metaKeys.setAttribute('content', keywords)
  return null
}
