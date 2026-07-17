import { Truck, Banknote, ShieldCheck, Store } from 'lucide-react'

const ITEMS = [
  { icon: Truck, text: 'Envíos a todo el país' },
  { icon: Banknote, text: 'Pago contra entrega' },
  { icon: ShieldCheck, text: 'Garantía en todos los productos' },
  { icon: Store, text: 'Tienda física en SDE' },
]

export default function TrustBar() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-navy-800/60 backdrop-blur-sm">
      <div className="section-container grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-4 sm:gap-6">
        {ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} data-reveal className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-electric-500/10 text-electric-400">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-xs font-medium leading-tight text-gray-200 sm:text-sm">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
