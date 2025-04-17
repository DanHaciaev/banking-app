import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] flex flex-col phone:pt-[50px] phone:px-[20px] phone:pb-[30px] phone:gap-[30px] 2xl:gap-[40px] 4xl:gap-[50px] 2xl:pt-[60px] 2xl:px-[80px] 4xl:px-[162px] 4xl:pt-[100px] 4xl:pb-[50px] items-center">
            <div className="flex flex-col items-center phone:gap-[24px] 2xl:gap-[40px] 4xl:gap-[50px]">
                <img src="/login/logo.png" alt="" className="phone:w-[132px] 4xl:w-[156px]" />

                <nav className="flex items-center phone:gap-[14px] 4xl:gap-[26px] text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
                    <Link to="/">Home</Link>
                    <p>Careers</p>
                    <p>About</p>
                    <p>Security</p>
                </nav>
            </div>

            <hr className="border-t-[1px] border-[#262626] w-full" />

            <div className="flex justify-center items-center gap-[20px] 2xl:text-[16px] 4xl:text-[18px] flex-wrap">
                <div className="flex items-center gap-[6px]">
                    <img src="/login/mail.png" alt="" className="w-[20px]" />
                    <p className="text-[#E4E4E7]">hello@skillbirdge.com</p>
                </div>
                <div className="flex items-center gap-[6px]">
                    <img src="/login/phone.png" alt="" className="w-[20px]" />
                    <p className="text-[#E4E4E7]">+91 91813 23 2309</p>
                </div>
                <div className="flex items-center gap-[6px]">
                    <img src="/login/point.png" alt="" className="w-[20px]" />
                    <p className="text-[#E4E4E7]">Somewhere in the World</p>
                </div>
            </div>

            <hr className="border-t-[1px] border-[#262626] w-full" />

            <div className="border-[1px] phone:relative 2xl:static border-[#262626] bg-[#1A1A1A] phone:pt-[50px] phone:pl-[12px] phone:pb-[30px] phone:pr-[24px] 2xl:py-[12px] 4xl:py-[16px] 4xl:pl-[16px] 4xl:pr-[30px] w-full rounded-full flex items-center phone:flex-col 2xl:flex-row phone:gap-[20px] 2xl:gap-0 2xl:justify-between phone:mt-[24px] 2xl:mt-0">
                <div className="phone:absolute top-[-22px] 2xl:static flex items-center gap-[8px]">
                    <div className="bg-[#CAFF33] rounded-full phone:p-[12px] phone:w-[44px] 4xl:p-[14px] 4xl:w-[52px]">
                        <img src="/login/facebook_black.png" alt="" />
                    </div>
                    <div className="bg-[#CAFF33] rounded-full phone:p-[12px] phone:w-[44px] 4xl:p-[14px] 4xl:w-[52px]">
                        <img src="/login/twitter.png" alt="" />
                    </div>
                    <div className="bg-[#CAFF33] rounded-full phone:p-[12px] phone:w-[44px] 4xl:p-[14px] 4xl:w-[52px]">
                        <img src="/login/linkedin.png" alt="" />
                    </div>
                </div>

                <p className="text-[#B3B3B3] 2xl:text-[14px] 4xl:text-[18px]">YourBank All Rights Reserved</p>

                <p className="text-[#B3B3B3] 2xl:text-[14px] 4xl:text-[18px]">Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    )
}
