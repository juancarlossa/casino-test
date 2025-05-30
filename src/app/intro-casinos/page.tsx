import { HistoriaJuegoOnline } from '@/components/body/HistoriaJuegoOnline';
import { IntroCasinos } from '@/components/body/IntroCasinos';
import { MarcoLegal } from '@/components/body/MarcoLegal';

export default function Page () {
  return (
    <>
      <IntroCasinos />;
      <HistoriaJuegoOnline />
      <MarcoLegal />
    </>
  )
}
