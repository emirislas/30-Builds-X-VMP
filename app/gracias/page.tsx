import Link from "next/link";
import Stripe from "stripe";

export const metadata = {
  title: "Tu espacio está reservado | 30 Builds × VMP",
  description: "Siguiente paso: agenda tu Kickoff Creativo.",
};

type GraciasPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function GraciasPage({
  searchParams,
}: GraciasPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  let paymentVerified = false;
  let customerName: string | null = null;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      const session = await stripe.checkout.sessions.retrieve(sessionId);

      paymentVerified =
        session.payment_status === "paid" &&
        session.status === "complete";

      customerName =
        session.customer_details?.name ||
        session.customer_details?.email ||
        null;
    } catch (error) {
      console.error("Stripe session verification failed:", error);
    }
  }

  /* =========================================================
      PAGO NO VERIFICADO
  ========================================================== */
  if (!paymentVerified) {
    return (
      <main className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-12 text-white md:px-12 lg:px-20">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8vw] top-1/2 -translate-y-1/2 select-none text-[75vw] font-black leading-none tracking-[-0.1em] text-transparent opacity-15 [-webkit-text-stroke:1px_#F2FF00] md:text-[55vw]"
        >
          30
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">

          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <p className="text-xs font-semibold tracking-[0.25em]">
              30 BUILDS × VMP
            </p>

            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>

          <div className="max-w-4xl py-24 md:py-32">

            <p className="text-xs font-semibold tracking-[0.2em] text-white/35">
              PAGO NO VERIFICADO
            </p>

            <h1 className="mt-6 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Todavía no podemos
              <br />
              confirmar tu espacio<span className="text-[#F2FF00]">.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Esta página únicamente se habilita después de completar
              correctamente tu pago de 30 Builds.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex bg-[#F2FF00] px-7 py-4 text-xs font-bold tracking-[0.05em] text-black transition hover:bg-white"
            >
              VOLVER A 30 BUILDS →
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /* =========================================================
      PAGO VERIFICADO
  ========================================================== */
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-12 text-white md:px-12 lg:px-20">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8vw] top-1/2 -translate-y-1/2 select-none text-[75vw] font-black leading-none tracking-[-0.1em] text-transparent opacity-20 [-webkit-text-stroke:1px_#F2FF00] md:text-[55vw]"
      >
        30
      </div>

      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F2FF00]/5 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <p className="text-xs font-semibold tracking-[0.25em]">
            30 BUILDS × VMP
          </p>

          <span className="h-2 w-2 rounded-full bg-[#F2FF00] shadow-[0_0_14px_#F2FF00]" />
        </div>

        <div className="grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">

          <div>

            <p className="text-xs font-semibold tracking-[0.2em] text-[#F2FF00]">
              PAGO CONFIRMADO
            </p>

            <h1 className="mt-6 max-w-5xl text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
              Tu espacio
              <br />
              ya es
              <br />

              <span className="text-[#F2FF00]">
                uno de los 30.
              </span>
            </h1>

            {customerName && (
              <p className="mt-8 text-sm text-white/35">
                Reserva registrada para {customerName}.
              </p>
            )}

          </div>

          <div className="max-w-lg lg:pb-2">

            <p className="text-lg leading-8 text-white/55">
              El siguiente paso es agendar tu{" "}
              <span className="font-medium text-white">
                Kickoff Creativo.
              </span>{" "}
              Ahí definiremos la dirección de tu web, revisaremos materiales y
              dejaremos todo listo para comenzar.
            </p>

            <div className="mt-9">

              <a
                href="https://calendar.app.google/N223sB4xucksFTxWA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between bg-[#F2FF00] px-6 py-5 text-sm font-bold text-black transition duration-300 hover:bg-white md:px-8"
              >
                <span>AGENDAR MI KICKOFF</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <p className="mt-4 text-xs leading-5 text-white/30">
                Elige únicamente uno de los horarios disponibles. Recibirás la
                confirmación de la cita en tu correo.
              </p>

            </div>

          </div>

        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.12em] text-white/30 sm:flex-row">

          <span>
            VMP © 2026
          </span>

          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            VOLVER A 30 BUILDS
          </Link>

        </div>

      </div>

    </main>
  );
}