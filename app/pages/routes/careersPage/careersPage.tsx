import Header from "./header/header"
import Frequently from "./frequently/frequently"
import Start from "./start/start"
import Footer from "./footer/footer"
import Main from "./main/Main"

export function CareersPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <img src="/left-abstract.png" alt="" className="absolute top-0 w-[540px] 4xl:w-[750px] z-[1]"/>
      <Header />
      <Main />
      <Frequently />
      <Start />
      <Footer />
    </main>
  )
}
