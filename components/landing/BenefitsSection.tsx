import { transform } from "zod";
import SectionHeader from "./SectionHeader";
import Section from "./Sections";
import Card from "./Card";

export default function BenefitsSection() {
  return (
    <Section id="beneficios" background="light">
      <SectionHeader
        badge="Beneficios"
        title="Por qué elegirnos"
        description="Nuestro enfoque se centra en crear nombres únicos y memorables que conecten con tu audiencia objetivo."
      />

      <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card variant="elevated">
          <div className="mb-8 flex items-center justify-center">
            <div className="relative w-28 h-28 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center animate-pulse-soft">
              <div className="absolute w-2 h-2 bg-gray-300 rounded-full top-3 right-4 animate-bounce-gentle delay-500"></div>
              <div className="w-1 h-10 bg-gray-800 rounded-full transition-transform duration-1000"></div>
              <div className="absolute w-2 h-2 bg-gray-800 rounded-full bottom-1.5"></div>
            </div>
          </div>
          <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Análisis de Disponibilidad
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Verificamos disponibilidad de dominios y marcas registradas en
            tiempo real para cada nombre generado.
          </p>
        </Card>

        <Card variant="elevated">
          <div className="mb-8">
            <div className="relative overflow-visible animate-pulse-soft bg-gray-50 w-full h-28 ring-black/5 ring-1 rounded-2xl">
              <span className="absolute left-12 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5">
                20% Automatización
              </span>
              <span className="absolute right-4 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5">
                60% Coste
              </span>
              <div className="absolute inset-x-8 bottom-4 flex gap-2 items-end justify-center">
                {[6, 10, 14, 20, 24].map((height) => (
                  <div
                    key={height}
                    className={`w-6 h-${height} bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Generación Inteligente de Nombres
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Nuestra IA analiza tendencias del mercado, competencia y
            preferencias lingüísticas para crear nombres únicos.
          </p>
        </Card>

        <Card variant="elevated">
          <div className="flex overflow-hidden relative bg-gray-50 rounded-xl mb-8 items-center justify-center h-28">
            <video
              src="https://cdn.midjourney.com/video/d9a88b9e-7ed5-464b-a036-0518cdd85eae/0.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
            <div className="relative flex ring-0 bg-white/0 opacity-25 w-28 h-28 rounded-full items-center justify-center"></div>
          </div>
          <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2 font-nunito">
            Validación Global
          </h3>
          <p className="text-gray-600 leading-relaxed font-nunito">
            Verificamos disponibilidad en múltiples países y mercados para
            garantizar protección global de tu marca.
          </p>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3 relative overflow-hidden w-full mt-10 items-center justify-center">
        <div
          className="flex items-center gap-3 whitespace-nowrap"
          style={{
            animation: "aura-marquee-rtl 28s linear infinite",
            willChange: "transform",
          }}
        >
          {[
            "Naming Estratégico",
            "Análisis Semántico",
            "Validación Automatizada",
            "Branding Inteligente",
            "Registro Express",
          ].map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm font-nunito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <circle cx="8" cy="8" r="6"></circle>
                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
              </svg>
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* <style>
        @keyframes aura-marquee-rtl {
          0 % { transform: translateX(0); }
      100% {transform: translateX(-50%); }
    }
      </style> */}
    </Section>
  );
}
