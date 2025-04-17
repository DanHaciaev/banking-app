import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="2xl:mx-[80px] phone:mx-[20px] box-border mt-[50px]">
            <div className="phone:max-w-full 2xl:mx-auto 2xl:max-w-[1064px] 4xl:max-w-[1326px] h-fit bg-cover bg-no-repeat bg-center rounded-[16px] flex items-center phone:gap-[40px] 2xl:gap-[60px] 4xl:gap-[80px] flex-col relative phone:p-[30px] phone:pb-[50px] 2xl:px-[100px] 3xl:px-[200px] 2xl:py-[80px] 4xl:px-[150px] 4xl:py-[100px] box-border" style={{ backgroundImage: "url('/login/Login.png')" }}>
                <img src="/login/abstract.png" alt="" className="absolute z-[1] phone:w-[167px] phone:h-[159px] 2xl:w-[256px] 2xl:h-[243px] 4xl:w-[342px] 4xl:h-[325px] right-0 top-0" />

                <div className="flex flex-col gap-[16px] items-center relative z-[10]">
                    <p className="text-[#CAFF33] phone:text-[28px] 2xl:text-[38px] 4xl:text-[48px]">Sign Up</p>
                    <p className="text-[#BFBFBF] text-center phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                </div>

                <form action="" className="flex flex-col justify-center items-center gap-[30px] w-full">
                    <div className="flex justify-center items-center phone:flex-col 2xl:flex-row w-full phone:gap-[20px] 2xl:gap-[24px] 4xl:gap-[30px]">
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            className="w-full max-w-[404px] p-[20px] bg-[#1A1A1A] rounded-[88px] border border-[#262626] text-white phone:text-[16px] 4xl:text-[18px]"
                        />
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="w-full max-w-[404px] p-[20px] bg-[#1A1A1A] rounded-[88px] border border-[#262626] text-white phone:text-[16px] 4xl:text-[18px]"
                        />
                    </div>

                    <div className="flex items-center justify-center phone:flex-col 2xl:flex-row w-full phone:gap-[20px] 2xl:gap-[24px] 4xl:gap-[30px] ">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full max-w-[404px] p-[20px] bg-[#1A1A1A] rounded-[88px] border border-[#262626] text-white phone:text-[16px] 4xl:text-[18px]"
                        />

                        <div className="relative w-full max-w-[404px] bg-[#1A1A1A] rounded-[88px] border border-[#262626]">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your Password"
                                className="w-full p-[20px] bg-transparent rounded-[88px] text-white phone:text-[16px] 4xl:text-[18px]"
                            />
                            <button
                                type="button"
                                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#BFBFBF]"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>


                    <div className="max-w-[404px] w-full flex flex-col gap-[24px] px-0 box-border">
                        <button className="bg-[#CAFF33] rounded-[63px] px-[24px] py-[14px] 2xl:text-[14px] 4xl:text-[18px]">Sign Up</button>
                        <button className="bg-[#262626] rounded-[63px] px-[24px] py-[14px] 2xl:text-[14px] 4xl:text-[18px] text-white border border-[#333333]">Login</button>
                    </div>


                    <div className="flex flex-col items-center gap-[30px] max-w-[404px] w-full">
                        <div className="border-t-[1px] relative w-full border-[#B3B3B3]">
                            <p className="absolute top-[-14px] bg-[#1A1A1A] px-[12px] left-[50%] -translate-x-1/2 phone:text-[14px] 2xl:text-[18px] text-[#B3B3B3] whitespace-nowrap">Or Continue with</p>
                        </div>


                        <div className="flex items-center phone:gap-[65px] 2xl:gap-[69px]">
                            <div className="relative flex items-center justify-center mt-[30px]">

                                <div className="absolute phone:w-[68px] phone:h-[68px] 4xl:w-[94px] 4xl:h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                <div className="absolute z-10 phone:w-[52px] phone:h-[52px] 4xl:w-[70px] 4xl:h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                </div>

                                <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                    <img src="/login/google.png" alt="Google" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center mt-[30px]">

                                <div className="absolute phone:w-[68px] phone:h-[68px] 4xl:w-[94px] 4xl:h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                <div className="absolute z-10 phone:w-[52px] phone:h-[52px] 4xl:w-[70px] 4xl:h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                </div>

                                <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                    <img src="/login/facebook.png" alt="Facebook" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center mt-[30px]">

                                <div className="absolute phone:w-[68px] phone:h-[68px] 4xl:w-[94px] 4xl:h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                                <div className="absolute z-10 phone:w-[52px] phone:h-[52px] 4xl:w-[70px] 4xl:h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                                </div>

                                <div className="relative z-20 flex items-center justify-center phone:w-[24px] phone:h-[24px] 4xl:w-[30px] 4xl:h-[30px]">
                                    <img src="/login/apple.png" alt="Apple" className="phone:w-[24px] 4xl:w-[30px] opacity-100" />
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </section>
    );
}

// 2xl:mx-auto 2xl:max-w-[1064px] 4xl:max-w-[1326px]

// phone:max-w-fit max-w-[calc(100%-160px)] 
