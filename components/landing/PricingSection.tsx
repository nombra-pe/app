import Link from "next/link";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import Section from "./Sections";
import { Button } from "../ui/button";

export default function PricingSection() {
  return (
    <Section id="precios" background="light">
      <SectionHeader
        title="Elige Tu Plan"
        description="Comienza a crear nombres únicos con IA. Desde proyectos personales hasta soluciones empresariales."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <Card variant="elevated">
          <div className="mb-8">
            <h3 className="text-3xl text-gray-900 font-light tracking-tighter mb-2 font-nunito">
              Explorador
            </h3>
            <p className="text-sm text-gray-600 mb-6 font-nunito">
              Ideal para explorar nuestras herramientas de naming en proyectos
              personales.
            </p>
            <div className="flex items-end gap-3">
              <span className="text-4xl text-gray-900 font-light tracking-tighter font-nunito">
                $0
              </span>
              <span className="text-sm text-gray-600 mb-1 font-nunito">
                /mes
              </span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "5 generaciones de nombres / mes",
              "10 plantillas de naming básicas",
              "Exportar lista de nombres",
              "Soporte de comunidad",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-700 font-nunito"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex bg-gray-50 border-gray-200 border rounded-full mb-6 p-2 items-center justify-between">
            <span className="text-sm font-nunito">
              Análisis de disponibilidad + $5/mes
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <span className="h-6 w-10 rounded-full bg-gray-200 transition-colors peer-checked:bg-neutral-900"></span>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"></span>
            </label>
          </div>

          <Button asChild variant="default">
            <Link href="#contacto">
              Comenzar Ahora
            </Link>
          </Button>
        </Card>

        <Card variant="highlighted">
          <div className="mb-8">
            <h3 className="text-3xl text-gray-900 font-light tracking-tighter mb-2 font-nunito">
              Profesional
            </h3>
            <p className="text-sm text-gray-600 mb-6 font-nunito">
              Poder y flexibilidad para empresas que construyen marcas todos los
              días.
            </p>
            <div className="flex items-end gap-3">
              <span className="text-4xl text-gray-900 font-light tracking-tighter font-nunito">
                $29
              </span>
              <span className="text-sm text-gray-600 mb-1 font-nunito">
                /mes
              </span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "100 generaciones de nombres / mes",
              "Análisis completo de disponibilidad legal",
              "Todas las 150+ plantillas de naming",
              "Soporte prioritario y historial de proyectos",
              "Personalización avanzada de IA",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-700 font-nunito"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex bg-gray-50 border-gray-200 border rounded-full mb-6 p-2 items-center justify-between">
            <span className="text-sm font-nunito">
              Registro de marca incluido + $50/mes
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <span className="h-6 w-10 rounded-full bg-gray-200 transition-colors peer-checked:bg-neutral-900"></span>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4"></span>
            </label>
          </div>

          <Button asChild variant="default">
            <Link href="#contacto">
              Comenzar Ahora
            </Link>
          </Button>
        </Card>

        <Card
          variant="black"
          className="bg-neutral-900 text-white border-neutral-800"
        >
          <div className="mb-8">
            <h3 className="text-xl font-semibold tracking-tight font-nunito text-white">
              Empresarial
            </h3>
            <p className="text-sm text-neutral-300 font-nunito mb-6">
              Escala ilimitada y colaboración para equipos y organizaciones.
            </p>
            <div className="flex items-end gap-2">
              <span className="text-sm text-neutral-400 font-nunito">
                Starts at
              </span>
              <span className="text-4xl text-white font-light tracking-tighter font-nunito">
                $99
              </span>
              <span className="text-sm text-neutral-400 mb-1 font-nunito">
                /mes
              </span>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "Generaciones ilimitadas de nombres",
              "Creación de plantillas personalizadas",
              "Colaboración en equipo y análisis avanzado",
              "Gerente de cuenta dedicado",
              "SLA y soporte premium",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-neutral-200 font-nunito"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400 flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild variant="secondary">
            <Link href="#contacto">
              Comenzar Ahora
            </Link>
          </Button>
        </Card>
      </div>
    </Section>
  );
}
