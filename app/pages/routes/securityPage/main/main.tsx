export default function Main() {
    return (
        <section className="bg-[#1C1C1C] rounded-[20px] phone:my-[30px] 2xl:my-[55px] phone:px-[14px] phone:pt-[14px] phone:pb-0 2xl:p-[40px] 4xl:p-[50px] phone:mx-[20px] 2xl:mx-[80px] relative">
            <img src="/careers/right_abstract.png" alt="" className="absolute phone:w-[200px] 2xl:w-[334px] 4xl:w-[505px] right-0 top-0" />


            <div className="relative z-[999] flex flex-col-reverse main:flex-row justify-end">
                <div className="phone:relative main:absolute w-full main:w-[53%] translate-y-[-28px] main:translate-y-0 main:top-0 main:left-0 box-border bg-[#1A1A1A] phone:p-[20px] 2xl:p-[40px] main:p-[60px] 4xl:p-[80px] phone:rounded-[20px] main:rounded-0 main:rounded-tl-[20px] main:rounded-bl-[20px] main:rounded-br-[60px] main:rounded-r-[0px] flex flex-col gap-[20px]">
                    <p className="font-[Lexend-Medium] text-white main:w-[480px] 4xl:w-[570px] phone:text-[28px] 2xl:text-[48px] 5xl:text-[58px] leading-[150%] phone:text-center 2xl:text-left">Your Security is Our <span className="text-[#CAFF33]">Top Priority</span></p>


                    <p className="font-[Lexend-Light] text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 5xl:text-[18px] phone:text-center 2xl:text-left">
                        At YourBank, we understand the importance 
                        of keeping your financial information secure. 
                        We employ robust security measures and advanced 
                        technologies to protect your personal and 
                        financial data. Rest assured that when you 
                        bank with us, your security is our utmost priority.
                    </p>

                </div>

                <img src="/security/main.png" alt="" className="main:w-[60%] rounded-[16px]" />
            </div>
        </section>
    )
}
