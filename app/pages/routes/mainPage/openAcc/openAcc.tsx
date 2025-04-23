import { Link } from "react-router"

export default function OpenAcc() {
  return (
    <section className="relative phone:pt-[50px] phone:py-[60px] 2xl:py-[70px] 2xl:pr-[100px] 3xl:pr-[200px] phone:px-[20px] 2xl:pl-[80px] flex justify-between middle:flex-row phone:items-center middle:items-baseline phone:flex-col phone:gap-[90px] 3xl:gap-0 middle:gap-[56px] overflow-hidden">


      <div className="max-w-[600px] 5xl:max-w-[740px] phone:items-center flex flex-col middle:items-baseline overflow-hidden">
        <div className="flex items-center gap-[4px] py-[8px] pl-[8px] pr-[16px] mb-[16px] bg-[#262626] rounded-[61px] w-fit">
          <img src="/mainPage/top_icon.png" alt="" className="w-[20px] 5xl:w-[24px]" />
          <p className="phone:text-[12px] 2xl:text-[14px] text-white 5xl:text-[18px]">No LLC Required, No Credit Check.</p>
        </div>

        <p className="text-white phone:text-[28px] 2xl:text-[38px] 5xl:text-[48px] leading-[150%] phone:text-center middle:text-left">Welcome to YourBank Empowering Your <span className="text-[#CAFF33]">Financial Journey</span></p>

        <p className="text-[#E4E4E7] phone:text-[14px] 2xl:text-[16px] 5xl:text-[18px] phone:text-center middle:text-left">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>

        <button className="mt-[40px] py-[14px] px-[24px] bg-[#CAFF33] rounded-[82px] w-fit text-[14px] 5xl:text-[18px]">
          <Link to="/signUp">Open Account</Link>
        </button>
      </div>


      <div className="relative w-fit">
        <img src="/mainPage/abstract_right.png" alt="" className="absolute 2xl:right-[-90px] 2xl:top-[-20px] middle:top-0 middle:right-[-90px] 3xl:right-[-130px] middle:w-[300px] 5xl:w-[356px] phone:w-[220px] phone:right-[-50px] overflow-hidden phone:top-[-20px]" />

        <div className="border-[1px] border-[#262626] h-fit rounded-[8.26px] phone:p-[20px] 2xl:p-[28px] 5xl:p-[35px] bg-[#1A1A1A] relative z-[999] phone:w-[300px] 2xl:w-[410px]">
          <div className="phone:h-[150px] 2xl:h-[182px]">
            <p className="text-white phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">Your Transactions</p>

            <div className="relative mt-[14px]">

              <div className="absolute top-0 border-[0.7px] border-[#262626] bg-[#1C1C1C] rounded-[8.26px] flex items-center justify-between phone:w-full 2xl:w-[355px] px-[17px] py-[11px] z-[9999]">
                <div className="flex items-center gap-[4px]">
                  <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] phone:w-[25px] 2xl:w-[40px] rounded-[37px]" />
                  <div className="text-white">
                    <p className="phone:text-[9px] 2xl:text-[12px] 5xl:text-[15px]">Transaction</p>
                    <p className="phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">Joel Kenley</p>
                  </div>
                </div>

                <p className="text-white phone:text-[12px] 2xl:text-[17px] 5xl:text-[20px]">-$68.00</p>
              </div>

              <div className="absolute phone:top-[36px] 2xl:top-[44px] 5xl:top-[48px] border-[0.7px] border-[#262626] bg-[#1C1C1C] opacity-50 rounded-[8.26px] flex items-center justify-between phone:w-[230px] 2xl:w-[330px] left-[50%] -translate-x-1/2 px-[17px] py-[11px] z-[100]">
                <div className="flex items-center gap-[4px]">
                  <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] phone:w-[25px] 2xl:w-[40px] rounded-[37px]" />
                  <div className="text-white">
                    <p className="phone:text-[9px] 2xl:text-[12px] 5xl:text-[15px]">Transaction</p>
                    <p className="phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">Mark Smith</p>
                  </div>
                </div>

                <p className="text-white phone:text-[12px] 2xl:text-[17px] 5xl:text-[20px]">-$68.00</p>
              </div>

              <div className="absolute phone:top-[70px] 2xl:top-[89px] 5xl:top-[93px] border-[0.7px] border-[#262626] bg-[#1C1C1C] opacity-20 rounded-[8.26px] flex items-center justify-between phone:w-[200px] 2xl:w-[300px] px-[17px] left-[50%] -translate-x-1/2 py-[11px]">
                <div className="flex items-center gap-[4px]">
                  <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] phone:w-[25px] 2xl:w-[40px] rounded-[37px]" />
                  <div className="text-white">
                    <p className="phone:text-[9px] 2xl:text-[12px] 5xl:text-[15px]">Transaction</p>
                    <p className="phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">Lenen Roy</p>
                  </div>
                </div>

                <p className="text-white phone:text-[12px] 2xl:text-[17px] 5xl:text-[20px]">-$68.00</p>
              </div>
            </div>
          </div>

          <div className="phone:mt-[14px] 2xl:mt-[21px] 5xl:mt-[30px] flex flex-col gap-[20px]">
            <p className="text-white phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">Money Exchange</p>

            <div className="phone:w-full 2xl:w-[350px] bg-[#121212] text-white rounded-lg border border-[#262626]">
              <div className="grid grid-cols-2 border-b border-[#262626]">

                <div className="phone:p-[10px] 2xl:p-[14px] flex flex-col gap-[7px] border-r border-[#262626]">
                  <div className="flex items-center gap-[7px]">
                    <img src="/mainPage/int.png" alt="INR" className="phone:w-[20px] 2xl:w-[27px]" />
                    <span className="phone:text-[9px] 2xl:text-[13px] 5xl:text-[15px]">INR</span>
                  </div>
                  <p className="text-[#E4E4E7] phone:text-[8px] 2xl:text-[12px] 5xl:text-[14px]">Indian Rupees</p>
                </div>

                <div className="phone:p-[10px] 2xl:p-[14px] flex flex-col gap-[7px]">
                  <div className="flex items-center gap-[7px]">
                    <img src="/mainPage/usd.png" alt="USD" className="phone:w-[20px] 2xl:w-[27px]" />
                    <span className="phone:text-[9px] 2xl:text-[13px] 5xl:text-[15px]">USD</span>
                  </div>
                  <p className="text-[#E4E4E7] phone:text-[8px] 2xl:text-[12px] 5xl:text-[14px]">United States Dollar</p>
                </div>
              </div>

              {/* Значения */}
              <div className="grid grid-cols-2 text-white text-[14px]">
                <div className="phone:px-[10px] phone:py-[15px] 2xl:px-[21px] 2xl:py-[14px] border-r border-[#262626] phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">5,0000</div>
                <div className="phone:px-[10px] phone:py-[15px] 2xl:px-[21px] 2xl:py-[14px] phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">12.00</div>
              </div>
            </div>

            <button className="px-[21px] py-[11px] bg-[#22251B] rounded-[57px] text-[#D1FF4D] phone:text-[9px] 2xl:text-[12px] 5xl:text-[15px]">Exchange</button>
          </div>


          <div className="absolute flex items-center top-[-30px] phone:left-[-30px] 2xl:left-[-45px] bg-[#22251B] gap-[7px] rounded-9px phone:px-[10px] phone:py-[8px] 2xl:px-[14px] 2xl:py-[11px] z-[9999] rounded-[9px]">
            <img src="/mainPage/plus.png" alt="" className="2xl:w-[30px] phone:w-[22px]" />

            <div>
              <p className="text-white phone:text-[10px] 2xl:text-[14px] 5xl:text-[17px]">+ $5000,00</p>
              <p className="text-[#E4E4E7] phone:text-[8px] 2xl:text-[11px] 5xl:text-[13px]">Monthly Income</p>
            </div>
          </div>


          <div className="absolute phone:bottom-[-55px] 2xl:bottom-[-70px] phone:right-[-20px] 2xl:right-[-40px] flex items-center gap-[8px] py-[7px] pl-[17px] pr-[7px] bg-[#22251B] rounded-[55px]">
            <p className="text-white phone:text-[9px] 2xl:text-[12px] 5xl:text-[15px]">Supported Currency</p>

            <div className="flex bg-[#1A1A1A] phone:p-[5px] 2xl:p-[7px] rounded-[38px] gap-[6px]">
              <div className="bg-[#262626] phone:w-[20px] phone:h-[20px] 2xl:w-[27px] 2xl:h-[27px] 5xl:w-[34px] 5xl:h-[34px] flex items-center justify-center rounded-[50%]">
                <img src="/mainPage/dollar.png" alt="" className="phone:w-[6px] 2xl:w-[9px] 5xl:w-[10px]" />
              </div>
              <div className="bg-[#262626] phone:w-[20px] phone:h-[20px] 2xl:w-[27px] 2xl:h-[27px] 5xl:w-[34px] 5xl:h-[34px] flex items-center justify-center rounded-[50%]">
                <img src="/mainPage/euro.png" alt="" className="phone:w-[6px] 2xl:w-[9px] 5xl:w-[10px]" />
              </div>
              <div className="bg-[#262626] phone:w-[20px] phone:h-[20px] 2xl:w-[27px] 2xl:h-[27px] 5xl:w-[34px] 5xl:h-[34px] flex items-center justify-center rounded-[50%]">
                <img src="/mainPage/btc.png" alt="" className="phone:w-[6px] 2xl:w-[9px] 5xl:w-[10px]" />
              </div>
              <div className="bg-[#262626] phone:w-[20px] phone:h-[20px] 2xl:w-[27px] 2xl:h-[27px] 5xl:w-[34px] 5xl:h-[34px] flex items-center justify-center rounded-[50%]">
                <img src="/mainPage/eth.png" alt="" className="phone:w-[6px] 2xl:w-[9px] 5xl:w-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
