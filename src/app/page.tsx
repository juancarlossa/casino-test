import { ComoElegirMejorCasino } from "@/components/body/ComoElegirMejorCasino";
import { ComparativaBonos } from "@/components/body/ComparativaBonos";
import { ComparativaOnlineFisico } from "@/components/body/ComparativaOnlineFisico";
import { Conclusiones, PracticalTips, RecomendacionesFinales } from "@/components/body/Conclusiones";
import { HistoriaJuegoOnline } from "@/components/body/HistoriaJuegoOnline";
import { HeroHighlightFull } from "@/components/body/HeroHighlightFull";
import { IntroCasinos } from "@/components/body/IntroCasinos";
import { MarcoLegal } from "@/components/body/MarcoLegal";
import { ComparativaPago, MediosPago } from "@/components/body/MediosPago";
import { PreguntasFrecuentes } from "@/components/body/PreguntasFrecuentes";
import { SenalesAlerta } from "@/components/body/SenalesAlerta";
import { Testimonios } from "@/components/body/Testimonios";
import { TopCasinos } from "@/components/body/TopCasinos";
import { VentajasJugar } from "@/components/body/VentajasJugar";

export default async function Home () {
  return (
    <div className="flex w-full flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]" id="home">
      <HeroHighlightFull />


      {/* CAMBIAR WIDHT del contenido SOLO DESDE AQUI */}
      <div className="row-start-2 flex w-full flex-col items-center justify-center gap-y-10 pb-10" >

        <TopCasinos />
        <ComparativaBonos />

        <IntroCasinos />
        <HistoriaJuegoOnline />
        <MarcoLegal />
        <VentajasJugar />
        <ComparativaOnlineFisico />
        <ComoElegirMejorCasino />
        <SenalesAlerta />
        <MediosPago />
        <ComparativaPago />
        <Testimonios />

        <PreguntasFrecuentes />
        <Conclusiones />
        <PracticalTips />
        <RecomendacionesFinales />
      </div>
    </div>
  );
}
