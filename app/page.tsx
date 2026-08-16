import {
  Sparkles,
  Zap,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";
export default function Home() {
  
  
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      

     {/* =========================================================
    HERO
========================================================== */}
<section className="relative overflow-hidden border-b border-white/10 px-6 py-6 md:min-h-screen md:py-8 md:px-12 lg:px-16 xl:px-20">

  {/* HEADER */}
  <div className="relative z-30 flex items-center justify-between">
    <p className="text-[10px] font-semibold tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
      30 BUILDS × VMP
    </p>

    <div className="flex items-center gap-2 text-[9px] tracking-[0.08em] md:text-xs">
      <span className="font-semibold text-[#F2FF00]">
        30 / 30
      </span>

      <span className="hidden text-white/60 sm:inline">
        ESPACIOS DISPONIBLES
      </span>

      <span className="h-2 w-2 rounded-full bg-[#F2FF00] shadow-[0_0_14px_#F2FF00]" />
    </div>
  </div>

  {/* 30 GIGANTE */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[-18vw] top-[22%] z-0 select-none text-[95vw] font-black leading-[0.75] tracking-[-0.1em] text-transparent opacity-20 [-webkit-text-stroke:1px_#F2FF00] md:right-[-5vw] md:top-[5%] md:text-[50vw] md:opacity-30 lg:right-[-3vw] lg:top-[8%] lg:text-[43vw]"
  >
    30
  </div>

  {/* HERO */}
  <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 pb-10 pt-16 md:min-h-[calc(100vh-100px)] md:items-center md:gap-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">

    {/* =====================================================
        IZQUIERDA
    ====================================================== */}
    <div className="relative z-20">

      <h1 className="max-w-[850px] text-[clamp(3.4rem,15vw,5.2rem)] font-semibold leading-[0.84] tracking-[-0.065em] md:text-[clamp(4rem,7.2vw,8.5rem)]">

        <span className="text-[#F2FF00]">
          Tu negocio
        </span>

        <br />

        <span className="text-white">
          merece
          <br />
          una web.
        </span>

        <br />

        <span className="text-white/80">
          Yo necesito 30.
        </span>

      </h1>

      <p className="mt-7 max-w-xl text-sm leading-6 text-white/55 md:mt-9 md:text-lg md:leading-7">
        Estoy renovando mi book. Por eso abrí únicamente 30 espacios
        para crear páginas web personalizadas y de alto impacto.
      </p>

      {/* CTA */}
      <div className="mt-7 md:mt-9">
        <a
          href="#reservar"
          className="group inline-flex w-full items-center justify-center gap-3 bg-[#F2FF00] px-8 py-4 text-xs font-bold tracking-[0.05em] text-black transition duration-300 hover:scale-[1.02] hover:bg-white sm:w-auto"
        >
          RESERVAR MI ESPACIO

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* BENEFICIOS */}
<div className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 text-[11px] text-white/55 md:grid-cols-4">

  <div className="flex items-center gap-3 md:block">
    <Sparkles
      size={40}
      strokeWidth={1.6}
      className="shrink-0 text-[#F2FF00] md:mb-3"
    />

    <span>
      Diseño
      <br />
      personalizado
    </span>
  </div>

  <div className="flex items-center gap-3 md:block">
    <Zap
      size={40}
      strokeWidth={1.6}
      className="shrink-0 text-[#F2FF00] md:mb-3"
    />

    <span>
      Entrega
      <br />
      rápida
    </span>
  </div>

  <div className="flex items-center gap-3 md:block">
    <ShieldCheck
      size={40}
      strokeWidth={1.6}
      className="shrink-0 text-[#F2FF00] md:mb-3"
    />

    <span>
      Sitio seguro
      <br />
      y optimizado
    </span>
  </div>

  <div className="flex items-center gap-3 md:block">
    <MonitorSmartphone
      size={40}
      strokeWidth={1.6}
      className="shrink-0 text-[#F2FF00] md:mb-3"
    />

    <span>
      100%
      <br />
      responsive
    </span>
  </div>

</div>

    </div>

    {/* =====================================================
        PRECIO + CARDS
    ====================================================== */}
    <div className="relative flex min-h-[470px] items-end justify-center md:min-h-[680px] md:items-center lg:justify-end">

      {/* GLOW DETRÁS */}
      <div className="pointer-events-none absolute left-1/2 bottom-[4%] z-0 h-[260px] w-[300px] -translate-x-1/2 rounded-full bg-[#F2FF00]/5 blur-[100px] md:top-1/2 md:h-[500px] md:w-[600px] md:-translate-y-1/2 md:blur-[130px]" />

      {/* =================================================
          ABANICO CARD.PNG
      ================================================== */}
      <div className="pointer-events-none absolute left-[50%] top-[2%] z-[1] w-[125%] max-w-[560px] -translate-x-1/2 md:left-[58%] md:top-1/2 md:w-[145%] md:max-w-[900px] md:-translate-y-[82%]">

        <img
          src="/cards.png"
          alt=""
          className="block h-auto w-full select-none object-contain mix-blend-screen"
        />

      </div>

      {/* =================================================
          PRICE CARD
      ================================================== */}
      <div className="relative z-10 mt-[135px] w-full max-w-[500px] border border-white/20 bg-black/85 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.9)] backdrop-blur-sm md:mt-0 md:p-12">

        {/* GLOW DEL PRECIO */}
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#F2FF00]/10 blur-[70px] md:-bottom-16 md:-right-16 md:h-44 md:w-44 md:blur-[80px]" />

        {/* LABEL */}
        <p className="inline-block border border-[#F2FF00] px-3 py-2 text-[9px] font-semibold tracking-[0.12em] text-[#F2FF00] md:px-4 md:text-[10px] md:tracking-[0.15em]">
          OFERTA ESPECIAL · 30 BUILDS
        </p>

        {/* PRECIO ORIGINAL */}
        <div className="mt-6 md:mt-8">

          <p className="text-xl text-white/40 line-through md:text-3xl">
            $15,999 MXN
          </p>

          {/* PRECIO PROMO */}
          <div className="mt-3 flex items-end">

            <p className="text-[clamp(4rem,18vw,5.5rem)] font-semibold leading-none tracking-[-0.07em] text-[#F2FF00] md:text-[clamp(4rem,8vw,7rem)]">
              $5,999
            </p>

            <span className="mb-2 ml-2 text-xs font-semibold text-[#F2FF00] md:ml-3 md:text-lg">
              MXN
            </span>

          </div>

        </div>

        {/* AHORRO */}
        <div className="mt-5 border border-white/25 px-3 py-3 text-center text-[10px] tracking-[0.03em] text-white/80 md:mt-6 md:px-4 md:text-xs md:tracking-[0.04em]">
          AHORRA $10,000 MXN · 67%
        </div>

        {/* ESPACIOS */}
        <p className="mt-6 text-center text-[10px] font-semibold tracking-[0.28em] text-[#F2FF00] md:mt-7 md:text-xs md:tracking-[0.35em]">
          SOLO 30 ESPACIOS
        </p>

      </div>

    </div>

  </div>

  {/* SCROLL */}
  <div className="absolute bottom-6 right-6 z-30 hidden text-[10px] tracking-[0.15em] text-white/35 md:block md:right-12">
    SCROLL ↓
  </div>

</section>



      {/* =========================================================
    02 — POR QUÉ EXISTE
========================================================== */}
<section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12 lg:px-20 lg:py-40">

  {/* NÚMERO DECORATIVO */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-[4vw] top-1/2 -translate-y-1/2 select-none text-[45vw] font-black leading-none tracking-[-0.1em] text-white/[0.018]"
  >
    30
  </div>


  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* LABEL */}
    <div className="flex items-center gap-4">

      <span className="h-2 w-2 bg-[#F2FF00]" />

      <p className="text-[10px] font-semibold tracking-[0.25em] text-white/45 md:text-xs">
        POR QUÉ EXISTE 30 BUILDS
      </p>

    </div>


    {/* CONTENIDO */}
    <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

      {/* =====================================================
          TITULAR
      ====================================================== */}
      <div>

        <h2 className="text-[clamp(4rem,7vw,8rem)] font-semibold leading-[0.85] tracking-[-0.065em]">

          <span className="text-white">
            30 espacios.
          </span>

          <br />

          <span className="text-[#F2FF00]">
            Una razón.
          </span>

        </h2>

      </div>


      {/* =====================================================
          EXPLICACIÓN
      ====================================================== */}
      <div className="flex flex-col justify-end lg:pb-3">

        <p className="max-w-xl text-lg leading-8 text-white/55 md:text-xl">
          Estoy renovando mi portfolio y quiero que los próximos{" "}

          <span className="font-medium text-white">
            30 proyectos
          </span>{" "}

          sean parte de él.
        </p>


        {/* DIVISOR */}
        <div className="my-8 h-px w-full bg-white/10" />


        {/* INTERCAMBIO */}
        <div className="space-y-6">

          <div className="grid grid-cols-[55px_1fr] gap-4">

            <span className="text-xs font-semibold tracking-[0.15em] text-[#F2FF00]">
              TÚ
            </span>

            <p className="text-xl font-medium leading-snug text-white md:text-2xl">
              Obtienes una web personalizada por{" "}

              <span className="text-[#F2FF00]">
                $5,999.
              </span>
            </p>

          </div>


          <div className="grid grid-cols-[55px_1fr] gap-4">

            <span className="text-xs font-semibold tracking-[0.15em] text-white/35">
              YO
            </span>

            <p className="text-xl font-medium leading-snug text-white/65 md:text-2xl">
              Obtengo una nueva pieza que quiero presumir.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        REMATE
    ====================================================== */}
    <div className="mt-24 border-t border-white/10 pt-7">

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <p className="text-xs font-semibold tracking-[0.16em] text-white/35">
          EL TRATO ES SIMPLE
        </p>


        <p className="max-w-3xl text-left text-xl font-medium tracking-[-0.02em] md:text-right md:text-2xl">

          <span className="text-white">
            BUEN DISEÑO PARA TU NEGOCIO.
          </span>

          <span className="ml-2 text-[#F2FF00]">
            MEJOR TRABAJO PARA MI BOOK.
          </span>

        </p>

      </div>

    </div>

  </div>

</section>



    {/* =========================================================
    03 — QUÉ INCLUYE
========================================================== */}
<section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12 lg:px-20 lg:py-36">

  <div className="mx-auto max-w-[1500px]">

    {/* LABEL */}
    <div className="flex items-center gap-4">
      <span className="h-2 w-2 bg-[#F2FF00]" />

      <p className="text-[10px] font-semibold tracking-[0.25em] text-white/45 md:text-xs">
        QUÉ INCLUYE TU BUILD
      </p>
    </div>


    {/* HEADER */}
    <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

      <h2 className="text-[clamp(4rem,6.5vw,7.5rem)] font-semibold leading-[0.87] tracking-[-0.06em]">

        Todo lo que
        <br />

        <span className="text-[#F2FF00]">
          necesitas.
        </span>

      </h2>


      <div className="max-w-xl lg:justify-self-end">

        <p className="text-lg leading-8 text-white/50 md:text-xl">
          Una web profesional, personalizada y lista para funcionar.
          Sin extras innecesarios ni procesos eternos.
        </p>

        <p className="mt-5 text-sm text-white/30">
          Si tu proyecto necesita algo más complejo, lo cotizamos por separado.
        </p>

      </div>

    </div>


    {/* GRID */}
    <div className="mt-20 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "01",
          title: "Hasta 5 secciones",
          text: "La estructura necesaria para presentar tu negocio de forma clara.",
        },
        {
          number: "02",
          title: "Diseño personalizado",
          text: "Nada genérico. La dirección visual se adapta a tu marca.",
        },
        {
          number: "03",
          title: "Desktop + móvil",
          text: "La experiencia funciona correctamente en ambos formatos.",
        },
        {
          number: "04",
          title: "Contacto directo",
          text: "WhatsApp, teléfono, redes sociales y llamados a la acción.",
        },
        {
          number: "05",
          title: "Formulario",
          text: "Formulario sencillo de contacto cuando el proyecto lo necesite.",
        },
        {
          number: "06",
          title: "SEO básico",
          text: "Título, descripción y estructura inicial para buscadores.",
        },
        {
          number: "07",
          title: "Dominio conectado",
          text: "Si ya cuentas con dominio, lo dejamos funcionando con tu web.",
        },
        {
          number: "08",
          title: "Publicación incluida",
          text: "Tu sitio termina online, publicado y listo para compartir.",
        },
      ].map((item) => (

        <div
          key={item.number}
          className="group relative min-h-[260px] bg-black p-7 transition-all duration-300 hover:bg-[#F2FF00] md:p-8"
        >

          {/* NÚMERO */}
          <span className="text-xs font-semibold tracking-[0.15em] text-[#F2FF00] transition-colors duration-300 group-hover:text-black/40">
            {item.number}
          </span>


          {/* TEXTO */}
          <div className="absolute bottom-7 left-7 right-7 md:bottom-8 md:left-8 md:right-8">

            <h3 className="text-xl font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-black">
              {item.title}
            </h3>

            <p className="mt-3 max-w-[280px] text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-black/60">
              {item.text}
            </p>

          </div>

        </div>

      ))}

    </div>


    {/* FOOTNOTE */}
    <div className="mt-8 flex items-start gap-3">

      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 bg-[#F2FF00]" />

      <p className="max-w-2xl text-xs leading-5 text-white/35">
        El cliente proporciona textos, fotografías, logotipo y demás materiales.
        Funcionalidades o necesidades fuera de este alcance se cotizan adicionalmente.
      </p>

    </div>

  </div>

</section>
{/* =========================================================
    04 — PORTFOLIO
========================================================== */}
<section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-28 md:px-12 lg:px-20 lg:py-36">

  <div className="mx-auto max-w-[1500px]">

    {/* =========================================================
        LABEL
    ========================================================== */}
    <div className="flex items-center gap-4">

      <span className="h-2 w-2 bg-[#F2FF00]" />

      <p className="text-[10px] font-semibold tracking-[0.25em] text-white/45 md:text-xs">
        SELECTED BUILDS / 01—03
      </p>

    </div>


    {/* =========================================================
        HEADER
    ========================================================== */}
    <div className="mt-17 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

      <h2 className="text-[clamp(4rem,6vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em]">

        No te digo cómo
        <br />
        se puede ver.

        <br />

        <span className="text-[#F2FF00]">
          Te lo enseño.
        </span>

      </h2>


      <p className="max-w-lg text-lg leading-8 text-white/45 lg:justify-self-end">
        Tres negocios. Tres estilos completamente distintos.
        Cada web se construye alrededor de la identidad de la marca.
      </p>

    </div>


    {/* =========================================================
        PROJECT GRID
    ========================================================== */}
    <div className="mt-20 grid gap-4 md:grid-cols-3">


      {/* =====================================================
          PROJECT 01
      ====================================================== */}
      <article className="group">

        {/* IMAGE */}
        <div className="relative overflow-hidden border border-white/10 bg-[#080808]">

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src="/project-01.png"
              alt="Proyecto de interiorismo"
              className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
            />

          </div>


          {/* NUMBER */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/70 text-[10px] font-semibold text-[#F2FF00] backdrop-blur-md">
            01
          </div>

        </div>


        {/* INFO */}
        <div className="mt-5 flex items-start justify-between border-t border-white/10 pt-4">

          <div>

            <h3 className="text-base font-semibold">
              Interiorismo
            </h3>

            <p className="mt-1 text-xs text-white/35">
              Estudio creativo
            </p>

          </div>


          <span className="text-[9px] tracking-[0.12em] text-white/25">
            WEB / MOBILE
          </span>

        </div>

      </article>


      {/* =====================================================
          PROJECT 02
      ====================================================== */}
      <article className="group">

        {/* IMAGE */}
        <div className="relative overflow-hidden border border-white/10 bg-[#080808]">

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src="/project-02.png"
              alt="Proyecto fitness"
              className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
            />

          </div>


          {/* NUMBER */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/70 text-[10px] font-semibold text-[#F2FF00] backdrop-blur-md">
            02
          </div>

        </div>


        {/* INFO */}
        <div className="mt-5 flex items-start justify-between border-t border-white/10 pt-4">

          <div>

            <h3 className="text-base font-semibold">
              Fitness
            </h3>

            <p className="mt-1 text-xs text-white/35">
              Gimnasio
            </p>

          </div>


          <span className="text-[9px] tracking-[0.12em] text-white/25">
            WEB / MOBILE
          </span>

        </div>

      </article>


      {/* =====================================================
          PROJECT 03
      ====================================================== */}
      <article className="group">

        {/* IMAGE */}
        <div className="relative overflow-hidden border border-white/10 bg-[#080808]">

          <div className="aspect-[4/3] overflow-hidden">

            <img
              src="/project-03.png"
              alt="Proyecto restaurante"
              className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
            />

          </div>


          {/* NUMBER */}
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/70 text-[10px] font-semibold text-[#F2FF00] backdrop-blur-md">
            03
          </div>

        </div>


        {/* INFO */}
        <div className="mt-5 flex items-start justify-between border-t border-white/10 pt-4">

          <div>

            <h3 className="text-base font-semibold">
              Gastronomía
            </h3>

            <p className="mt-1 text-xs text-white/35">
              Restaurante
            </p>

          </div>


          <span className="text-[9px] tracking-[0.12em] text-white/25">
            WEB / MOBILE
          </span>

        </div>

      </article>


    </div>
    {/* DISCLAIMER */}
<div className="mt-8 max-w-3xl">
  <p className="text-[10px] leading-5 text-white/25 md:text-xs">
    <span className="font-semibold text-white/40">
      Nota:
    </span>{" "}
    Por privacidad y confidencialidad, los nombres, marcas e imágenes
    mostrados en estos ejemplos han sido sustituidos por contenido ficticio
    y recursos generados con IA. Los proyectos reflejan el diseño, estructura
    y dirección visual del trabajo realizado.
  </p>
</div>


    {/* =========================================================
        CIERRE
    ========================================================== */}
    <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">

      <p className="text-xs font-semibold tracking-[0.15em] text-white/30">
        TRES EJEMPLOS. INFINITAS DIRECCIONES.
      </p>


      <p className="text-lg font-medium md:text-xl">

        Tu negocio no tiene que verse como los demás.

        <span className="ml-2 text-[#F2FF00]">
          Esa es la idea.
        </span>

      </p>

    </div>

  </div>

</section>



      {/* =========================================================
          PROCESO
      ========================================================== */}
      <section className="border-b border-white/10 px-6 py-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-[1500px]">

          <p className="text-xs font-semibold tracking-[0.18em] text-[#F2FF00]">
            CÓMO FUNCIONA
          </p>


          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "RESERVA TU ESPACIO",
                text: "Pagas tu lugar y agendas tu Kickoff.",
              },
              {
                number: "02",
                title: "KICKOFF CREATIVO",
                text: "Definimos estructura, estilo y contenido.",
              },
              {
                number: "03",
                title: "DISEÑO & DESARROLLO",
                text: "En una semana presentamos la primera versión.",
              },
              {
                number: "04",
                title: "ENTREGA",
                text: "Revisamos juntos, ajustamos y publicamos.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="bg-black p-7 md:min-h-[280px]"
              >

                <p className="text-5xl font-semibold tracking-[-0.05em] text-[#F2FF00]">
                  {step.number}
                </p>

                <h3 className="mt-16 text-sm font-semibold tracking-[0.04em]">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-[250px] text-sm leading-6 text-white/45">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* =========================================================
    06 — FAQ
========================================================== */}
<section className="relative border-b border-white/10 bg-black px-6 py-28 md:px-12 lg:px-20 lg:py-36">

  <div className="mx-auto max-w-[1500px]">

    {/* LABEL */}
    <div className="flex items-center gap-4">
      <span className="h-2 w-2 bg-[#F2FF00]" />

      <p className="text-[10px] font-semibold tracking-[0.25em] text-white/45 md:text-xs">
        PREGUNTAS FRECUENTES
      </p>
    </div>


    <div className="mt-14 grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

      {/* TITULO */}
      <div>
        <h2 className="text-[clamp(4rem,6vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
          Antes de
          <br />
          empezar<span className="text-[#F2FF00]">.</span>
        </h2>

        <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
          Lo importante, sin letras pequeñas ni procesos complicados.
        </p>
      </div>


      {/* PREGUNTAS */}
      <div className="border-t border-white/10">

        {/* 01 */}
        <details className="group border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">
            
            <div className="flex items-center gap-5">
              <span className="text-[10px] font-semibold text-[#F2FF00]">
                01
              </span>

              <h3 className="text-lg font-medium md:text-xl">
                ¿Qué necesito para empezar?
              </h3>
            </div>

            <span className="text-2xl font-light text-[#F2FF00] transition-transform duration-300 group-open:rotate-45">
              +
            </span>

          </summary>

          <div className="pb-7 pl-10 md:pl-12">
            <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              Tu logotipo, textos, imágenes y cualquier referencia que nos
              ayude a entender tu negocio. Durante el kickoff organizamos
              contigo la estructura, estilo y contenido de la web.
            </p>
          </div>
        </details>


        {/* 02 */}
        <details className="group border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">

            <div className="flex items-center gap-5">
              <span className="text-[10px] font-semibold text-[#F2FF00]">
                02
              </span>

              <h3 className="text-lg font-medium md:text-xl">
                ¿Cuánto tarda mi página?
              </h3>
            </div>

            <span className="text-2xl font-light text-[#F2FF00] transition-transform duration-300 group-open:rotate-45">
              +
            </span>

          </summary>

          <div className="pb-7 pl-10 md:pl-12">
            <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              Presentamos la primera versión durante la primera semana.
              Después tenemos una revisión 1:1 para revisar y anotar cambios.
              La entrega final está contemplada para la segunda semana.
            </p>
          </div>
        </details>


        {/* 03 */}
        <details className="group border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">

            <div className="flex items-center gap-5">
              <span className="text-[10px] font-semibold text-[#F2FF00]">
                03
              </span>

              <h3 className="text-lg font-medium md:text-xl">
                ¿Qué pasa si necesito algo más complejo?
              </h3>
            </div>

            <span className="text-2xl font-light text-[#F2FF00] transition-transform duration-300 group-open:rotate-45">
              +
            </span>

          </summary>

          <div className="pb-7 pl-10 md:pl-12">
            <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              No hay problema. Los $5,999 MXN cubren el alcance de 30 Builds.
              Si necesitas funcionalidades, desarrollo o secciones adicionales,
              revisamos tu proyecto y cotizamos únicamente lo adicional.
            </p>
          </div>
        </details>


        {/* 04 */}
        <details className="group border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7">

            <div className="flex items-center gap-5">
              <span className="text-[10px] font-semibold text-[#F2FF00]">
                04
              </span>

              <h3 className="text-lg font-medium md:text-xl">
                ¿Dominio y hosting están incluidos?
              </h3>
            </div>

            <span className="text-2xl font-light text-[#F2FF00] transition-transform duration-300 group-open:rotate-45">
              +
            </span>

          </summary>

          <div className="pb-7 pl-10 md:pl-12">
            <p className="max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              La configuración, conexión y publicación de tu página están
              incluidas. La compra o renovación de dominio y cualquier servicio
              externo necesario corre por cuenta del cliente.
            </p>
          </div>
        </details>

      </div>

    </div>

  </div>

</section>



      {/* =========================================================
    07 — CTA FINAL
========================================================== */}
<section
  id="reservar"
  className="relative overflow-hidden bg-black px-6 py-28 md:px-12 lg:px-20 lg:py-40"
>

  {/* =========================================================
      30 GIGANTE DE FONDO
  ========================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[-10vw] top-1/2 z-0 -translate-y-1/2 select-none text-[90vw] font-black leading-[0.75] tracking-[-0.1em] text-transparent opacity-20 [-webkit-text-stroke:1px_#F2FF00] md:right-[-5vw] md:text-[55vw] lg:right-[-3vw] lg:text-[43vw]"
  >
    30
  </div>


  {/* GLOW */}
  <div className="pointer-events-none absolute bottom-[-150px] left-1/2 z-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#F2FF00]/5 blur-[150px]" />


  {/* =========================================================
      CONTENT
  ========================================================== */}
  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* LABEL */}
    <div className="flex items-center gap-4">

      <span className="h-2 w-2 bg-[#F2FF00] shadow-[0_0_12px_#F2FF00]" />

      <p className="text-[10px] font-semibold tracking-[0.25em] text-white/45 md:text-xs">
        30 BUILDS × VMP
      </p>

    </div>


    {/* =========================================================
        HEADLINE
    ========================================================== */}
    <div className="mt-14">

      <h2 className="max-w-[1200px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">

        <span className="text-white">
          Tu negocio
        </span>

        <br />

        <span className="text-white">
          puede ser
        </span>

        <br />

        <span className="text-[#F2FF00]">
          uno de los 30.
        </span>

      </h2>

    </div>


    {/* =========================================================
        PRECIO + CTA
    ========================================================== */}
    <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">

      {/* PRECIO */}
      <div>

        <p className="text-sm font-medium tracking-[0.08em] text-white/30">
          TU WEB
        </p>


        <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-2">

          <p className="text-2xl text-white/30 line-through md:text-3xl">
            $15,999
          </p>

          <p className="text-[clamp(4rem,8vw,7rem)] font-semibold leading-[0.85] tracking-[-0.07em] text-[#F2FF00]">
            $5,999
          </p>

          <span className="mb-1 text-sm font-semibold text-[#F2FF00] md:mb-2 md:text-lg">
            MXN
          </span>

        </div>


        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">

          <span className="text-xs font-semibold tracking-[0.14em] text-[#F2FF00]">
            30 / 30 DISPONIBLES
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          <span className="text-xs text-white/35">
            Primera versión en una semana.
          </span>

        </div>

      </div>


      {/* =====================================================
          BOTÓN
      ====================================================== */}
      <div className="lg:min-w-[360px]">

        <a
          href="#"
          className="group flex w-full items-center justify-between bg-[#F2FF00] px-6 py-6 text-sm font-bold tracking-[0.04em] text-black transition-all duration-300 hover:scale-[1.015] hover:bg-white md:px-8"
        >

          <span>
            RESERVAR MI ESPACIO
          </span>

          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>


        {/* WHATSAPP SECONDARY */}
        <a
          href="https://wa.me/525564676459?text=Hola%2C%20vi%2030%20Builds%20y%20tengo%20una%20duda."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 py-3 text-xs text-white/35 transition-colors duration-300 hover:text-white"
        >

          <span>
            ¿Todavía tienes una duda?
          </span>

          <span className="text-white/60">
            Escríbeme por WhatsApp →
          </span>

        </a>

      </div>

    </div>


    {/* =========================================================
        MICROCOPY
    ========================================================== */}
    <div className="mt-16 border-t border-white/10 pt-6">

      <div className="flex flex-col justify-between gap-3 text-[10px] tracking-[0.1em] text-white/25 sm:flex-row">

        <span>
          30 BUILDS × VMP
        </span>

        <span>
          SOLO 30 PROYECTOS · CUANDO SE ACABAN, SE ACABAN.
        </span>

      </div>

    </div>

  </div>

</section>



      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 px-6 py-7 text-[10px] tracking-[0.12em] text-white/35 md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 sm:flex-row">

          <span>
            VMP © 2026
          </span>

          <span>
            30 BUILDS × VMP
          </span>

        </div>

      </footer>



      {/* =========================================================
          WHATSAPP FLOTANTE
      ========================================================== */}
      <a
        href="https://wa.me/525564676459?text=Hola%2C%20vi%2030%20BUILDS%20y%20tengo%20una%20duda."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#F2FF00] text-black shadow-[0_8px_30px_rgba(242,255,0,0.25)] transition duration-300 hover:scale-110 hover:bg-white md:bottom-8 md:right-8"
      >

        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M19.11 17.32c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />

          <path d="M16.03 3.2c-6.98 0-12.65 5.66-12.65 12.64 0 2.23.58 4.41 1.68 6.33L3.27 28.8l6.8-1.78a12.63 12.63 0 0 0 5.95 1.52h.01c6.97 0 12.64-5.67 12.64-12.65 0-3.38-1.32-6.56-3.71-8.95A12.56 12.56 0 0 0 16.03 3.2zm0 23.2h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-4.03 1.06 1.08-3.93-.25-.4a10.47 10.47 0 0 1-1.61-5.59c0-5.82 4.73-10.55 10.56-10.55 2.82 0 5.47 1.1 7.46 3.1a10.48 10.48 0 0 1 3.09 7.46c-.01 5.82-4.74 10.54-10.56 10.54z" />
        </svg>


        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap border border-white/15 bg-black px-4 py-2 text-xs font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
          ¿TIENES UNA DUDA?
        </span>

      </a>

    </main>
  );
}