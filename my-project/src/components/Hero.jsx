
import React from "react";

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos y funcionales.",
    href: "/desarrollo-web",
    style:
      "bg-slate-900 text-white hover:bg-slate-700",
  },
  {
    title: "Diseño de CV",
    description: "CV profesionales y estratégicos.",
    href: "https://luisfernandobueno.github.io/CVDesign/",
    style:
      "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    title: "Diseño Gráfico",
    description: "Diseños visuales para comunicar mejor.",
    href: "/diseno-grafico",
    style:
      "border border-slate-300 text-slate-800 hover:bg-slate-100",
  },
];

export default function Hero() {
  return (
<section className="flex min-h-screen items-center bg-white">
  <div className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">

    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-6 lg:gap-8">

      {/* Imagen de presentación */}
      <div className="flex justify-center md:justify-start">
        <div className="relative w-full max-w-[min(65vw,420px)]">

          <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-blue-100" />

          <img
            src="/images/IMG_20250430_155138.jpg"
            alt="Fernando Bueno"
            className="relative aspect-square w-full rounded-3xl object-contain shadow-xl"
          />

        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex min-w-0 flex-col items-start">

        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
          Servicios profesionales
        </span>

        <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Hola, soy Fernando Bueno.
          <span className="mt-1 block text-blue-600">
            Transformo ideas en soluciones.
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
          Desarrollo web, diseño de CV y diseño gráfico.
          Ofrezco soluciones digitales y visuales pensadas
          para comunicar mejor, destacar tu potencial y
          dar forma a tus proyectos.
        </p>

        {/* Botones horizontales */}
        <div className="mt-6 flex w-full flex-wrap gap-2">

          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className={`group flex flex-1 items-center justify-between gap-2 rounded-xl px-3 py-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:px-4 ${service.style}`}
            >
              <span className="text-sm font-semibold sm:text-base">
                {service.title}
              </span>

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          ))}

        </div>

        <p className="mt-4 text-xs text-slate-500 sm:text-sm">
          Soluciones personalizadas para tus ideas y objetivos.
        </p>

      </div>
    </div>
  </div>
</section>

  );
}