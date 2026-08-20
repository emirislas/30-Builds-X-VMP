import Link from "next/link";

export const metadata = {
  title: "Información legal | 30 Builds × VMP",
  description:
    "Términos y condiciones, política de cancelaciones y aviso de privacidad de 30 Builds × VMP.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================================================
          HEADER
      ========================================================== */}
      <header className="border-b border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xs font-semibold tracking-[0.24em] transition hover:text-[#F2FF00]"
          >
            30 BUILDS × VMP
          </Link>

          <Link
            href="/"
            className="text-[10px] tracking-[0.12em] text-white/40 transition hover:text-white"
          >
            ← VOLVER AL SITIO
          </Link>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8vw] top-1/2 -translate-y-1/2 select-none text-[50vw] font-black leading-none tracking-[-0.1em] text-transparent opacity-15 [-webkit-text-stroke:1px_#F2FF00]"
        >
          30
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#F2FF00] md:text-xs">
            INFORMACIÓN LEGAL
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
            Todo claro
            <br />
            <span className="text-[#F2FF00]">antes de empezar.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Aquí puedes consultar las condiciones de 30 Builds × VMP,
            nuestra política de cancelaciones y la información relacionada
            con el tratamiento de datos.
          </p>

          {/* NAVEGACIÓN */}
          <nav className="mt-12 flex flex-wrap gap-3">
            <a
              href="#terminos"
              className="border border-white/15 px-5 py-3 text-[10px] font-semibold tracking-[0.12em] transition hover:border-[#F2FF00] hover:text-[#F2FF00]"
            >
              TÉRMINOS
            </a>

            <a
              href="#cancelaciones"
              className="border border-white/15 px-5 py-3 text-[10px] font-semibold tracking-[0.12em] transition hover:border-[#F2FF00] hover:text-[#F2FF00]"
            >
              CANCELACIONES
            </a>

            <a
              href="#privacidad"
              className="border border-white/15 px-5 py-3 text-[10px] font-semibold tracking-[0.12em] transition hover:border-[#F2FF00] hover:text-[#F2FF00]"
            >
              PRIVACIDAD
            </a>
          </nav>
        </div>
      </section>

      {/* =========================================================
          TÉRMINOS
      ========================================================== */}
      <section
        id="terminos"
        className="scroll-mt-10 border-b border-white/10 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#F2FF00]">
              01
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Términos y
              <br />
              condiciones.
            </h2>
          </div>

          <div className="space-y-10 text-sm leading-7 text-white/55 md:text-base">

            <LegalBlock title="1. Sobre 30 Builds">
              30 Builds × VMP es una iniciativa de VMP para el diseño,
              desarrollo y publicación de sitios web dentro de un alcance
              previamente definido. La edición está limitada a un máximo de
              30 proyectos.
            </LegalBlock>

            <LegalBlock title="2. Precio">
              El precio de 30 Builds es de $5,999 MXN por proyecto dentro del
              alcance descrito en el sitio web. Cualquier funcionalidad,
              servicio o desarrollo adicional deberá cotizarse por separado y
              requerirá la autorización del cliente antes de realizarse.
            </LegalBlock>

            <LegalBlock title="3. Alcance del servicio">
              El servicio contempla un sitio web de hasta cinco secciones,
              diseño personalizado, adaptación para escritorio y dispositivos
              móviles, elementos de contacto, formulario sencillo cuando sea
              necesario, configuración SEO básica, conexión de un dominio
              existente y publicación del sitio.
            </LegalBlock>

            <LegalBlock title="4. Materiales del cliente">
              El cliente es responsable de proporcionar oportunamente los
              textos, fotografías, logotipos, accesos, datos comerciales y
              demás materiales necesarios para desarrollar el proyecto.

              El cliente declara contar con los derechos o autorizaciones
              necesarias para utilizar los materiales que entregue a VMP.
            </LegalBlock>

            <LegalBlock title="5. Tiempos de desarrollo">
              Los tiempos de trabajo comienzan una vez realizado el Kickoff
              Creativo y recibidos los materiales y accesos necesarios.

              Como referencia, la primera versión está contemplada durante la
              primera semana de desarrollo y la entrega final durante la
              segunda semana, siempre que el cliente entregue oportunamente
              materiales, comentarios y aprobaciones.
            </LegalBlock>

            <LegalBlock title="6. Revisiones">
              El proceso contempla una revisión principal de la primera versión
              y los ajustes acordados dentro del alcance original.

              Solicitudes que modifiquen sustancialmente la estructura,
              funcionalidad o alcance inicialmente acordado podrán requerir
              una cotización adicional.
            </LegalBlock>

            <LegalBlock title="7. Dominio, hosting y servicios externos">
              La configuración, conexión y publicación del sitio están
              contempladas dentro del servicio.

              La compra o renovación de dominios, licencias, plataformas,
              servicios de correo, integraciones de terceros u otros servicios
              externos no está incluida en los $5,999 MXN, salvo que se indique
              expresamente lo contrario por escrito.
            </LegalBlock>

            <LegalBlock title="8. Pagos">
              Los pagos realizados desde el sitio son procesados mediante
              Stripe. VMP no almacena directamente los datos completos de las
              tarjetas utilizadas durante el proceso de pago.
            </LegalBlock>

            <LegalBlock title="9. Portafolio">
              Salvo que exista un acuerdo de confidencialidad o una solicitud
              expresa acordada previamente, VMP podrá mostrar el resultado
              visual del proyecto como parte de su portafolio profesional.

              Cuando sea necesario, podrán sustituirse nombres, marcas,
              fotografías u otros elementos identificables por recursos
              ficticios o recreados.
            </LegalBlock>

            <LegalBlock title="10. Aceptación">
              Al reservar un espacio y realizar el pago, el cliente confirma
              que ha podido consultar el alcance, precio y estas condiciones
              antes de contratar el servicio.
            </LegalBlock>

          </div>
        </div>
      </section>

      {/* =========================================================
          CANCELACIONES
      ========================================================== */}
      <section
        id="cancelaciones"
        className="scroll-mt-10 border-b border-white/10 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#F2FF00]">
              02
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Cancelaciones
              <br />
              y reembolsos.
            </h2>
          </div>

          <div className="space-y-10 text-sm leading-7 text-white/55 md:text-base">

            <LegalBlock title="Antes de iniciar el proyecto">
              Si necesitas cancelar tu proyecto antes del Kickoff Creativo y
              antes de que VMP haya iniciado trabajos específicos para tu
              proyecto, comunícate con nosotros para revisar tu caso y la
              procedencia del reembolso.
            </LegalBlock>

            <LegalBlock title="Después de iniciado el proyecto">
              Una vez iniciado el trabajo de diseño, planeación, desarrollo o
              producción específica del proyecto, cualquier solicitud de
              cancelación será evaluada considerando el trabajo ya realizado y
              los costos que se hayan generado.
            </LegalBlock>

            <LegalBlock title="Servicios externos">
              Los importes pagados directamente a proveedores externos, como
              dominios, licencias o servicios contratados específicamente para
              el proyecto, estarán sujetos a las políticas de dichos
              proveedores y pueden no ser reembolsables.
            </LegalBlock>

            <LegalBlock title="Si VMP no puede prestar el servicio">
              Si por una causa atribuible a VMP no fuera posible iniciar o
              completar el servicio contratado, se revisará el proyecto y,
              cuando corresponda, se realizará el reembolso total o
              proporcional aplicable.
            </LegalBlock>

            <LegalBlock title="Cómo solicitar una cancelación">
              Para cualquier solicitud relacionada con cancelaciones o
              reembolsos, el cliente deberá contactar a VMP indicando el nombre
              y correo electrónico utilizados durante la compra.
            </LegalBlock>

          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVACIDAD
      ========================================================== */}
      <section
        id="privacidad"
        className="scroll-mt-10 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#F2FF00]">
              03
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Aviso de
              <br />
              privacidad.
            </h2>
          </div>

          <div className="space-y-10 text-sm leading-7 text-white/55 md:text-base">

            <LegalBlock title="Responsable">
              VMP es responsable del tratamiento de los datos personales
              proporcionados directamente durante el proceso de contacto,
              contratación y prestación del servicio 30 Builds.
            </LegalBlock>

            <LegalBlock title="Datos que podemos recibir">
              Dependiendo de la interacción con el sitio y del proceso de
              contratación, podemos recibir datos como nombre, correo
              electrónico, teléfono, información relacionada con el negocio y
              datos necesarios para coordinar y desarrollar el proyecto.
            </LegalBlock>

            <LegalBlock title="Finalidades">
              Los datos proporcionados se utilizan para atender solicitudes,
              verificar y administrar contrataciones, comunicarnos con el
              cliente, coordinar el Kickoff Creativo, desarrollar y entregar el
              proyecto, brindar soporte relacionado con el servicio y cumplir
              obligaciones administrativas aplicables.
            </LegalBlock>

            <LegalBlock title="Pagos mediante Stripe">
              Los pagos realizados desde este sitio son procesados por Stripe.
              La información de pago se proporciona directamente dentro de la
              infraestructura de dicho proveedor y está sujeta también a sus
              términos y políticas de privacidad.
            </LegalBlock>

            <LegalBlock title="Google Analytics">
              Este sitio utiliza Google Analytics para obtener información
              estadística sobre el uso del sitio, como visitas, interacción con
              páginas y eventos relacionados con la navegación y el proceso de
              contratación.

              Esta información nos ayuda a comprender el funcionamiento del
              sitio y mejorar la experiencia de los usuarios.
            </LegalBlock>

            <LegalBlock title="Servicios de terceros">
              Para operar el sitio y prestar el servicio podemos utilizar
              proveedores tecnológicos relacionados con alojamiento,
              analítica, procesamiento de pagos y otras funciones necesarias.

              Estos proveedores pueden tratar información conforme a sus
              propias políticas y únicamente para las funciones relacionadas
              con sus servicios.
            </LegalBlock>

            <LegalBlock title="Seguridad">
              Adoptamos medidas razonables para proteger la información
              relacionada con el servicio y utilizamos proveedores
              especializados para funciones como procesamiento de pagos y
              alojamiento.
            </LegalBlock>

            <LegalBlock title="Derechos y contacto">
              Si deseas consultar, corregir o solicitar la eliminación de
              información personal proporcionada directamente a VMP, puedes
              comunicarte con nosotros mediante los canales de contacto
              publicados en este sitio.
            </LegalBlock>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACTO
      ========================================================== */}
      <section className="border-t border-white/10 bg-[#050505] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1500px]">

          <p className="text-[10px] font-semibold tracking-[0.2em] text-white/35">
            ¿TIENES ALGUNA DUDA?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Pregunta antes
            <br />
            <span className="text-[#F2FF00]">de reservar.</span>
          </h2>

          <a
            href="https://wa.me/525564676459?text=Hola%2C%20tengo%20una%20duda%20sobre%2030%20Builds"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex bg-[#F2FF00] px-7 py-4 text-xs font-bold tracking-[0.05em] text-black transition hover:bg-white"
          >
            CONTACTAR A VMP →
          </a>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <footer className="border-t border-white/10 px-6 py-7 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[10px] tracking-[0.12em] text-white/30 sm:flex-row">
          <span>VMP © 2026</span>

          <span>
            INFORMACIÓN LEGAL · 30 BUILDS × VMP
          </span>
        </div>
      </footer>

    </main>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-white/10 pt-6">
      <h3 className="text-base font-semibold text-white md:text-lg">
        {title}
      </h3>

      <div className="mt-3 whitespace-pre-line">
        {children}
      </div>
    </div>
  );
}