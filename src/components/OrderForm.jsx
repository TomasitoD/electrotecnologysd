import { useState } from 'react'
import { Send } from 'lucide-react'
import { WHATSAPP_BASE } from '../lib/constants'

/**
 * Formulario "Comprar ahora" — arma un mensaje con los datos del
 * comprador y el producto de interés, y lo abre directo en WhatsApp.
 * Sin backend ni servicio de email: mismo patrón que el resto del sitio.
 */
export default function OrderForm({ productName, categoryName }) {
  const [form, setForm] = useState({ nombre: '', telefono: '', horario: '', notas: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const lineas = [
      `Hola, quiero comprar: ${productName}`,
      `Categoría: ${categoryName}`,
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
    ]
    if (form.horario.trim()) lineas.push(`Día/horario preferido: ${form.horario}`)
    if (form.notas.trim()) lineas.push(`Notas: ${form.notas}`)

    const mensaje = encodeURIComponent(lineas.join('\n'))
    window.open(`${WHATSAPP_BASE}?text=${mensaje}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card mt-6 space-y-4 p-6 sm:p-7">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-gray-300">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-electric-500/60 focus:outline-none"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium text-gray-300">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          value={form.telefono}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-electric-500/60 focus:outline-none"
          placeholder="809-000-0000"
        />
      </div>

      <div>
        <label htmlFor="horario" className="mb-1.5 block text-sm font-medium text-gray-300">
          Día u horario preferido <span className="text-gray-500">(opcional)</span>
        </label>
        <input
          id="horario"
          name="horario"
          type="text"
          value={form.horario}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-electric-500/60 focus:outline-none"
          placeholder="Ej. sábado en la tarde"
        />
      </div>

      <div>
        <label htmlFor="notas" className="mb-1.5 block text-sm font-medium text-gray-300">
          Notas adicionales <span className="text-gray-500">(opcional)</span>
        </label>
        <textarea
          id="notas"
          name="notas"
          rows={3}
          value={form.notas}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-electric-500/60 focus:outline-none"
          placeholder="Color, capacidad, dirección de entrega, etc."
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        <Send className="h-4 w-4" />
        Enviar solicitud por WhatsApp
      </button>
    </form>
  )
}
