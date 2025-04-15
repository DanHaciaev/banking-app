import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="2xl:mx-[80px] phone:mx-[16px] bg-[#1C1C1C] py-[14px] px-[24px] rounded-[100px] flex items-center justify-between">
      <img src="/login/logo.png" alt="" className="2xl:w-[117px] 4xl:w-[156px] phone:w-[102px]" />

      <nav className="flex items-center gap-[26px] text-white text-[14px] 4xl:text-[18px] phone:hidden 2xl:flex">
        <Link to="/">Home</Link>
        <p>Careers</p>
        <p>About</p>
        <p>Security</p>
      </nav>

      <div className="flex items-center gap-[20px] phone:hidden 2xl:flex">
        <Link to="/signUp" className="text-white text-[14px] 4xl:text-[18px]">Sign Up</Link>
        <Link to="/logIn" className="bg-[#CAFF33] rounded-[82px] py-[12px] px-[24px] text-[#1C1C1C] text-[14px] 4xl:text-[18px]">Login</Link>
      </div>

      <div className="bg-[#CAFF33] rounded-[82px] py-[6px] px-[12px] 2xl:hidden">
        <img src="/login/menu.png" alt="" className="w-[24px]"/>
      </div>
    </header>
  )
}
