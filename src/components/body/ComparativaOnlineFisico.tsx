import { CheckCircle, XCircle } from "lucide-react";
import { Section } from "../layout/Section";

const HEADERS = ["Característica", "Casino Online", "Casino Físico"];

const COMPARATIVA = [
  {
    label: "Accesibilidad",
    online: { text: "24/7 desde cualquier lugar", color: "text-green-500" },
    fisico: { text: "Horario limitado, requiere desplazamiento", color: "text-red-500" },
  },
  {
    label: "Variedad de juegos",
    online: { text: "Miles de opciones", color: "text-green-500" },
    fisico: { text: "Limitado por espacio físico", color: "text-red-500" },
  },
  {
    label: "Bonos y promociones",
    online: { text: "Abundantes y generosos", color: "text-green-500" },
    fisico: { text: "Escasos o inexistentes", color: "text-red-500" },
  },
  {
    label: "Apuestas mínimas",
    online: { text: "Desde 0,01€", color: "text-green-500" },
    fisico: { text: "Generalmente más altas", color: "text-red-500" },
  },
  {
    label: "Porcentaje de pago (RTP)",
    online: { text: "95-98%", color: "text-green-500" },
    fisico: { text: "70-90%", color: "text-red-500" },
  },
];

export function ComparativaOnlineFisico () {
  return (
    <Section
      title="Comparativa: Online vs. Físico"
      description="Descubre por qué cada vez más jugadores eligen los casinos online frente a los tradicionales"
    >
      <div id="online-fisico" className="relative w-full lg:overflow-hidden overflow-x-auto rounded-lg border border-indigo-700 shadow-lg shadow-indigo-900">
        <table className="w-full text-left text-sm">
          <thead className="bg-indigo-700 text-white">
            <tr>
              {HEADERS.map((header) => (
                <th key={header} className="px-6 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {COMPARATIVA.map(({ label, online, fisico }) => (
              <tr key={label} className="transition-colors duration-200 hover:bg-indigo-900">
                <td className="px-6 py-4">{label}</td>
                <td className={`px-6 py-4 flex items-center gap-x-2 ${online.color}`}>
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <p>{online.text}</p>

                </td>
                <td className={` px-6 py-4 ${fisico.color}`}>
                  <div className="flex gap-x-2 items-center">
                    <XCircle className="h-4 w-4 shrink-0" />
                    <p>{fisico.text}</p>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
