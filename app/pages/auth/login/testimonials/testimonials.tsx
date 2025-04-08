export default function Testimonials() {
    return (
        <section className="flex flex-col gap-[80px] my-[120px] mx-[80px]">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-[10px] w-3xl">
                    <p className="text-[#CAFF33] text-[38px]"><span className="text-white">Our </span>Testimonials</p>
                    <p className="text-[#B3B3B3] text-[14px]">
                        Discover how YourBank has transformed lives with
                        innovative digital solutions and personalized customer
                        service. See why our clients trust us for a secure
                        and prosperous financial journey
                    </p>
                </div>

                <div className="bg-[#1C1C1C] border-[1px] border-[#262626] flex items-center rounded-[82px] h-fit p-[12px]">
                    <button className="bg-[#CAFF33] px-[18px] py-[10px] rounded-[140px]">For Individuals</button>
                    <button className="px-[18px] py-[10px] text-white">For Businesses</button>
                </div>
            </div>

            <div className="flex items-center gap-[40px]">
                <div className="border-[1px] border-[#262626] rounded-full p-[12px] bg-[#1C1C1C]">
                    <img src="/login/arrow_left.png" alt="" className="w-[28px]" />
                </div>

                <div className="flex items-center gap-[30px]">
                    <div className="flex flex-col items-center w-[326px] h-[292px] gap-[40px]">
                        <div className="relative border-[1px] border-[#B3B3B3] w-full">
                            <img src="/login/zap.png" className="w-[44px]  bg-[#1A1A1A] absolute left-[50%] translate-[-50%]" />
                        </div>

                        <p className="text-white text-center min-h-[144px]">YourBank has been my trusted financial partner for years.
                            Their personalized service and innovative digital banking
                            solutions have made managing my finances a breeze.
                        </p>

                        <p className="text-[#CAFF33]">Sara T</p>
                    </div>

                    <div className="flex flex-col items-center w-[326px] h-[292px] gap-[40px]">
                        <div className="relative border-[1px] border-[#B3B3B3] w-full">
                            <img src="/login/zap.png" className="w-[44px]  bg-[#1A1A1A] absolute left-[50%] translate-[-50%]" />
                        </div>

                        <p className="text-white text-center min-h-[144px]">
                            I recently started my own business, and YourBank has
                            been instrumental in helping me set up my business
                            accounts and secure the financing I needed. Their expert
                            guidance and tailored solutions have been invaluable.
                        </p>

                        <p className="text-[#CAFF33]">John D</p>
                    </div>

                    <div className="flex flex-col items-center w-[326px] h-[292px] gap-[40px]">
                        <div className="relative border-[1px] border-[#B3B3B3] w-full">
                            <img src="/login/zap.png" className="w-[44px]  bg-[#1A1A1A] absolute left-[50%] translate-[-50%]" />
                        </div>

                        <p className="text-white text-center min-h-[144px]">
                            I love the convenience of YourBank's mobile banking app.
                            It allows me to stay on top of my finances and make
                            transactions on the go. The app is user-friendly and
                            secure, giving me peace of mind.
                        </p>

                        <p className="text-[#CAFF33]">Emily G</p>
                    </div>
                </div>

                <div className="border-[1px] border-[#262626] rounded-full p-[12px] bg-[#1C1C1C]">
                    <img src="/login/arrow_right.png" alt="" className="w-[28px]" />
                </div>
            </div>
        </section>
    )
}
