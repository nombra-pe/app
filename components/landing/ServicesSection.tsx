import Card from "./Card";
import SectionHeader from "./SectionHeader";
import Section from "./Sections";

export default function ServicesSection() {
  return (
    <Section id="servicios" background="neutral">
      <SectionHeader
        badge="Servicios"
        title="Nuestros Servicios de Naming"
        description="Aprovecha nuestras herramientas de IA que impulsan el éxito de tu marca."
      />

      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <Card variant="highlighted">
          <div className="relative mb-10">
            <div className="w-14 h-14 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <span className="absolute left-16 top-1.5 w-6 h-6 rounded-full bg-white ring-1 ring-black/5"></span>
            <span className="absolute left-8 top-16 w-4 h-4 rounded-full bg-white ring-1 ring-black/5"></span>
          </div>
          <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Consultoría en Naming
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Obtén orientación experta para crear nombres que impulsen el
            crecimiento de tu negocio.
          </p>
        </Card>

        <Card variant="elevated" className="lg:row-span-2">
          <button className="absolute right-6 top-6 text-sm font-medium text-gray-800 bg-white ring-black/5 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_3px_12px_rgba(0,0,0,0.15)] font-nunito">
            Generate
          </button>

          <div className="bg-neutral-50 border-gray-200/60 border rounded-2xl mt-14 pt-4 pr-4 pb-4 pl-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
            <div className="space-y-2 text-sm text-gray-700 font-nunito">
              <div className="ring-1 ring-black/5 bg-white rounded-lg pt-3 pr-4 pb-3 pl-4 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                Continue writing
              </div>
              <div className="bg-white rounded-lg px-4 py-3 ring-1 ring-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                Fix spelling
              </div>
              <div className="bg-white rounded-lg px-4 py-3 ring-1 ring-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                Explain in detail
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-medium text-gray-900 tracking-tight mt-8 mb-2 font-nunito">
            Generación de Nombres
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Proporcionamos soluciones perfectas de creación de nombres que
            generen opciones cautivadoras y de alta calidad alineadas con la voz
            de tu marca.
          </p>
        </Card>

        <Card variant="highlighted" className="lg:row-span-2 overflow-hidden">
          <div className="absolute left-6 top-6 w-9 h-9 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-gray-800 w-4.5 h-4.5"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx="4" cy="20" r="2"></circle>
            </svg>
          </div>

          <div className="absolute left-16 top-12 flex gap-1.5">
            {[1, 2, 3].map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-gray-300"></span>
            ))}
          </div>

          <div className="absolute left-16 top-16 bg-white rounded-xl px-4 py-3 text-sm ring-1 ring-black/5 flex items-center gap-3 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
            <span className="text-gray-700 font-nunito">
              Set up a Zoom call with Emily at 10:00 AM on Wednesday.
            </span>
            <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="mt-28 mb-10">
            <div className="w-full h-14 bg-white rounded-full ring-1 ring-black/5 flex items-center px-5 text-gray-400 font-nunito">
              Type a message
            </div>
          </div>

          <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Validación y Protección
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Desarrollamos soluciones de validación con tecnologías avanzadas
            para verificar disponibilidad legal y proteger tu marca globalmente.
          </p>
        </Card>

        <Card variant="highlighted">
          <div className="grid grid-cols-4 gap-3 mb-8">
            <div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-900"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </div>

            <div className="col-span-2 h-20 bg-white rounded-2xl ring-1 ring-black/5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-900"
              >
                <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
              </svg>
            </div>

            <div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-900"
              >
                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Flujos Automatizados
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Automatiza el proceso de naming para agilizar tareas, aumentar
            eficiencia y ahorrar tiempo valioso.
          </p>
        </Card>
      </div>
    </Section>
  );
}
