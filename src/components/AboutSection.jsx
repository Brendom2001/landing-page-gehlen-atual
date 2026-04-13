import { motion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

const highlights = [
  { label: 'Odontologia Integrada', detail: 'Cuidado completo e humanizado' },
  { label: 'Atendimento premium', detail: 'Personalizado e exclusivo' },
  { label: 'Tecnologia avançada', detail: 'Materiais de qualidade' },
  { label: 'Ambiente aconchegante', detail: 'Sapiranga, RS · Centro' },
]

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-brand-bg py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-28 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easing }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md">
              {/* Photo */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-warm-xl">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be290a0c0b8?auto=format&fit=crop&w=800&q=80"
                  alt="Consultório da Dra. Laura Gehlen — Odontologia Integrada em Sapiranga"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-contrast/15 to-transparent" />
              </div>

              {/* Offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-detail/20 rounded-2xl -z-10 pointer-events-none" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 16 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easing, delay: 0.35 }}
                className="absolute -right-4 md:-right-6 top-8 bg-[#EAEAE5] border border-brand-section px-5 py-4 shadow-warm-md rounded-xl"
              >
                <p className="font-playfair text-base text-brand-title italic leading-tight">
                  +5.049
                </p>
                <p className="font-dm text-xs text-brand-contrast tracking-wide mt-0.5">
                  avaliações Google
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <p className="font-dm text-xs text-brand-contrast font-semibold tracking-[0.35em] uppercase mb-4">
              Sobre nós
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-title leading-tight mb-5">
              Dra. Laura Gehlen
              <br />
              <em className="font-light text-brand-cta">Odontologia Integrada</em>
            </h2>
            <div className="w-12 h-px bg-brand-cta/40 mb-8" />

            <div className="space-y-5 font-dm text-sm text-brand-body/90 leading-relaxed mb-10 font-light">
              <p>
                Nossa missão vai além da técnica. Queremos que cada encontro
                seja leve, humano e memorável.
              </p>

              {/* Visual break */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-brand-cta/40" />
                <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
                <div className="w-6 h-px bg-brand-cta/40" />
              </div>

              <p>
                Cuidar com verdade é o que nos move. Transformar com
                sensibilidade é o que nos define.
              </p>

              {/* Visual break */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-brand-cta/40" />
                <div className="w-1 h-1 rounded-full bg-brand-cta/50" />
                <div className="w-6 h-px bg-brand-cta/40" />
              </div>

              <p>
                Consultório moderno no centro de Sapiranga, RS — ambiente
                aconchegante do primeiro contato ao resultado final.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {highlights.map(({ label, detail }) => (
                <div key={label} className="border-t border-brand-section/60 pt-4">
                  <p className="font-dm text-xs font-semibold text-brand-title tracking-wide">
                    {label}
                  </p>
                  <p className="font-dm text-xs text-brand-body/90 mt-1">{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
