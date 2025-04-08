export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] flex flex-col gap-[40px] pt-[60px] px-[80px] pb-[30px] items-center">
            <div className="flex flex-col items-center gap-[40px]">
                <img src="/login/logo.png" alt="" className="w-[132px]" />

                <nav className="flex items-center gap-[14px] text-white text-[14px]">
                    <p>Home</p>
                    <p>Careers</p>
                    <p>About</p>
                    <p>Security</p>
                </nav>
            </div>

            <div className="flex justify-center items-center gap-[20px] py-[40px] border-t-[1px] border-b-[1px] border-[#262626] w-full">
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

            <div className="border-[1px] border-[#262626] bg-[#1A1A1A] py-[12px] pl-[12px] pr-[24px] w-full rounded-full flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                    <div className="bg-[#CAFF33] rounded-full p-[12px] w-[44px]">
                        <img src="/login/facebook_black.png" alt=""/>
                    </div>
                    <div className="bg-[#CAFF33] rounded-full p-[12px] w-[44px]">
                        <img src="/login/twitter.png" alt="" />
                    </div>
                    <div className="bg-[#CAFF33] rounded-full p-[12px] w-[44px]">
                        <img src="/login/linkedin.png" alt="" />
                    </div>
                </div>

                <p className="text-[#B3B3B3] text-[14px]">YourBank All Rights Reserved</p>

                <p className="text-[#B3B3B3] text-[14px]">Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    )
}
