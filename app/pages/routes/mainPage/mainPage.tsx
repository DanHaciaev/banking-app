import Header from "./header/header"
import OpenAcc from "./openAcc/openAcc"
import Products from "./products/products"
import UseCases from "./cases/useCases"
import Testimonials from "./testimonials/testimonials"
import Footer from "./footer/footer"

export function MainPage() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <img src="/left-abstract.png" alt="" className="absolute top-0 w-[540px] z-[1]"/>
      <Header />
      <OpenAcc />
      <Products />
      <UseCases />
      <Testimonials/>
      <Footer />
    </main>
  )
}
