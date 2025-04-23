import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Закрытие меню при ресайзе, если вышли за пределы моб. разрешения
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="2xl:mx-[80px] phone:mx-[16px] bg-[#1C1C1C] py-[14px] px-[24px] rounded-[100px] flex items-center justify-between relative">
      <img src="/login/logo.png" alt="" className="2xl:w-[117px] 4xl:w-[156px] phone:w-[102px]" />

      {/* Desktop Nav */}
      <nav className="flex items-center gap-[26px] text-white text-[14px] 4xl:text-[18px] phone:hidden 2xl:flex">
        <Link to="/">Home</Link>
        <Link to="/careers" className="bg-[#262626] rounded-[82px] px-[24px] py-[12px]">Careers</Link>
        <Link to="/about">About</Link>
        <Link to="/security">Security</Link>
      </nav>

      {/* Desktop Auth */}
      <div className="flex items-center gap-[20px] phone:hidden 2xl:flex">
        <Link to="/signUp" className="text-white text-[14px] 4xl:text-[18px]">Sign Up</Link>
        <Link to="/logIn" className="bg-[#CAFF33] rounded-[82px] py-[12px] px-[24px] text-[#1C1C1C] text-[14px] 4xl:text-[18px]">Login</Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="bg-[#CAFF33] rounded-[82px] py-[6px] px-[12px] 2xl:hidden z-[10000]">
        <img src="/login/menu.png" alt="Menu" className="w-[24px]" />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute z-[9999] right-[20px] left-[20px] top-[80px]
          bg-[#1C1C1C] rounded-[8px] overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-[20px] items-center p-[20px]">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/careers" className="bg-[#262626] rounded-[82px] px-[24px] py-[12px] text-white">Careers</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/security" className="text-white">Security</Link>
          <Link to="/signUp" className="text-white text-[14px] 4xl:text-[18px] mt-[20px]">Sign Up</Link>
          <Link to="/logIn" className="bg-[#CAFF33] rounded-[82px] py-[12px] w-fit px-[24px] text-[#1C1C1C] text-[14px] 4xl:text-[18px]">Login</Link>
        </div>
      </div>
    </header>
  );
}
