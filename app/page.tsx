import ContactForm from "@/components/contact-form";

const painPoints = [
  "Demoras en entregas",
  "Costos operativos fuera de control",
  "Falta de trazabilidad",
  "Procesos manuales y duplicados",
  "Baja visibilidad de inventario",
  "Equipos desalineados"
];

const steps = [
  {
    title: "Diagnostico inicial",
    text: "Mapeamos tus procesos actuales para detectar cuellos de botella reales."
  },
  {
    title: "Plan de accion",
    text: "Definimos mejoras concretas con foco en impacto y rapidez de implementacion."
  },
  {
    title: "Ejecucion acompanada",
    text: "Trabajamos junto a tu equipo para implementar cambios sin frenar la operacion."
  },
  {
    title: "Medicion y ajuste",
    text: "Seguimos indicadores clave para optimizar de forma continua."
  }
];

const values = ["Claridad", "Velocidad", "Compromiso", "Resultados medibles"];

export default function Home() {
  return (
    <main className="bg-[#212028] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#212028]/95 backdrop-blur">
        <div className="container-max flex h-16 items-center justify-between">
          <p className="text-xl font-extrabold tracking-tight">
            Widd<span className="text-[#BBEB09]">u</span>
          </p>
          <a
            href="#contacto"
            className="rounded-full border border-[#BBEB09] px-4 py-2 text-sm font-semibold text-[#BBEB09] transition hover:bg-[#BBEB09] hover:text-[#212028]"
          >
            Contactar
          </a>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-64px)] items-center">
        <div className="container-max py-16 md:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">Consultora de logistica</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Transformamos tu operacion logistica en una ventaja{" "}
            <span className="text-[#BBEB09]">competitiva</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            En Widdu optimizamos procesos, costos y tiempos para que tu cadena logistica sea simple, escalable y
            rentable.
          </p>
        </div>
      </section>

      <section className="container-max py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Los dolores que resolvemos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <article key={point} className="rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6">
              <p className="text-lg font-semibold">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-max py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-red-300/30 bg-red-300/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold">Antes</h3>
            <ul className="mt-4 space-y-3 text-white/85">
              <li>Operaciones reactivas y sin estandar.</li>
              <li>Decisiones sin datos claros.</li>
              <li>Equipos apagando incendios todo el tiempo.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-[#BBEB09]/40 bg-[#BBEB09]/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#BBEB09]">Despues</h3>
            <ul className="mt-4 space-y-3 text-white/90">
              <li>Procesos predecibles y documentados.</li>
              <li>Tableros para tomar decisiones rapidas.</li>
              <li>Equipos enfocados en crecimiento y servicio.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="container-max py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Como trabajamos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-[#BBEB09]">Paso {index + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-white/80">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-max py-16 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Nuestros valores</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {values.map((value) => (
            <span key={value} className="rounded-full border border-white/20 px-4 py-2 text-sm md:text-base">
              {value}
            </span>
          ))}
        </div>
      </section>

      <section id="contacto" className="container-max py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Hablemos de tu operacion</h2>
            <p className="mt-4 max-w-md text-white/80">
              Contanos en que etapa esta tu logistica y te respondemos con una propuesta concreta.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#212028] py-6">
        <div className="container-max flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Widdu</p>
          <p>Consultora de logistica</p>
        </div>
      </footer>
    </main>
  );
}
