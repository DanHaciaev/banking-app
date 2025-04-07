import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="mx-[80px] bg-[#1C1C1C] py-[14px] px-[24px] rounded-[100px] flex items-center justify-between">
      <img src="/login/logo.png" alt="" className="w-[117px]" />

      <nav className="flex items-center gap-[26px] text-white text-[14px]">
        <Link to="/">Home</Link>
        <p>Careers</p>
        <p>About</p>
        <p>Security</p>
      </nav>

      <div className="flex items-center gap-[20px]">
        <Link to="/signUp" className="text-white text-[14px]">Sign Up</Link>
        <Link to="/logIn" className="bg-[#CAFF33] rounded-[82px] py-[12px] px-[24px] text-[#1C1C1C] text-[14px]">Login</Link>
      </div>
    </div>
  )
}
