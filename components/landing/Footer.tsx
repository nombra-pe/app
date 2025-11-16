const serviciosLinks = [
  { href: "#servicios", label: "Generación de Nombres" },
  { href: "#beneficios", label: "Validación de Marcas" },
  { href: "#contacto", label: "Registro Legal" },
  { href: "#servicios", label: "Análisis de Competencia" },
  { href: "#servicios", label: "Estrategia de Naming" },
];

const recursosLinks = [
  { href: "#nosotros", label: "Guías de Naming" },
  { href: "#nosotros", label: "Casos de Estudio" },
  { href: "#nosotros", label: "Blog de Branding" },
  { href: "#contacto", label: "Soporte" },
  { href: "#contacto", label: "Centro de Ayuda" },
];

const socialLinks = [
  { href: "#", label: "Twitter", icon: "twitter" },
  { href: "#", label: "GitHub", icon: "github" },
  { href: "#", label: "LinkedIn", icon: "linkedin" },
];

const legalLinks = [
  { href: "#", label: "Política de Privacidad" },
  { href: "#", label: "Términos de Servicio" },
  { href: "#", label: "Estado" },
];
export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-neutral-100 border-dashed border-neutral-200 border-t mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            Brandia
            <p className="text-sm text-neutral-600 max-w-md leading-relaxed mb-6 font-geist">
              Creamos nombres que destacan mediante IA, análisis de datos y
              estrategia creativa. Te ayudamos a crear, validar y proteger
              nombres únicos, listos para registrar y escalar globalmente.
            </p>
            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-between text-sm border-neutral-200 border-b border-dashed pt-3 pb-3 hover:text-neutral-900 transition-colors"
                >
                  <span className="flex items-center gap-3 text-neutral-800 font-geist">
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
                      className="h-4 w-4 text-neutral-600"
                    >
                      {social.icon === "twitter" && (
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      )}
                      {social.icon === "github" && (
                        <>
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </>
                      )}
                      {social.icon === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                    </svg>
                    {social.label}
                  </span>
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
                    className="h-4 w-4 text-neutral-500"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4 font-geist">
              Servicios
            </h3>
            <ul className="space-y-3">
              {serviciosLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4 font-geist">
              Recursos
            </h3>
            <ul className="space-y-3">
              {recursosLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-geist"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-dashed flex flex-col sm:flex-row gap-4 border-neutral-200 border-t pt-8 mt-8 items-center justify-between">
          <p className="text-sm text-neutral-600 font-geist">
            © 2024 BrandIa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-neutral-600 items-center">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-900 transition-colors font-geist"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
