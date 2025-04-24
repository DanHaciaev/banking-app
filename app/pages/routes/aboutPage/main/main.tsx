export default function Main() {
    return (
        <section className="bg-[#1C1C1C] rounded-[20px] phone:mt-[30px] 2xl:mt-[55px] phone:px-[14px] phone:pt-[14px] phone:pb-0 2xl:p-[40px] 4xl:p-[50px] phone:mx-[20px] 2xl:mx-[80px] relative">
            <img src="/careers/right_abstract.png" alt="" className="absolute phone:w-[200px] 2xl:w-[334px] 4xl:w-[505px] right-0 top-0" />


            <div className="relative z-[999] flex flex-col-reverse 3xl:flex-row justify-end">
                <div className="phone:relative 3xl:absolute 3xl:w-[55%] translate-y-[-28px] 3xl:translate-y-0 3xl:top-0 3xl:left-0 box-border bg-[#1A1A1A] phone:p-[20px] 2xl:p-[40px] 3xl:p-[60px] 4xl:p-[80px] phone:rounded-[20px] 3xl:rounded-0 3xl:rounded-tl-[20px] 3xl:rounded-bl-[20px] 3xl:rounded-br-[60px] 3xl:rounded-r-[0px] flex flex-col gap-[20px]">
                    <div>
                        <p className="font-[Lexend-Regular] phone:text-[14px] 2xl:text-[18px] 4xl:text-[20px] text-white phone:text-center 2xl:text-left">Welcome to YourBank</p>

                        <p className="font-[Lexend-Medium] text-white phone:text-[28px] 2xl:text-[48px] 5xl:text-[58px] leading-[150%] phone:text-center 2xl:text-left">Where Banking Meets <span className="text-[#CAFF33]">Excellence!</span></p>
                    </div>

                    <p className="font-[Lexend-Light] text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 5xl:text-[18px] phone:text-center 2xl:text-left">
                        At YourBank, we believe that banking 
                        should be more than just transactions. 
                        It should be an experience that empowers 
                        individuals and businesses to thrive 
                        and reach their financial goals. As a 
                        trusted financial institution, we are 
                        committed to delivering exceptional banking 
                        services that go beyond expectations. 
                        With a focus on innovation, personalized 
                        solutions, and unwavering integrity, we 
                        strive to provide the best banking experience 
                        for our valued customers. Join us on this 
                        exciting journey and discover a new level 
                        of banking excellence.
                    </p>

                </div>

                <img src="/about/main.png" alt="" className="3xl:w-[60%]" />
            </div>
        </section>
    )
}
