import Header from "./header/header"
import Main from "./main/main"
import Values from "./values/values"
import Benefits from "./benefits/benefits"
import Frequently from "./frequently/frequently"
import Start from "./start/start"
import Footer from "./footer/footer"


export function CareersPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <img src="/left-abstract.png" alt="" className="absolute top-0 w-[540px] 4xl:w-[750px] z-[1]"/>
      <Header />
      <Main />
      <Values />
      <Benefits />
      <Frequently />
      <Start />
      <Footer />
    </main>
  )
}
