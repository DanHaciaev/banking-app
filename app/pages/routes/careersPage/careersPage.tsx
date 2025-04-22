import Header from "./header/header"
import Main from "./main/main"
import Values from "./values/values"
import Benefits from "./benefits/benefits"
import Frequently from "./frequently/frequently"
import Start from "./start/start"
import Footer from "./footer/footer"
import Openings from "./openings/openings"


export function CareersPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <Header />
      <Main />
      <Values />
      <Benefits />
      <Openings />
      <Frequently />
      <Start />
      <Footer />
    </main>
  )
}
