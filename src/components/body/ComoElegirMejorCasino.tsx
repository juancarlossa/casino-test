import { CreditCard, Gamepad, LucideIcon, ShieldCheck, Smile } from "lucide-react";
import { Section } from "../layout/Section";
import { ReactNode } from "react";
import { BorderBeam } from "../magicui/border-beam";
import { Card, CardContent } from "../ui/card";

const iconClass = "h-6 w-6 text-yellow-400";
const sectionTitleClass = "ml-3 text-lg font-semibold text-yellow-400";
const listStyle = "ml-5 list-inside list-disc";
const paragraphClass = "text-sm";

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center">{children}</div>
);

function BulletSection ({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="relative overflow-hidden rounded-lg border border-indigo-700 bg-indigo-950 p-5">
      <CardContent className="flex flex-col space-y-3">
        <IconWrapper>
          <Icon className={iconClass} />
          <h3 className={sectionTitleClass}>{title}</h3>
        </IconWrapper>
        {children}
      </CardContent>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
}

/* --- Contenido en constantes --- */

const LICENCIAS_PARRAFO =
  "Al seleccionar un casino online con dinero real, el factor más crucial es su legitimidad legal y nivel de seguridad. Sigue estos pasos para garantizar una elección segura:";

const LICENCIAS_LIST = [
  {
    title: "Verifica la licencia oficial de la DGOJ",
    items: [
      "Comprueba que el operador aparece en el listado oficial del regulador",
      "Busca el número de licencia en la parte inferior de la página del casino",
    ],
  },
  {
    title: "Examina los sellos de seguridad",
    items: [
      'Logo oficial de "Juego Seguro"',
      'Indicativo "+18" claramente visible',
      'Sello "Jugar Bien" para promoción del juego responsable',
    ],
  },
  {
    title: "Confirma los protocolos de seguridad tecnológica",
    items: [
      'Encriptación SSL (visible con “https://” en la URL)',
      "Certificaciones como GLI o DigiCert",
      "Políticas de protección de datos conforme al RGPD",
    ],
  },
];

const VARIEDAD_PARRAFO = "Un factor determinante en la elección de un casino online es la diversidad y calidad de su catálogo de juegos. Estos son los aspectos clave a considerar:";

const VARIEDAD_LIST = [
  {
    title: "Amplitud del catálogo",
    items: [
      "Mínimo de 500 juegos para una buena variedad",
      "Equilibrio entre tragaperras, juegos de mesa y casino en vivo",
      "Presencia de títulos exclusivos o de edición limitada",
    ],
  },
  {
    title: "Calidad de los proveedores",
    items: [
      "Colaboración con desarrolladores premium como ",
      <><strong>Evolution Gaming</strong>, <strong>NetEnt</strong> y <strong>Pragmatic Play</strong></>,
      "Actualizaciones regulares con los últimos lanzamientos",
      "Variedad de estudios para garantizar diversidad de estilos",
    ],
  },
  {
    title: "Aspectos técnicos a valorar",
    items: [
      "RTP superior al 96% de media",
      "Disponibilidad de versiones demo",
      "Optimización para móviles sin pérdida de calidad",
    ],
  },
];

const METODOS_PAGO = [
  {
    title: "Opciones de pago:",
    items: [
      "Tarjetas (Visa, MasterCard)",
      "Monederos electrónicos (PayPal, Skrill, Neteller)",
      "Transferencias bancarias",
      "Métodos locales (Bizum)",
      "Tarjetas prepago (Paysafecard)",
    ],
  },
  {
    title: "Condiciones:",
    items: [
      "Mínimos accesibles (5€–10€)",
      "Procesamiento instantáneo",
      "Sin comisiones",
      "Compatibilidad con bonos",
    ],
  },
];

const OPINIONES_LIST = [
  {
    title: "Fuentes fiables:",
    items: [
      "Foros de juego online",
      "Plataformas de reseñas",
      "Trustpilot o similares",
      "Redes sociales del operador",
    ],
  },
  {
    title: "Aspectos clave:",
    items: [
      "Puntualidad en pagos",
      "Calidad del soporte",
      "Transparencia en condiciones",
      "Resolución de problemas",
    ],
  },
];


/* --- Componentes auxiliares para listas --- */

const ListWithTitle = ({
  list,
  isDecimal = true,
}: {
  list: { title: string; items: ReactNode[] | string[] }[];
  isDecimal?: boolean;
}) => (
  <ul
    className={`list-inside ${isDecimal ? "list-decimal space-y-5 marker:text-yellow-400" : "list-disc space-y-1"
      }`}
  >
    {list.map(({ title, items }, i) => (
      <li key={i} className="">
        <strong className="text-yellow-400">{title}</strong>
        <ul className={listStyle}>
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

/* --- Componente principal --- */

export function ComoElegirMejorCasino () {
  return (
    <Section
      title="Cómo Elegir el Mejor Casino con Dinero Real"
      description="Seleccionar el casino adecuado es fundamental para disfrutar de una experiencia segura y satisfactoria."
    >
      <div id="comoelegir" className="grid gap-8 text-left text-sm md:grid-cols-2">
        {/* Licencias y Seguridad */}
        <BulletSection
          title="Licencias y Seguridad"
          icon={ShieldCheck}
        >
          <p className={paragraphClass}>{LICENCIAS_PARRAFO}</p>
          <ListWithTitle list={LICENCIAS_LIST} />
        </BulletSection>

        {/* Variedad de Juegos */}
        <BulletSection
          title="Variedad de Juegos y Software"
          icon={Gamepad}
        >
          <p className={paragraphClass}>{VARIEDAD_PARRAFO}</p>
          <ListWithTitle list={VARIEDAD_LIST} />
        </BulletSection>

        {/* Métodos de pago */}
        <BulletSection
          title="Métodos de Pago y Depósitos"
          icon={CreditCard}
        >
          <p className={paragraphClass}>{VARIEDAD_PARRAFO}</p>
          <ListWithTitle list={METODOS_PAGO} />
        </BulletSection>

        {/* Opiniones y reputación */}
        <BulletSection
          title="Opiniones y Reputación"
          icon={Smile}
        >
          <p className={paragraphClass}>{VARIEDAD_PARRAFO}</p>
          <ListWithTitle list={OPINIONES_LIST} />
        </BulletSection>

      </div>
    </Section>
  );
}
