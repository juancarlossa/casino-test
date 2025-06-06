import { CasinosList } from "@/components/juankui/casinos/casino-list";
import CreateCasino from "@/components/juankui/casinos/create-casino";
import { Section } from "@/components/layout/Section";


export default function CasinosPage () {
  return (
    <Section title="Casinos">
      <CasinosList />
      <CreateCasino />
    </Section>
  )
}