import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="w-[1064px] h-fit bg-cover bg-no-repeat bg-center mt-[50px] flex items-center gap-[60px] flex-col mx-auto relative px-[200px] py-[80px]" style={{ backgroundImage: "url('/login/Login.png')" }}>
            <img src="/login/abstract.png" alt="" className="absolute z-[9999] w-[256px] h-[243px] right-0 top-0" />

            <div className="flex flex-col gap-[16px] items-center">
                <p className="text-[#CAFF33] text-[38px]">Sign Up</p>
                <p className="text-[#BFBFBF] text-[16px]">Welcome back! Please log in to access your account.</p>
            </div>

            <form action="" className="flex flex-col items-center gap-[30px]">
                <div className="flex items-center gap-[24px]">
                    <input type="name" placeholder="Enter First Name" className="w-[320px] p-[20px] bg-[#1A1A1A] rounded-[88px] border-[1px] border-[#262626] text-white" />


                    <input
                        placeholder="Enter Last Name"
                        className="w-[320px] p-[20px] bg-[#1A1A1A] rounded-[88px] border-[1px] border-[#262626] text-white pr-[50px]"
                    />
                </div>

                <div className="flex items-center gap-[24px]">
                    <input type="email" placeholder="Enter your Email" className="w-[320px] p-[20px] bg-[#1A1A1A] rounded-[88px] border-[1px] border-[#262626] text-white" />

                    {/* Блок пароля с глазиком */}
                    <div className="relative w-[320px]">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                            className="w-full p-[20px] bg-[#1A1A1A] rounded-[88px] border-[1px] border-[#262626] text-white pr-[50px]"
                        />
                        <button
                            type="button"
                            className="absolute right-[20px] top-[50%] translate-y-[-50%] text-[#BFBFBF]"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <p className="text-white underline">Forgot Password?</p>

                <div className="w-[404px] flex flex-col gap-[24px]">
                    <button className="bg-[#CAFF33] rounded-[63px] px-[24px] py-[14px] text-[14px]">Sign Up</button>
                    <button className="bg-[#262626] rounded-[63px] px-[24px] py-[14px] text-[14px] text-white border-[1px] border-[#333333]">Login</button>
                </div>

                <div className="flex flex-col items-center gap-[30px] w-[404px]">
                    <div className="border-t-[1px] relative w-full border-[#B3B3B3]">
                        <p className="absolute top-[-14px] bg-[#1A1A1A] px-[12px] left-50 -translate-x-1/2 text-[18px] text-[#B3B3B3]">Or Continue with</p>
                    </div>


                    <div className="flex items-center gap-[90px]">
                        <div className="relative flex items-center justify-center mt-[30px]">

                            <div className="absolute w-[94px] h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                            <div className="absolute z-10 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                            </div>

                            <div className="relative z-20 flex items-center justify-center w-[30px] h-[30px]">
                                <img src="/login/google.png" alt="Google" className="w-[30px] opacity-100" />
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center mt-[30px]">

                            <div className="absolute w-[94px] h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                            <div className="absolute z-10 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                            </div>

                            <div className="relative z-20 flex items-center justify-center w-[30px] h-[30px]">
                                <img src="/login/facebook.png" alt="Facebook" className="w-[30px] opacity-100" />
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center mt-[30px]">

                            <div className="absolute w-[94px] h-[94px] rounded-full bg-[#CAFF33] opacity-5 "></div>

                            <div className="absolute z-10 w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#CAFF33] to-transparent via-[#CAFF33]/0 via-47% opacity-10">
                            </div>

                            <div className="relative z-20 flex items-center justify-center w-[30px] h-[30px]">
                                <img src="/login/apple.png" alt="Apple" className="w-[30px] opacity-100" />
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    );
}
