import { MessageCircle, ShoppingBag, PackageCheck, ArrowRight } from 'lucide-react'
import { WA } from '../../lib/constants'

const STEPS = [
  { icon: MessageCircle, title: 'Escríbenos por WhatsApp', number: '1' },
  { icon: ShoppingBag, title: 'Elige tu producto', number: '2' },
  { icon: PackageCheck, title: 'Recíbelo en casa', number: '3' },
]

export default function HowToBuy() {
  return (
    <section id="entrega" className="relative py-20 sm:py-28">
      <div className="section-container">
        <div data-reveal className="text-center">
          <p className="eyebrow mb-4 justify-center">Proceso</p>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Comprar es fácil
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.title} data-reveal className="relative flex flex-1 items-start gap-4 sm:flex-col sm:items-center sm:text-center">
              {/* Línea conectora — vertical en mobile, horizontal en desktop */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-7 top-16 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-electric-500/50 to-transparent
                             sm:left-auto sm:top-7 sm:h-px sm:w-full sm:translate-x-1/2 sm:bg-gradient-to-r"
                />
              )}
              <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-electric-400 ring-1 ring-electric-500/30">
                <step.icon className="h-6 w-6" strokeWidth={1.8} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-electric-500 text-[10px] font-bold text-navy-950">
                  {step.number}
                </span>
              </span>
              <h3 className="pt-3 font-display text-base font-semibold text-white sm:pt-0 sm:text-lg">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href={WA.comprar} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Empezar ahora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
