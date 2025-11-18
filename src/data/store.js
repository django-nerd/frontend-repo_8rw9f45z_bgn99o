// Data for LJ Car Accessories – placeholders you can replace later
export const WHATSAPP_NUMBER = "+919047851160";

export const categories = [
  { slug: "car-accessories", name: "Car Accessories", image: "/images/categories/accessories.jpg" },
  { slug: "mobile-holders", name: "Mobile Holders", image: "/images/categories/mobile-holder.jpg" },
  { slug: "car-perfumes", name: "Car Perfumes", image: "/images/categories/perfume.jpg" },
  { slug: "stereos-android", name: "Stereos & Android Players", image: "/images/categories/stereo.jpg" },
  { slug: "horns-wiring", name: "Horns & Wiring Kits", image: "/images/categories/horn.jpg" },
  { slug: "led-lights", name: "LED Lights & Interior Glow Kits", image: "/images/categories/led.jpg" },
  { slug: "body-kits", name: "Car Body Kits", image: "/images/categories/bodykit.jpg" },
  { slug: "battery-sales", name: "Battery Sales", image: "/images/categories/battery.jpg" },
];

export const products = [
  {
    id: "mh01",
    title: "Magnetic Dashboard Mobile Holder",
    description: "Strong magnet grip, 360° rotation, silicone base.",
    price: "₹499 – ₹899",
    category: "mobile-holders",
    image: "/images/products/mobile-holder-1.jpg",
    specs: ["Aluminum alloy", "Silicone anti-slip", "Fits all phones"],
  },
  {
    id: "cp01",
    title: "Premium Car Perfume – Ocean Breeze",
    description: "Long lasting aroma for 60+ days.",
    price: "₹299 – ₹699",
    category: "car-perfumes",
    image: "/images/products/perfume-1.jpg",
    specs: ["Leak-proof", "Clip-on vent", "Essential oil blend"],
  },
  {
    id: "st01",
    title: "Android Stereo 9\" Touch – CarPlay/Android Auto",
    description: "HD display, BT, GPS, steering control support.",
    price: "₹8,999 – ₹18,999",
    category: "stereos-android",
    image: "/images/products/stereo-1.jpg",
    specs: ["2GB/32GB", "1080p", "Dual USB"],
  },
  {
    id: "ld01",
    title: "LED Interior Ambient Glow Kit",
    description: "Multi-color RGB with remote and app control.",
    price: "₹1,499 – ₹3,499",
    category: "led-lights",
    image: "/images/products/led-1.jpg",
    specs: ["12V", "Water-resistant", "Music sync"],
  },
  {
    id: "hk01",
    title: "Dual Tone Horn Kit + Wiring Relay",
    description: "Loud, clear, weatherproof horns with relay.",
    price: "₹1,299 – ₹2,499",
    category: "horns-wiring",
    image: "/images/products/horn-1.jpg",
    specs: ["12V", "IP65", "Includes wiring"],
  },
  {
    id: "bk01",
    title: "Universal Sport Body Kit (Front Lip)",
    description: "Rugged look, flexible PU, matte finish.",
    price: "₹2,499 – ₹4,999",
    category: "body-kits",
    image: "/images/products/bodykit-1.jpg",
    specs: ["PU", "Trim-to-fit", "Includes tape"],
  },
  {
    id: "bt01",
    title: "Amaron Car Battery – 45Ah",
    description: "Long-life warranty and doorstep replacement.",
    price: "₹5,499 – ₹6,999",
    category: "battery-sales",
    image: "/images/products/battery-1.jpg",
    specs: ["45Ah", "Maintenance-free", "Warranty included"],
  },
  {
    id: "ca01",
    title: "All-Weather 3D Floor Mats",
    description: "Anti-slip, easy to clean, custom fit look.",
    price: "₹1,999 – ₹4,999",
    category: "car-accessories",
    image: "/images/products/mats-1.jpg",
    specs: ["Odorless", "Waterproof", "3D texture"],
  },
];

export const gallery = [
  "/images/gallery/01.jpg",
  "/images/gallery/02.jpg",
  "/images/gallery/03.jpg",
  "/images/gallery/04.jpg",
  "/images/gallery/05.jpg",
  "/images/gallery/06.jpg",
  "/images/gallery/07.jpg",
  "/images/gallery/08.jpg",
  "/images/gallery/09.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
];

export const reviews = [
  { name: "Jithin K.", rating: 5, quote: "Quick installation and genuine accessories!" },
  { name: "Aleena M.", rating: 5, quote: "Stereo fitting was perfect. Highly recommend." },
  { name: "Rahul S.", rating: 4, quote: "Great prices and friendly service." },
];

export function whatsappOrderLink(text) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
