import Header from "./header/header"
import Main from "./main/main"
import Protect from "./protect/protect"
import Frequently from "./frequently/frequently"
import Footer from "./footer/footer"


export function SecurityPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <Header />
      <Main />
      <Protect />
      <Frequently />
      <Footer />
    </main>
  )
}
