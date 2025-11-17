import Link from "next/link";
import { Button } from "../ui/button";
import { Power } from 'lucide-react'
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
          autoPlay
          preload="metadata"
        >


          Your browser does not support the video tag.
        </video>
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
            <Button asChild >
              <Link href="#contacto">
                <Power className="h-4 w-4" />
                Inicia ahora
              </Link>
            </Button>



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
