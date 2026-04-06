export default function Outreach() {
  return (
    <div className="p-4 md:p-8 max-w-4xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          📩 Outreach Templates
        </h1>
        <p className="text-gray-600">3 segments × 2 languages. Personalized hooks per Tier 1 prospect.</p>
        <p className="text-sm text-gray-400 mt-1">For WhatsApp DM or Instagram DM. Alex sends personally — human touch for first contact.</p>
      </header>

      {/* Usage Notes */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-sm">
        <h3 className="font-bold text-yellow-800 mb-2">📌 Usage Notes</h3>
        <ul className="space-y-1 text-yellow-700">
          <li>• Always personalize the first line — reference their work, Instagram, reviews</li>
          <li>• Send Tuesday-Thursday, 10am-12pm</li>
          <li>• Follow up once after 3-4 days. One follow-up, never two.</li>
          <li>• CTA is always &quot;can I show you&quot; — a conversation, not a click</li>
        </ul>
      </div>

      {/* Template 1: Hair */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💇</span>
          <h2 className="text-2xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Hair &amp; Beauty</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">🇪🇸 Spanish</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hola [nombre] 👋

He estado mirando vuestro perfil y me ha encantado el trabajo que hacéis.

Una pregunta rápida: ¿cuántos mensajes de WhatsApp se os quedan sin responder cuando estáis con un cliente? Porque esos mensajes son citas que se van a otro sitio.

Hemos creado Pepe, un asistente de IA que se conecta a vuestro WhatsApp y Google Calendar. Cuando un cliente escribe, Pepe le responde al momento, mira tu agenda, y reserva la cita. El cliente cree que está hablando contigo o con tu recepcionista.

Funciona 24/7. Sin apps nuevas. Sin configuración técnica. Solo WhatsApp, como ya lo usáis.

¿Os puedo enseñar cómo funciona en 5 minutos? Sin compromiso ninguno.

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">🇬🇧 English</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hey [name] 👋

Love your work — came across your profile and had to reach out.

Quick question: how many WhatsApp messages go unanswered while you're with a client? Because each one of those is a booking walking out the door.

We built Pepe — an AI assistant that connects to your WhatsApp and Google Calendar. When a client messages, Pepe responds instantly, checks your schedule, and books the appointment. Your client thinks they're talking to you or your receptionist.

Works 24/7. No new apps. No technical setup. Just WhatsApp, the way you already use it.

Can I show you how it works? 5 minutes, no strings.

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          {/* Personalization hooks */}
          <div className="bg-[#E8F5E0] rounded-xl p-4">
            <h4 className="font-bold text-sm text-[#2D2D2D] mb-2">Personalization hooks:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>ATICA Salón:</strong> &quot;He visto que usáis WhatsApp, Instagram y Treatwell para citas. Son 4 canales que gestionar. ¿Y si uno solo lo hiciera todo?&quot;</li>
              <li><strong>Anthony Llobet (5 locations):</strong> &quot;5 locales, un solo teléfono de contacto. ¿Qué pasa cuando suena y no hay nadie? Pepe puede dar a cada local su propio asistente.&quot;</li>
              <li><strong>Atmosphere Hair (tourists):</strong> &quot;Los turistas os encuentran en Tripadvisor y os escriben a las 11 de la noche. Pepe les responde en su idioma y reserva.&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Template 2: Coaches */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🏋️</span>
          <h2 className="text-2xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Coaches &amp; Trainers</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">🇪🇸 Spanish</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hola [nombre] 👋

He visto que ofreces [entrenamiento personal / coaching / nutrición] en Barcelona. Trabajo impresionante.

¿Cómo gestionas las reservas de sesiones? Porque conozco a muchos entrenadores que pierden 1-2 horas al día entre mensajes de WhatsApp, recordatorios y seguimientos con clientes que desaparecen.

Hemos creado Pepe, un asistente de IA que se encarga de todo eso. Se conecta a tu WhatsApp y tu calendario. Cuando un cliente escribe para reservar, Pepe gestiona la conversación, comprueba tu disponibilidad, y crea la cita.

Y lo mejor: cuando un cliente lleva semanas sin reservar, Pepe le escribe un mensaje de seguimiento automático. Sin que tú tengas que pensar en ello.

Desde 49€/mes. ¿Te interesa verlo en acción?

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">🇬🇧 English</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hey [name] 👋

Saw your [training / coaching / nutrition] work — really solid stuff.

How do you handle session bookings right now? Most trainers I talk to spend 1-2 hours a day on WhatsApp messages, reminders, and chasing clients who go quiet.

We built Pepe — an AI assistant on WhatsApp that handles all of that. It connects to your calendar, manages booking conversations, checks your availability, and creates appointments automatically.

The best part: when a client hasn't booked in a few weeks, Pepe sends a friendly follow-up. No manual tracking. No spreadsheets. Clients stay engaged.

Starts at €49/mo. Want to see it work?

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          <div className="bg-[#E8F5E0] rounded-xl p-4">
            <h4 className="font-bold text-sm text-[#2D2D2D] mb-2">Personalization hooks:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Ebylife (trainer network):</strong> &quot;Coordinar entrenadores, ubicaciones y horarios es una pesadilla logística. Pepe puede gestionar la agenda de cada entrenador de forma independiente.&quot;</li>
              <li><strong>Dorota Rozko (3 services):</strong> &quot;Entrenamiento, yoga, nutrición. Tres servicios distintos que gestionar. Pepe sabe cuál reservar.&quot;</li>
              <li><strong>Bite Size Pieces ($295/mo clients):</strong> &quot;At $295/mo per client, every missed check-in is real revenue at risk. Pepe keeps engagement high so clients renew.&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Template 3: Lawyers */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">⚖️</span>
          <h2 className="text-2xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Lawyers &amp; Professional Services</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">🇪🇸 Spanish</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hola [nombre], buenas tardes.

Os contacto desde Pepe. Trabajamos con abogados y consultores que reciben consultas por WhatsApp pero no siempre pueden responder al momento (reuniones, juzgados, sesiones con clientes).

Lo que hemos desarrollado es un asistente de IA que gestiona vuestro WhatsApp profesional. Cuando un potencial cliente escribe, Pepe le responde de forma profesional, le hace las preguntas iniciales (tipo de caso, urgencia, disponibilidad), y reserva la consulta directamente en vuestra agenda.

Vosotros volvéis de una reunión y en vez de 15 mensajes pendientes, tenéis consultas cualificadas y reservadas.

Sin configuración técnica. Se conecta a vuestro WhatsApp Business y Google Calendar. Estáis operativos en 48 horas.

¿Os interesa que os haga una demo de 5 minutos?

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">🇬🇧 English</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
{`Hi [name],

Reaching out from Pepe. We work with lawyers and consultants who receive client inquiries on WhatsApp but can't always respond immediately — court, meetings, client sessions.

We've built an AI assistant that manages your professional WhatsApp. When a potential client reaches out, Pepe responds professionally, asks the right qualifying questions (case type, urgency, availability), and books the consultation directly on your calendar.

You come back from court and instead of 15 unread messages, you have qualified, booked consultations.

No technical setup. Connects to your WhatsApp Business and Google Calendar. You're live in 48 hours.

Would a 5-minute demo be useful?

Alex — Pepe (meetpepe.com)`}
            </div>
          </div>

          <div className="bg-[#E8F5E0] rounded-xl p-4">
            <h4 className="font-bold text-sm text-[#2D2D2D] mb-2">Personalization hooks:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Piñera del Olmo:</strong> &quot;He visto que ya usáis WhatsApp para contacto (+34 675...). ¿Quién responde cuando estáis en el juzgado?&quot;</li>
              <li><strong>Independent Lawyers Marbella:</strong> &quot;Vuestros clientes expats esperan respuestas en inglés a cualquier hora. Pepe responde en su idioma y cualifica.&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* This Week Priority */}
      <div className="bg-[#2D2D2D] text-white rounded-2xl p-5 md:p-8">
        <h2 className="text-xl font-bold mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>This Week — Tier 1 Prospects</h2>
        <ol className="space-y-3 text-white/90 text-sm">
          <li><strong>1. ATICA Salón</strong> — Madrid, WhatsApp confirmed, 4 booking channels to consolidate</li>
          <li><strong>2. 32Dental</strong> — Madrid, WhatsApp confirmed, overflow use case</li>
          <li><strong>3. Ebylife</strong> — Barcelona, WhatsApp confirmed, trainer coordination pain</li>
          <li><strong>4. Piñera del Olmo</strong> — Barcelona, WhatsApp confirmed, lawyers in court</li>
          <li><strong>5. CG Weddings</strong> — Malaga, €3K/booking, high-value pre-booking conversations</li>
        </ol>
      </div>
    </div>
  )
}
