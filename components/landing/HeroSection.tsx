import { Link } from "lucide-react";

export interface Props {
  video?: string;
}
export default function HeroSection({ video = "./fondo.mp4" }: Props) {
  return (
    <section id="inicio" className="pt-32 pb-20 relative group">
      <div className="-z-10 absolute top-0 right-0 bottom-0 left-0">
        <video
          data-hero-video=""
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          src={video}
          muted
          playsInline
          loop
          preload="metadata"
        ></video>
      </div>

      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold md:font-bold tracking-tight font-nunito mt-6">
            Creamos nombres que destacan. Potenciados por IA, diseñados para el
            mundo.
          </h1>

          <p className="text-base sm:text-lg text-black/80 font-nunito mt-4">
            En <strong>BrandIa</strong>, transformamos tus ideas en marcas
            memorables mediante
            <strong>IA, análisis de datos y estrategia creativa</strong>. Te
            ayudamos a<strong>crear, validar y proteger nombres únicos</strong>,
            listos para registrar y escalar globalmente.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#contacto">
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
                className="h-4 w-4"
              >
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
              </svg>
              Agenda una asesoría gratuita
            </Link>

            <Link href="#servicios">
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
                className="h-4 w-4"
              >
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Explora nuestros servicios
            </Link>
          </div>
        </div>
      </div>

      {/* <script>
    (function () {
      const section = document.querySelector("#inicio");
      const video = section?.querySelector("video[data-hero-video]");
      if (!section || !video) return;

      const playVideo = () => {
        try {
          (video as HTMLVideoElement).currentTime = 0;
          (video as HTMLVideoElement).play();
        } catch (e) {}
      };

      const pauseVideo = () => {
        try {
          (video as HTMLVideoElement).pause();
          (video as HTMLVideoElement).currentTime = 0;
        } catch (e) {}
      };

      section.addEventListener("mouseenter", playVideo);
      section.addEventListener("mouseleave", pauseVideo);
      section.addEventListener("focusin", playVideo);
      section.addEventListener("focusout", pauseVideo);
    })();
  </script> */}
    </section>
  );
}
