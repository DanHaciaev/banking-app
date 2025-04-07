export default function UseCases() {
    return (
        <section className="flex flex-col gap-[80px] mt-[120px] mx-[80px]">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-[10px]">
                    <p className="text-[#CAFF33] text-[38px]"><span className="text-white">Use </span>Cases</p>
                    <p className="text-[#B3B3B3] text-[14px]">
                        At YourBank, we cater to the diverse
                        needs of individuals and businesses
                        alike, offering a wide range of
                        financial solutions
                    </p>
                </div>

            </div>

            <div className="flex flex-col gap-[40px]">
                <div className="flex gap-[60px]">
                    {/* Left top block */}
                    <div className="bg-[#1C1C1C] rounded-[20px] p-[40px] relative">
                        <img src="/mainPage/cases_abstract.png" alt="" className="absolute left-0 top-0 w-[224px]" />
                        <div className="relative z-[9999] grid grid-cols-2 gap-[10px]">
                            {/* First block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/managing.png" alt="Checking Accounts" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Managing Personal Finances</p>
                            </div>

                            {/* Second block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/saving.png" alt="Checking Accounts" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Saving for the Future</p>
                            </div>

                            {/* Third block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10 border-[1px]">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/homeownership.png" alt="Checking Accounts" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Homeownership</p>
                            </div>

                            {/* Fourth block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/education.png" alt="Checking Accounts" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Education Funding</p>
                            </div>
                        </div>
                    </div>

                    {/* Right top block */}
                    <div className="flex flex-1 flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[26px] text-white">For Individuals</p>

                            <p className="text-[16px] text-[#B3B3B3]">
                                For individuals, our mortgage services
                                pave the way to homeownership, and our
                                flexible personal loans provide vital
                                support during various life milestones.
                                We also prioritize retirement planning,
                                ensuring a financially secure future for
                                our customers</p>
                        </div>

                        <div className="flex items-center gap-[45px]">
                            <div>
                                <p className="text-[40px] text-[#CAFF33]">78%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Secure Retirement Planning</p>
                            </div>

                            <div className="border-l-[2px] border-dashed h-full border-[#262626]"></div>

                            <div>
                                <p className="text-[40px] text-[#CAFF33]">63%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Manageable Debt Consolidation</p>
                            </div>

                            <div className="border-l-[2px] border-dashed h-full border-[#262626]"></div>

                            <div>
                                <p className="text-[40px] text-[#CAFF33]">91%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Reducing financial burdens</p>
                            </div>

                        </div>

                        <button className="bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[82px] py-[14px] px-[20px] w-fit text-white text-[14px]">Learn More</button>
                    </div>
                </div>






                <div className="flex gap-[60px]">
                    {/* Left bottom block */}
                    <div className="flex flex-1 flex-col gap-[50px]">
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[26px] text-white">For Business</p>

                            <p className="text-[16px] text-[#B3B3B3]">
                                For businesses, we empower growth with 
                                working capital solutions that optimize 
                                cash flow, and our tailored financing 
                                options fuel business expansion. Whatever 
                                your financial aspirations, YourBank is 
                                committed to providing the right tools 
                                and support to achieve them
                            </p>
                        </div>

                        <div className="flex items-center gap-[45px]">
                            <div>
                                <p className="text-[40px] text-[#CAFF33]">65%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Cash Flow Management</p>
                            </div>

                            <div className="border-l-[2px] border-dashed h-full border-[#262626]"></div>

                            <div>
                                <p className="text-[40px] text-[#CAFF33]">70%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Drive Business Expansion</p>
                            </div>

                            <div className="border-l-[2px] border-dashed h-full border-[#262626]"></div>

                            <div>
                                <p className="text-[40px] text-[#CAFF33]">45%</p>
                                <p className="text-[15px] text-[#B3B3B3]">Streamline payroll processing</p>
                            </div>

                        </div>

                        <button className="bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[82px] py-[14px] px-[20px] w-fit text-white text-[14px]">Learn More</button>
                    </div>

                    {/* right bottom block */}
                    <div className="bg-[#1C1C1C] rounded-[20px] p-[40px] relative">
                        <img src="/mainPage/cases_abstract.png" alt="" className="absolute left-0 top-0 w-[224px]" />
                        <div className="relative z-[9999] grid grid-cols-2 gap-[10px]">
                            {/* First block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/startups.png" alt="Startups and Entrepreneurs" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Startups and Entrepreneurs</p>
                            </div>

                            {/* Second block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/cash_flow.png" alt="Cash Flow Management" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Cash Flow Management</p>
                            </div>

                            {/* Third block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10 border-[1px]">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/business.png" alt="Business Expansion" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Business Expansion</p>
                            </div>

                            {/* Fourth block */}
                            <div className="w-[260px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[12px] flex flex-col items-center gap-[30px]">
                                <div className="relative flex items-center justify-center mt-[20px]">

                                    <div className="absolute w-[64px] h-[64px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                    <div className="absolute z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                    </div>

                                    <div className="relative z-20 flex items-center justify-center w-[24px] h-[24px]">
                                        <img src="/mainPage/payment.png" alt="Payment Solutions" className="w-[24px] opacity-100" />
                                    </div>
                                </div>

                                <p className="text-white text-[16px] text-center max-w-[200px]">Payment Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
