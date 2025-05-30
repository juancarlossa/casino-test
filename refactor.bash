components=(
  TopCasinos
  ComparativaBonos
  IntroCasinos
  HistoriaJuegoOnline
  MarcoLegal
  VentajasJugar
  ComparativaOnlineFisico
  ComoElegirMejorCasino
  SenalesAlerta
  MediosPago
  ComparativaPago
  Testimonios
  PreguntasFrecuentes
  Conclusiones
  PracticalTips
  RecomendacionesFinales
)

for comp in "${components[@]}"; do
  # Convierte CamelCase a kebab-case
  slug=$(echo "$comp" | sed -E 's/([a-z])([A-Z])/\1-\L\2/g' | tr '[:upper:]' '[:lower:]')
  
  folder="src/app/$slug"
  mkdir -p "$folder"

  cat > "$folder/page.tsx" <<EOF
import { ${comp} } from '@/components/body/${comp}';

export default function Page() {
  return <${comp} />;
}
EOF

done