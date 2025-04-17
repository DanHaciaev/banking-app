import Header_Login from "./header/header"
import LoginForm from "./loginSquare/loginform"
import Testimonials from "./testimonials/testimonials"
import Footer from "./footer/footer"

export function Login() {
  return (
    <main className="bg-[#1A1A1A] pt-[30px] h-fit">
      <Header_Login />
      <LoginForm />
      <Testimonials />
      <Footer />
    </main>
  )
}
