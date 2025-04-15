import Header from "./header/header"
import OpenAcc from "./openAcc/openAcc"
import Products from "./products/products"
import UseCases from "./cases/useCases"
import Features from "./features/features"
import Frequently from "./frequently/frequently"
import Testimonials from "./testimonials/testimonials"
import Start from "./start/start"
import Footer from "./footer/footer"

export function MainPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <img src="/left-abstract.png" alt="" className="absolute top-0 w-[540px] 4xl:w-[750px] z-[1]"/>
      <Header />
      <OpenAcc />
      <Products />
      <UseCases />
      {/* <Features />
      <Frequently />
      <Testimonials/>
      <Start />
      <Footer /> */}
    </main>
  )
}
