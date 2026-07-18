import { useState } from 'react'
import { Send, ChevronDown } from 'lucide-react'
import { WHATSAPP_BASE } from '../lib/constants'

const inputClass =
  'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-electric-500/60 focus:outline-none'

/**
 * Formulario "Comprar ahora" — arma un mensaje con los datos del
 * comprador y el producto de interés, y lo abre directo en WhatsApp.
 * Sin backend ni servicio de email: mismo patrón que el resto del sitio.
 */
export default function OrderForm({ productName, categoryName }) {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    metodoPago: '',
    direccion: '',
    horario: '',
    notas: '',
  })

  const esContraEntrega = form.metodoPago === 'Pago contra entrega'

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
    if (form.metodoPago) lineas.push(`Método de pago: ${form.metodoPago}`)
    if (esContraEntrega && form.direccion.trim()) {
      lineas.push(`Dirección de entrega: ${form.direccion}`)
    }
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
          className={inputClass}
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
          className={inputClass}
          placeholder="809-000-0000"
        />
      </div>

      <div>
        <label htmlFor="metodoPago" className="mb-1.5 block text-sm font-medium text-gray-300">
          Método de pago <span className="text-gray-500">(opcional)</span>
        </label>
        <div className="relative">
          <select
            id="metodoPago"
            name="metodoPago"
            value={form.metodoPago}
            onChange={handleChange}
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value="">Selecciona una opción</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Pago contra entrega">Pago contra entrega</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {esContraEntrega && (
        <div>
          <label htmlFor="direccion" className="mb-1.5 block text-sm font-medium text-gray-300">
            Dirección de entrega
          </label>
          <textarea
            id="direccion"
            name="direccion"
            rows={2}
            required
            value={form.direccion}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Calle, número, sector, referencia"
          />
          <p className="mt-1.5 text-xs text-gray-500">
            La necesitamos para coordinar la entrega y el cobro en efectivo.
          </p>
        </div>
      )}

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
          className={inputClass}
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
          className={`${inputClass} resize-none`}
          placeholder="Color, capacidad, etc."
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        <Send className="h-4 w-4" />
        Enviar solicitud por WhatsApp
      </button>
    </form>
  )
}
