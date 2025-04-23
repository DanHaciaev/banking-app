export default function Main() {
    return (
        <section className="bg-[#1C1C1C] rounded-[20px] phone:mt-[30px] 2xl:mt-[55px] phone:px-[14px] phone:pt-[14px] phone:pb-0 2xl:p-[40px] 4xl:p-[50px] phone:mx-[20px] 2xl:mx-[80px] relative">
            <img src="/careers/right_abstract.png" alt="" className="absolute phone:w-[200px] 2xl:w-[334px] 4xl:w-[505px] right-0 top-0" />


            <div className="relative z-[999] flex flex-col-reverse main:flex-row justify-end">
                <div className="phone:relative main:absolute main:w-[55%] translate-y-[-28px] main:translate-y-0 main:top-0 main:left-0 box-border bg-[#1A1A1A] phone:p-[20px] 2xl:p-[40px] main:p-[60px] 4xl:p-[80px] phone:rounded-[20px] main:rounded-0 main:rounded-tl-[20px] main:rounded-bl-[20px] main:rounded-br-[60px] main:rounded-r-[0px] flex flex-col gap-[20px]">
                    <p className="text-white phone:text-[28px] 2xl:text-[48px] 5xl:text-[58px] leading-[150%] phone:text-center 2xl:text-left">Welcome to <span className="text-[#CAFF33]">YourBank</span> Careers</p>

                    <p className="text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 5xl:text-[18px] phone:text-center 2xl:text-left">
                        Join our team and embark on a rewarding journey 
                        in the banking industry. At YourBank, we are 
                        committed to fostering a culture of excellence 
                        and providing opportunities for professional growth. 
                        With a focus on innovation, customer service, and 
                        integrity, we strive to make a positive impact in 
                        the lives of our customers and communities. Join us 
                        today and be a part of our mission to shape the 
                        future of banking.
                    </p>

                </div>

                <img src="/careers/main.png" alt="" className="main:w-[60%]" />
            </div>
        </section>
    )
}
