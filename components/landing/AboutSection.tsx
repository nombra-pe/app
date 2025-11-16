import Section from "./Sections";

export default function AboutSection() {
  return (
    <Section id="nosotros" background="neutral">
      <div className="text-center">
        <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none font-medium text-gray-500 tracking-tight font-nunito">
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "0s",
            }}
          >
            "Transformamos ideas en marcas con identidad y alcance global,
          </span>
          <span
            className="lyric-line text-gray-900 font-semibold"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "0.5s",
              marginLeft: "0.5rem",
            }}
          >
            combinando creatividad
          </span>
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "1s",
              marginLeft: "0.5rem",
            }}
          >
            , estrategia
          </span>
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "1.5s",
              marginLeft: "0.5rem",
            }}
          >
            y el poder de la
          </span>
          <span
            className="lyric-line text-gray-900 font-semibold"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "2s",
              marginLeft: "0.5rem",
            }}
          >
            inteligencia artificial
          </span>
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "2.5s",
              marginLeft: "0.5rem",
            }}
          >
            para crear marcas únicas y memorables.
          </span>
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "3s",
            }}
          >
            ¿Lo mejor?
          </span>
          <span
            className="lyric-line text-gray-900 font-semibold"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "3.5s",
              marginLeft: "0.5rem",
            }}
          >
            Nos encargamos de todo
          </span>
          <span
            className="lyric-line"
            style={{
              opacity: 0,
              display: "inline-block",
              animation: "lyricFadeIn 0.8s ease-in-out forwards",
              animationDelay: "4s",
            }}
          >
            ."
          </span>
        </p>

        <div
          className="mt-12 flex items-center justify-center gap-3"
          style={{
            opacity: 0,
            animation: "lyricFadeIn 0.8s ease-in-out forwards",
            animationDelay: "4.5s",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl rounded-full"
              style={{
                background:
                  "radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 70%)",
                transform: "translateY(10px)",
              }}
            ></div>
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQF3xUo7zEVtCg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662911570671?e=1762992000&v=beta&t=BvuhH5gigrea5v-WBwEU91tyk7nQpjf9oT4ReGEQDek"
              alt="Founder avatar"
              className="ring-1 ring-black/5 w-12 h-12 object-cover rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
            />
          </div>
          <span className="text-base text-gray-700 font-nunito">
            Fundador de BrandIa
          </span>
        </div>
      </div>

      {/* <style>
        @keyframes lyricFadeIn {
          0 % {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
      100% {
          opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

        .lyric-line {
          transition: all 0.3s ease;
    }

        .lyric-line:hover {
          transform: scale(1.05);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
      </style> */}
    </Section>
  );
}
