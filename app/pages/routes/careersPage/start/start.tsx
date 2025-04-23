import { Link } from "react-router"

export default function Start() {
    return (
        <section className="relative flex justify-between phone:gap-[24px] 2xl:gap-[80px] phone:mt-[80px] 2xl:mt-[120px] phone:mx-[20px] 2xl:mx-[80px] phone:p-[30px] 2xl:p-[60px] 4xl:p-[80px] phone:flex-col 2xl:flex-row items-center bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[20px]">
            <img src="/mainPage/cases_abstract.png" alt="" className="absolute top-0 left-0 phone:w-[151px] 2xl:w-[202px] 4xl:w-[298px]" />

            <div className="flex flex-col phone:gap-[14px] 2xl:gap-[10px] 4xl:gap-[14px] max-w-[768px] 4xl:max-w-[1103px] relative z-10">
                <p className="text-[#CAFF33] phone:text-[24px] 2xl:text-[30px] 4xl:text-[40px] phone:text-center 2xl:text-left"><span className="text-white">Start your financial journey with </span>YourBank today!</p>
                <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px] phone:text-center 2xl:text-left">
                    Lorem ipsum dolor sit amet consectetur. 
                    Blandit odio semper risus pellentesque 
                    elit. Pellentesque eget ut imperdiet 
                    nulla penatibus. Nascetur viverra arcu 
                    sed amet cursus purus.
                </p>
            </div>

            <button className="phone:py-[14px] phone:px-[24px] 4xl:py-[18px] 4xl:px-[30px] bg-[#CAFF33] rounded-[82px] w-fit phone:text-[14px] 4xl:text-[18px] whitespace-nowrap">
                <Link to="/signUp">Open Account</Link>
            </button>
        </section>
    )
}
