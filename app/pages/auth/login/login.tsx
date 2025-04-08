import Header_Login from "./header/header"
import LoginForm from "./loginSquare/loginform"
import Testimonials from "./testimonials/testimonials"
import Footer from "./footer/footer"

export function Login() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit relative z-[9999]">
      <img src="/left-abstract.png" alt="" className="absolute top-0 w-[540px] z-[1]"/>
      <Header_Login />
      <LoginForm />
      <Testimonials />
      <Footer />
    </main>
  )
}
