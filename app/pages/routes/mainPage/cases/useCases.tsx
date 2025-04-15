export default function UseCases() {
    return (
        <section className="flex flex-col gap-[80px] mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex flex-col gap-[10px]">
                <p className="text-[#CAFF33] phone:text-center 2xl:text-left phone:text-[28px] 2xl:text-[38px] 4xl:text-[48px]"><span className="text-white">Use </span>Cases</p>
                <p className="text-[#B3B3B3] phone:text-center 2xl:text-left text-[14px] 4xl:text-[18px]">
                    At YourBank, we cater to the diverse
                    needs of individuals and businesses
                    alike, offering a wide range of
                    financial solutions
                </p>
            </div>


            <div className="flex flex-col mx-auto gap-[40px]">
                <div className="flex items-center phone:flex-col 3xl:flex-row gap-[60px]">
                    {/* Left top block */}
                    <div className="bg-[#1C1C1C] rounded-[20px] phone:p-[20px] case:p-[40px] 4xl:p-[50px] relative">
                        <img src="/mainPage/cases_abstract.png" alt="" className="absolute left-0 top-0 phone:w-[118px] case:w-[224px]" />
                        <div className="relative z-[9999] grid grid-cols-2 gap-[10px]">
                            {/* First block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px] phone:max-w-[154px] case:max-w-fit">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/managing.png" alt="Checking Accounts" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Managing Personal Finances</p>
                            </div>

                            {/* Second block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px] ">
                                        <img src="/mainPage/saving.png" alt="Checking Accounts" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Saving for the Future</p>
                            </div>

                            {/* Third block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10 border-[1px]">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/homeownership.png" alt="Checking Accounts" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Homeownership</p>
                            </div>

                            {/* Fourth block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/education.png" alt="Checking Accounts" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Education Funding</p>
                            </div>
                        </div>
                    </div>

                    {/* Right top block */}
                    <div className="flex flex-1 phone:max-w-[609px] phone:items-center 3xl:items-start 3xl:min-w-0 flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px] phone:items-center 3xl:items-start">
                            <p className="phone:text-[20px] 2xl:text-[26px] 4xl:text-[30px] text-white">For Individuals</p>

                            <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3] phone:text-center 3xl:text-left">
                                For individuals, our mortgage services
                                pave the way to homeownership, and our
                                flexible personal loans provide vital
                                support during various life milestones.
                                We also prioritize retirement planning,
                                ensuring a financially secure future for
                                our customers</p>
                        </div>

                        <div className="flex case:items-start gap-[30px] phone:flex-col case:flex-row phone:items-center">
                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">78%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Secure Retirement Planning</p>
                            </div>

                            <div className="border-[1px] border-dashed phone:w-full case:border-0 case:border-l-[2px] case:w-auto case:h-[102px] 4xl:h-[141px] border-[#262626]"></div>

                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">63%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Manageable Debt Consolidation</p>
                            </div>

                            <div className="border-[1px] border-dashed phone:w-full case:border-0 case:border-l-[2px] case:w-auto case:h-[102px] 4xl:h-[141px] border-[#262626]"></div>

                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">91%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Reducing financial burdens</p>
                            </div>

                        </div>

                        <button className="bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[82px] py-[14px] px-[20px] w-fit text-white 2xl:text-[14px] 4xl:text-[18px]">Learn More</button>
                    </div>
                </div>






                <div className="flex items-center phone:flex-col-reverse 3xl:flex-row gap-[60px]">
                    {/* Left bottom block */}
                    <div className="flex flex-1 phone:max-w-[609px] phone:items-center 3xl:items-start 3xl:min-w-0 flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px] phone:items-center 3xl:items-start">
                            <p className="phone:text-[20px] 2xl:text-[26px] 4xl:text-[30px] text-white">For Business</p>

                            <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3] phone:text-center 3xl:text-left">
                                For businesses, we empower growth with
                                working capital solutions that optimize
                                cash flow, and our tailored financing
                                options fuel business expansion. Whatever
                                your financial aspirations, YourBank is
                                committed to providing the right tools
                                and support to achieve them
                            </p>
                        </div>

                        <div className="flex case:items-start gap-[30px] phone:flex-col case:flex-row phone:items-center">
                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">65%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Cash Flow Management</p>
                            </div>

                            <div className="border-[1px] border-dashed phone:w-full case:border-0 case:border-l-[2px] case:w-auto case:h-[102px] 4xl:h-[141px] border-[#262626]"></div>

                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">70%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Drive Business Expansion</p>
                            </div>

                            <div className="border-[1px] border-dashed phone:w-full case:border-0 case:border-l-[2px] case:w-auto case:h-[102px] 4xl:h-[141px] border-[#262626]"></div>

                            <div className="phone:text-center case:text-left">
                                <p className="phone:text-[40px] 4xl:text-[58px] text-[#CAFF33]">45%</p>
                                <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">Streamline payroll processing</p>
                            </div>

                        </div>

                        <button className="bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[82px] py-[14px] px-[20px] w-fit text-white 2xl:text-[14px] 4xl:text-[18px]">Learn More</button>
                    </div>

                    {/* Right bottom block */}
                    <div className="bg-[#1C1C1C] rounded-[20px] phone:p-[20px] case:p-[40px] 4xl:p-[50px] relative w-fit">
                        <img src="/mainPage/cases_abstract.png" alt="" className="absolute left-0 top-0 phone:w-[118px] case:w-[224px]" />
                        <div className="relative z-[9999] grid grid-cols-2 gap-[10px]">
                            {/* First block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px] ">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/startups.png" alt="Startups and Entrepreneurs" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Startups and Entrepreneurs</p>
                            </div>

                            {/* Second block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/cash_flow.png" alt="Cash Flow Management" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Cash Flow Management</p>
                            </div>

                            {/* Third block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10 border-[1px]">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/business.png" alt="Business Expansion" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Business Expansion</p>
                            </div>

                            {/* Fourth block */}
                            <div className="phone:px-[14px] phone:py-[20px] case:p-[24px] 4xl:p-[30px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute phone:w-[64px] phone:h-[64px] 4xl:w-[78px] 4xl:h-[78px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 phone:w-[48px] phone:h-[48px] 4xl:w-[58px] 4xl:h-[58px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                        <img src="/mainPage/payment.png" alt="Payment Solutions" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white phone:text-[14px] 2xl:text-[16px] 4xl:text-[20px] text-center max-w-[200px]">Payment Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
