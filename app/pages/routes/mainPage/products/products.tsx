export default function Products() {
    return (
        <section className="flex flex-col gap-[80px] mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex justify-between items-end phone:gap-[48px] phone:flex-col 2xl:flex-row phone:items-center">
                <div className="flex flex-col gap-[10px] max-w-3xl">
                    <p className="text-[#CAFF33] phone:text-center 2xl:text-left phone:text-[28px] 2xl:text-[38px] 4xl:text-[48px]"><span className="text-white">Our </span>Products</p>
                    <p className="text-[#B3B3B3] phone:text-center 2xl:text-left text-[14px] 4xl:text-[18px]">
                        Discover a range of comprehensive and customizable
                        banking products at YourBank, designed to suit your
                        unique financial needs and aspirations
                    </p>
                </div>

                <div className="bg-[#1C1C1C] border-[1px] border-[#262626] flex items-center rounded-[82px] h-fit p-[12px]">
                    <button className="bg-[#CAFF33] px-[18px] py-[10px] rounded-[140px] phone:text-[14px] 4xl:text-[18px] whitespace-nowrap">For Individuals</button>
                    <button className="px-[18px] py-[10px] text-white phone:text-[14px] 4xl:text-[18px] whitespace-nowrap">For Businesses</button>
                </div>
            </div>

            <div className="flex gap-[40px] 4xl:gap-[50px] items-start h-fit phone:flex-col 3xl:flex-row mx-auto">
                <div className="flex items-center flex-col gap-[48px] max-w-[373px] 4xl:max-w-[463px]">
                    <div className="relative flex items-center justify-center mt-[30px]">

                        <div className="absolute w-[72px] h-[72px] 4xl:w-[98px] 4xl:h-[98px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                        <div className="absolute z-10 w-[56px] h-[56px] 4xl:w-[74px] 4xl:h-[74px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                        </div>

                        <div className="relative z-20 flex items-center justify-center w-[28px] h-[28px] 4xl:w-[34px] 4xl:h-[34px]">
                            <img src="/mainPage/checking_accounts.png" alt="Checking Accounts" className="w-[28px] 4xl:w-[30px] opacity-100" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col gap-[16px]">
                        <p className="text-[20px] 4xl:text-[24px] text-white">Checking Accounts</p>

                        <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3] text-center">
                            Enjoy easy and convenient access to your funds
                            with our range of checking account options. Benefit
                            from features such as online and mobile banking,
                            debit cards, and free ATM access.
                        </p>
                    </div>
                </div>

                <div className="3xl:h-[300px] bg-[#262626] 3xl:w-[1px] phone:h-[1px] phone:w-full"></div>

                <div className="flex items-center flex-col gap-[48px] max-w-[373px] 4xl:max-w-[463px]">
                    <div className="relative flex items-center justify-center mt-[30px]">

                        <div className="absolute w-[72px] h-[72px] 4xl:w-[98px] 4xl:h-[98px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                        <div className="absolute z-10 w-[56px] h-[56px] 4xl:w-[74px] 4xl:h-[74px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                        </div>

                        <div className="relative z-20 flex items-center justify-center w-[28px] h-[28px] 4xl:w-[34px] 4xl:h-[34px]">
                            <img src="/mainPage/saving_accounts.png" alt="Saving Accounts" className="w-[28px] 4xl:w-[30px] opacity-100" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col gap-[16px]">
                        <p className="text-[20px] 4xl:text-[24px] text-white">Savings Accounts</p>

                        <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3] text-center">
                            Build your savings with our competitive interest
                            rates and flexible savings account options. Whether
                            you're saving for a specific goal or want to grow
                            your wealth over time, we have the right account
                            for you.
                        </p>
                    </div>
                </div>

                <div className="3xl:h-[300px] bg-[#262626] 3xl:w-[1px] phone:h-[1px] phone:w-full"></div>

                <div className="flex items-center flex-col gap-[48px] max-w-[373px] 4xl:max-w-[463px]">
                    <div className="relative flex items-center justify-center mt-[30px]">

                        <div className="absolute w-[72px] h-[72px] 4xl:w-[98px] 4xl:h-[98px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                        <div className="absolute z-10 w-[56px] h-[56px] 4xl:w-[74px] 4xl:h-[74px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                        </div>

                        <div className="relative z-20 flex items-center justify-center w-[28px] h-[28px] 4xl:w-[34px] 4xl:h-[34px]">
                            <img src="/mainPage/loans_and_mortgages.png" alt="Loans and Mortgages" className="w-[28px] 4xl:w-[30px] opacity-100" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col gap-[16px]">
                        <p className="text-[20px] 4xl:text-[24px] text-white">Loans and Mortgages</p>

                        <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3] text-center">
                            Realize your dreams with our flexible
                            loan and mortgage options. From personal
                            loans to home mortgages, our experienced
                            loan officers are here to guide you through
                            the application process and help you secure
                            the funds you need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
