export default function Values() {
    return (
        <section className="flex flex-col phone:gap-[50px] 2xl:gap-[60px] 4xl:gap-[80px] phone:mt-[80px] 2xl:mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex flex-col gap-[20px]">
                <p className="text-white phone:text-[28px] 2xl:text-[38px] 4xl:text-[48px] leading-[150%] phone:text-center 2xl:text-left">Our <span className="text-[#CAFF33]">Values</span></p>

                <p className="text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] phone:text-center 2xl:text-left">
                    At YourBank, our values form the
                    foundation of our organization and
                    guide our actions. We believe in upholding
                    the highest standards of integrity,
                    delivering exceptional service, and embracing
                    innovation. These values define our culture
                    and shape the way we work together to achieve
                    our goals.
                </p>
            </div>

            <div className="phone:grid 2xl:grid 2xl:grid-cols-2 phone:gap-[50px] 2xl:gap-[60px] 4xl:gap-[80px]">
                <div className="border-l-[1px] border-l-[#CAFF33] phone:pl-[20px] 2xl:pl-[24px] 4xl:pl-[30px] flex flex-col phone:gap-[14px] 2xl:gap-[20px]">
                    <p className="phone:text-[30px] 2xl:text-[40px] 4xl:text-[58px] text-[#4C4C4D]">Integrity</p>
                    <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                        We conduct ourselves with utmost honesty,
                        transparency, and ethical behavior. We believe
                        in doing what is right for our customers, colleagues,
                        and stakeholders, even when faced with difficult
                        choices.
                    </p>
                </div>
                <div className="border-l-[1px] border-l-[#CAFF33] phone:pl-[20px] 2xl:pl-[24px] 4xl:pl-[30px] flex flex-col phone:gap-[14px] 2xl:gap-[20px]">
                    <p className="phone:text-[30px] 2xl:text-[40px] 4xl:text-[58px] text-[#4C4C4D]">Customer Centricity</p>
                    <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                        Our customers are at the heart of everything we
                        do. We are dedicated to understanding their needs,
                        providing personalized solutions, and delivering
                        exceptional service that exceeds expectations.
                    </p>
                </div>
                <div className="border-l-[1px] border-l-[#CAFF33] phone:pl-[20px] 2xl:pl-[24px] 4xl:pl-[30px] flex flex-col phone:gap-[14px] 2xl:gap-[20px]">
                    <p className="phone:text-[30px] 2xl:text-[40px] 4xl:text-[58px] text-[#4C4C4D]">Collaboration</p>
                    <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                        We foster a collaborative and inclusive work
                        environment, where teamwork and diversity are
                        celebrated. By leveraging the unique strengths
                        and perspectives of our employees, we drive
                        innovation and achieve greater success together.
                    </p>
                </div>
                <div className="border-l-[1px] border-l-[#CAFF33] phone:pl-[20px] 2xl:pl-[24px] 4xl:pl-[30px] flex flex-col phone:gap-[14px] 2xl:gap-[20px]">
                    <p className="phone:text-[30px] 2xl:text-[40px] 4xl:text-[58px] text-[#4C4C4D]">Innovation</p>
                    <p className="phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] text-[#B3B3B3]">
                        We embrace change and constantly seek
                        innovative solutions to meet the evolving
                        needs of our customers. We encourage our
                        employees to think creatively, challenge
                        conventions, and explore new ideas to drive
                        the future of banking.
                    </p>
                </div>
            </div>
        </section>
    )
}
