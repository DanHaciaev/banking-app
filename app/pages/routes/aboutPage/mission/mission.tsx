export default function Mission() {
    return (
        <section className="flex flex-col phone:gap-[60px] 4xl:gap-[80px] phone:mt-[80px] 2xl:mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex flex-col gap-[20px]">
                <p className="text-[#CAFF33] phone:text-[28px] 2xl:text-[38px] 4xl:text-[48px] leading-[150%] phone:text-center 2xl:text-left">Our <span className="text-[#CAFF33]">Mission & Vision</span></p>

                <p className="text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] phone:text-center 2xl:text-left">
                    We envision being a leading force in
                    the industry, driven by innovation,
                    integrity, and inclusivity, creating a
                    brighter financial future for individuals
                    and businesses while maintaining a strong
                    commitment to customer satisfaction and
                    community development
                </p>
            </div>


            <div className="flex flex-col phone:gap-[50px]">
                <div className="flex items-center about:flex-row flex-col">
                    <div className="my-gradient flex-shrink-0 relative border-[1px] border-[#262626] phone:px-[20px] phone:pt-[20px] about:px-[60px] about:pt-[60px] phone:max-w-[545px] about:max-w-auto about:max-h-auto about:w-[545px] about:h-[500px] box-border rounded-t-[50px] phone:rounded-b-0 about:rounded-b-[20px]">
                        <img src="/about/back_abstract.png" alt="" className="absolute w-full h-full left-0 top-0 opacity-30" />

                        <img src="/about/mission.png" alt="" className="relative z-[9999] w-full h-full object-contain" />
                    </div>


                    <div className="flex flex-col gap-[10px] about:border-l-[1px] phone:border-t-[1px] about:border-t-0 phone:border-w border-[#CAFF33] phone:pt-[30px] about:pt-0 about:pl-[40px] 4xl:pl-[50px]">
                        <p className="phone:text-center about:text-left phone:text-[26px] 2xl:text-[32px] 4xl:text-[38px] text-white">Mission</p>

                        <p className="phone:text-center about:text-left phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                            At YourBank, our mission is to empower our
                            customers to achieve financial success. We
                            are dedicated to delivering innovative banking
                            solutions that cater to their unique needs.
                            Through personalized services, expert guidance,
                            and cutting-edge technology, we aim to build
                            strong, lasting relationships with our customers.
                            Our mission is to be their trusted partner,
                            helping them navigate their financial journey
                            and realize their dreams.
                        </p>
                    </div>
                </div>


                <div className="flex items-center about:flex-row-reverse flex-col">
                    <div className="my-gradient flex-shrink-0 relative border-[1px] border-[#262626] phone:px-[20px] phone:pt-[20px] about:px-[60px] about:pt-[60px] phone:max-w-[545px] about:max-w-auto about:max-h-auto about:w-[545px] about:h-[500px] box-border rounded-t-[50px] phone:rounded-b-0 about:rounded-b-[20px]">
                        <img src="/about/back_abstract.png" alt="" className="absolute w-full h-full left-0 top-0 opacity-30" />

                        <img src="/about/vision.png" alt="" className="relative z-[9999] w-full h-full" />
                    </div>


                    <div className="flex flex-col gap-[10px] about:border-r-[1px] phone:border-t-[1px] about:border-t-0 phone:border-w border-[#CAFF33] phone:pt-[30px] about:pt-0 about:pr-[40px] 4xl:pr-[50px]">
                        <p className="phone:text-center about:text-left phone:text-[26px] 2xl:text-[32px] 4xl:text-[38px] text-white">Vision</p>

                        <p className="phone:text-center about:text-left phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                            Our vision at YourBank is to redefine
                            banking by creating a seamless and personalized
                            experience for our customers. We envision a 
                            future where banking is accessible, transparent, 
                            and tailored to individual preferences. Through 
                            continuous innovation and collaboration, we 
                            strive to be at the forefront of the industry, 
                            setting new standards for customer-centric 
                            banking. Our vision is to be the preferred 
                            financial institution, known for our unwavering 
                            commitment to excellence, trust, and customer 
                            satisfaction.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}
