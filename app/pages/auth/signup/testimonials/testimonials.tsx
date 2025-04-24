import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { style } from 'framer-motion/client';

export default function Testimonials() {
    const testimonials = [
        {
            text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
            name: "Sara T",
        },
        {
            text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed.",
            name: "John D",
        },
        {
            text: "I love the convenience of YourBank's mobile banking app. It's user-friendly and secure, giving me peace of mind.",
            name: "Emily G",
        },
        {
            text: "Switching to YourBank was the best decision. The onboarding was seamless and their customer service is top-notch!",
            name: "Michael P",
        },
        {
            text: "Their wealth management services helped me grow my savings with a personalized plan. I feel secure and confident.",
            name: "Linda W",
        },
        {
            text: "YourBank's international transfer feature is so fast and affordable! It has simplified sending money to my family overseas.",
            name: "Carlos M",
        },
    ];

    return (
        <section className="flex flex-col phone:gap-[20px] 2xl:gap-[60px] phone:mt-[80px] 2xl:mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex justify-between 2xl:items-end phone:items-center gap-[30px] phone:flex-col 2xl:flex-row">
                <div className="flex flex-col gap-[10px] max-w-3xl">
                    <p className="font-[Lexend-Medium] text-[#CAFF33] phone:text-center phone:text-[28px] 2xl:text-left 2xl:text-[38px] 4xl:text-[48px]"><span className="text-white">Our </span>Testimonials</p>
                    <p className="font-[Lexend-Light] text-[#B3B3B3] phone:text-center 2xl:text-left phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
                        Discover how YourBank has transformed lives with
                        innovative digital solutions and personalized customer
                        service. See why our clients trust us for a secure
                        and prosperous financial journey
                    </p>
                </div>

                <div className="bg-[#1C1C1C] border-[1px] border-[#262626] flex items-center rounded-[82px] h-fit p-[12px]">
                    <button className="font-[Lexend-Regular] bg-[#CAFF33] px-[18px] py-[10px] rounded-[140px] whitespace-nowrap">For Individuals</button>
                    <button className="font-[Lexend-Regular] px-[18px] py-[10px] text-white whitespace-nowrap">For Businesses</button>
                </div>
            </div>

            {/* Swiper Section */}
            <div className="relative 2xl:mx-[70px]">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    loop={true}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        900: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="phone:border-[1px] phone:px-[20px] phone:py-[40px] phone:rounded-[12px] phone:border-[#262626] 2xl:rounded-0 2xl:border-0 2xl:p-0 phone:mb-[30px]  2xl:mb-0 flex flex-col items-center phone:h-fit 2xl:h-[292px] mt-[30px] gap-[40px]">
                                <div className="relative border-[1px] border-[#B3B3B3] w-full">
                                    <img src="/login/zap.png" className="w-[44px] bg-[#1A1A1A] absolute left-[50%] translate-[-50%]" />
                                </div>
                                <p className="font-[Lexend-Regular] text-white text-center phone:min-h-fit 2xl:min-h-[144px]">{item.text}</p>
                                <p className="font-[Lexend-Medium] text-[#CAFF33]">{item.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows */}
                {/* Prev Button */}
                <div className="swiper-button-prev absolute ml-[-30px] 2xl:ml-0
    phone:left-[45%] phone:translate-x-[-50%]
    2xl:left-[-70px] 2xl:top-[50%] 2xl:translate-x-0 2xl:translate-y-[-50%]
    z-10 cursor-pointer border border-[#262626] rounded-full p-[12px] bg-[#1C1C1C]">
                    <img src="/login/arrow_left.png" alt="prev" className="w-[28px]" />
                </div>

                {/* Next Button */}
                <div className="swiper-button-next absolute ml-[30px] 2xl:ml-0
    phone:left-[55%] phone:translate-x-[-50%]
    2xl:left-auto 2xl:right-[-100px] 2xl:top-[50%] 2xl:translate-y-[-50%]
    z-10 cursor-pointer border border-[#262626] rounded-full p-[12px] bg-[#1C1C1C]">
                    <img src="/login/arrow_right.png" alt="next" className="w-[28px]" />
                </div>


            </div>
        </section>
    );

}
