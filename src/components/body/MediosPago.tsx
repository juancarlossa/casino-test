'use client'
import { CheckCircle, Lock, XCircle } from "lucide-react";
import { Section } from "../layout/Section";
import { Card } from "../ui/card";
import { ShineBorder } from "../magicui/shine-border";
import { StarSvg } from "./Conclusiones";
import { useEffect, useState } from "react";

const paymentMethods = [
  { metodo: "Tarjetas", deposito: "Instantáneo", retiro: "1-3 días", minimo: "€10", maximo: "5.000€/semana", comisiones: "Ninguna" },
  { metodo: "PayPal", deposito: "Instantáneo", retiro: "Hasta 24h", minimo: "€10", maximo: "5.000€/semana", comisiones: "Ninguna" },
  { metodo: "Bizum", deposito: "Instantáneo", retiro: "Hasta 24h", minimo: "€5", maximo: "1.000€/día", comisiones: "Ninguna" },
  { metodo: "Transferencia", deposito: "1-3 días", retiro: "3-5 días", minimo: "€20", maximo: "10.000€/semana", comisiones: "Variable" },
  { metodo: "Paysafecard", deposito: "Instantáneo", retiro: "No disponible", minimo: "€10", maximo: "1.000€/transacción", comisiones: "Ninguna" },
];

const paymentComparison = [
  {
    metodo: "PayPal",
    icono: "P",
    ventajas: [
      "Máxima seguridad al no compartir datos bancarios",
      "Procesamiento rápido",
      "Interfaz familiar"
    ],
    desventajas: [
      "No disponible en todos los casinos",
      "Ocasionalmente excluido de bonos"
    ],
    ideal: "Usuarios preocupados por la privacidad y seguridad"
  },
  {
    metodo: "Tarjetas de crédito/débito",
    icono: "T",
    ventajas: [
      "Universalmente aceptadas",
      "Depósitos instantáneos",
      "Facilidad de uso"
    ],
    desventajas: [
      "Tiempos de retiro más largos",
      "Exposición de datos bancarios"
    ],
    ideal: "Jugadores ocasionales que prefieren simplicidad"
  },
  {
    metodo: "Transferencias bancarias",
    icono: "TB",
    ventajas: [
      "Alta seguridad",
      "Límites elevados",
      "Confidencialidad"
    ],
    desventajas: [
      "Procesos lentos",
      "Datos bancarios requeridos",
      "Comisiones posibles"
    ],
    ideal: "Jugadores con presupuestos elevados que valoran seguridad sobre velocidad"
  },
  {
    metodo: "Bizum",
    icono: "B",
    ventajas: [
      "Sistema español familiar",
      "Transacciones inmediatas",
      "Facilidad de uso"
    ],
    desventajas: [
      "Límites relativamente bajos",
      "No disponible para extranjeros"
    ],
    ideal: "Jugadores españoles que buscan conveniencia y rapidez"
  },
  {
    metodo: "Paysafecard",
    icono: "PS",
    ventajas: [
      "Anonimato completo",
      "Control estricto de gastos",
      "No requiere cuenta bancaria"
    ],
    desventajas: [
      "Solo para depósitos",
      "Requiere compra previa en punto físico"
    ],
    ideal: "Control de presupuesto y máxima privacidad"
  },
  {
    metodo: "Monederos electrónicos (Skrill/Neteller)",
    icono: "ME",
    ventajas: [
      "Transacciones rápidas",
      "Diseñados específicamente para juego online"
    ],
    desventajas: [
      "Posibles comisiones",
      "A menudo excluidos de bonos"
    ],
    ideal: "Jugadores habituales que realizan muchas transacciones"
  }
];

const steps = [
  {
    number: 1,
    title: 'Tecnologías de cifrado',
    items: [
      { text: 'Encriptación SSL de 256 bits: Estándar bancario que establece conexiones seguras' },
      { text: 'Almacenamiento segmentado: Separación entre datos personales y financieros' },
      { text: 'Autenticación de dos factores (2FA): Capa adicional de seguridad en accesos' },
    ],
  },
  {
    number: 2,
    title: 'Protección de identidad',
    items: [
      { text: 'Control de edad riguroso (KYC)' },
      { text: 'Protección anti fraude y anti lavado' },
      { text: 'Verificación documental para retiros importantes' },
    ],
  },
  {
    number: 3,
    title: 'Justicia en el juego',
    items: [
      { text: 'Generadores de Números Aleatorios (RNG) certificados' },
      { text: 'Auditorías independientes de porcentajes de pago' },
      { text: 'Pruebas periódicas por entidades como GLI o eCOGRA' },
    ],
  },
];

export function MediosPago () {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsLg(window.innerWidth >= 1024); // Tailwind lg breakpoint = 1024px
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Section
      title="Métodos de Pago y Seguridad en Casinos Online"
      description="Conoce las opciones más seguras y convenientes para gestionar tu dinero en casinos online."
    >

      <div id="metodospago" className="relative w-full overflow-hidden rounded-lg border border-indigo-700 shadow-lg shadow-indigo-900">
        <table className="w-full rounded-lg text-left text-sm">
          <thead className="bg-indigo-800">
            <tr>
              <th className="p-3">Método</th>
              <th className="p-3">Depósito</th>
              <th className="p-3">Retiro</th>
              <th className="p-3">Mínimo</th>
              <th className="p-3">Máximo</th>
              <th className="p-3">Comisiones</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((item, idx) => (
              <tr key={idx} className="border-b transition-colors duration-200 hover:bg-indigo-700">
                <td className="p-3">{item.metodo}</td>
                <td className="p-3">{item.deposito}</td>
                <td className="p-3">{item.retiro}</td>
                <td className="p-3">{item.minimo}</td>
                <td className="p-3">{item.maximo}</td>
                <td className="p-3">{item.comisiones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8" id="protocolos">
        <div className="flex flex-row items-start justify-start gap-x-2">
          <Lock className="pt-2 text-yellow-400" />
          <h2 className="mb-4 text-2xl font-bold">Protocolos de Seguridad y Cifrado</h2>
        </div>
        <p className="mb-4">
          La seguridad representa una prioridad absoluta en los casinos online con dinero real, implementando diversas tecnologías para proteger a los usuarios:
        </p>

        {/* --- Lista de pasos --- */}
        {steps.map((step) => (
          <div
            key={step.number}
            className="mb-10 flex flex-row items-start space-x-3"
            style={isLg ? { paddingLeft: `${10 * step.number}rem` } : undefined}
          >
            <div className="mt-1 flex items-center justify-center rounded-full bg-yellow-600 text-sm font-bold text-white">
              <span className="flex h-[20px] w-[20px] items-center justify-center">{step.number}</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{step.title}</h3>
              <ul className="space-y-2 border-l-2 border-indigo-500 pl-4">
                {step.items.map((item, index) => (
                  <li key={index} className="rounded-md bg-indigo-800/30 p-2 text-sm text-indigo-100">
                    {item.text.split(':')[0]}
                    {item.text.includes(':') && `: ${item.text.split(':').slice(1).join(':').trim()}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="rounded-md bg-green-100 p-4 text-sm text-green-800">
          Estos sistemas de seguridad múltiples garantizan que tanto la información personal como las transacciones financieras de los usuarios están protegidas con los estándares más avanzados, comparables a los utilizados por instituciones bancarias.
        </div>
      </div>
    </Section>
  );
};

export function ComparativaPago () {
  return (
    <Section
      title="Comparativa de Medios de Pago"
      description="Cada método de pago presenta ventajas y desventajas específicas que debes considerar según tus prioridades:"
    >
      <div id="mediospago" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paymentComparison.map((item, idx) => (
          <Card key={idx} className="relative flex justify-between overflow-hidden rounded-xl border p-4 shadow-md">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="mb-2 flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-600 text-indigo-200 font-bold">
                {item.icono}
              </div>
              <h3 className="text-md font-semibold text-indigo-200">{item.metodo}</h3>
            </div>
            <div className="mb-2">
              <ul className="text-sm">
                {item.ventajas.map((v, i) => (
                  <li className="text-xs flex gap-x-2 items-center text-green-500" key={i}>
                    <CheckCircle className="h-4 w-4" />
                    <p>{v}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2">
              <ul className="text-sm">
                {item.desventajas.map((d, i) => (
                  <li className="text-xs flex gap-x-2 items-center text-red-500" key={i}>
                    <XCircle className="h-4 w-4" />
                    <p>{d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-x-2">
              <StarSvg />
              <p className="mt-2 text-sm text-indigo-200">
                <strong>Ideal para:</strong> {item.ideal}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-indigo-800 px-5 py-5 text-center text-sm">
        Casinos como <strong>LeoVegas</strong> y <strong>Luckia</strong> destacan por ofrecer la mayoría de estos métodos, proporcionando flexibilidad para diferentes preferencias de usuarios.
      </div>
    </Section>
  );
};
