import Header from "./header/header"
import Main from "./main/main"
import Mission from "./mission/mission"
import Press from "./press/press"
import Footer from "./footer/footer"


export function AboutPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <Header />
      <Main />
      <Mission />
      <Press />
      <Footer />
    </main>
  )
}
