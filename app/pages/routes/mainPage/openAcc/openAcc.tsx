export default function OpenAcc() {
  return (
    <main className="relative py-[60px] pr-[200px] pl-[80px] flex justify-between">
      <img src="/mainPage/abstract_right.png" alt="" className="absolute right-[40px] w-[300px]" />

      <div className="max-w-[600px]">
        <div className="flex items-center gap-[4px] py-[8px] pl-[8px] pr-[16px] mb-[16px] bg-[#262626] rounded-[61px] w-fit">
          <img src="/mainPage/top_icon.png" alt="" />
          <p className="text-[14px] text-white">No LLC Required, No Credit Check.</p>
        </div>

        <p className="text-white text-[38px]">Welcome to YourBank Empowering Your <span className="text-[#CAFF33]">Financial Journey</span></p>

        <p className="text-[#E4E4E7]">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>

        <button className="mt-[40px] py-[14px] px-[24px] bg-[#CAFF33] rounded-[82px] w-fit text-[14px]">Open Account</button>
      </div>

      <div className="border-[1px] border-[#262626] rounded-[8.26px] p-[28px] bg-[#1A1A1A] relative z-[999] min-w-[410px]">
        <div className="h-[182px]">
          <p className="text-white">Your Transactions</p>

          <div className="relative mt-[14px]">

            <div className="absolute top-0 border-[0.7px] border-[#262626] bg-[#1C1C1C] rounded-[8.26px] flex items-end justify-between w-[355px] px-[17px] py-[11px] z-[9999]">
              <div className="flex items-center gap-[4px]">
                <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] w-[40px] rounded-[37px]" />
                <div className="text-white">
                  <p className="text-[12px]">Transaction</p>
                  <p className="text-[14px]">Joel Kenley</p>
                </div>
              </div>

              <p className="text-white text-[17px]">-$68.00</p>
            </div>

            <div className="absolute top-[44px] border-[0.7px] border-[#262626] bg-[#1C1C1C] opacity-50 rounded-[8.26px] flex items-end justify-between w-[330px] left-[50%] -translate-x-1/2 px-[17px] py-[11px] z-[100]">
              <div className="flex items-center gap-[4px]">
                <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] w-[40px] rounded-[37px]" />
                <div className="text-white">
                  <p className="text-[12px]">Transaction</p>
                  <p className="text-[14px]">Mark Smith</p>
                </div>
              </div>

              <p className="text-white text-[17px]">-$68.00</p>
            </div>

            <div className="absolute top-[89px] border-[0.7px] border-[#262626] bg-[#1C1C1C] opacity-20 rounded-[8.26px] flex items-end justify-between w-[300px] px-[17px] left-[50%] -translate-x-1/2 py-[11px]">
              <div className="flex items-center gap-[4px]">
                <img src="/mainPage/vise-verse.png" alt="" className="bg-[#CAFF33] w-[40px] rounded-[37px]" />
                <div className="text-white">
                  <p className="text-[12px]">Transaction</p>
                  <p className="text-[14px]">Lenen Roy</p>
                </div>
              </div>

              <p className="text-white text-[17px]">-$68.00</p>
            </div>
          </div>
        </div>

        <div className="mt-[21px] flex flex-col gap-[20px]">
          <p className="text-white">Money Exchange</p>

          <div className="w-[350px] bg-[#121212] text-white rounded-lg border border-[#262626]">
            <div className="grid grid-cols-2 border-b border-[#262626]">

              <div className="p-[14px] flex flex-col gap-[7px] border-r border-[#262626]">
                <div className="flex items-center gap-[7px]">
                  <img src="/mainPage/int.png" alt="INR" className="w-[27px]" />
                  <span className="text-[13px]">INR</span>
                </div>
                <p className="text-[#E4E4E7] text-[12px]">Indian Rupees</p>
              </div>

              <div className="p-[14px] flex flex-col gap-[7px]">
                <div className="flex items-center gap-[7px]">
                  <img src="/mainPage/usd.png" alt="USD" className="w-[27px]" />
                  <span className="text-[13px]">USD</span>
                </div>
                <p className="text-[#E4E4E7] text-[12px]">United States Dollar</p>
              </div>
            </div>

            {/* Значения */}
            <div className="grid grid-cols-2 text-white text-[14px]">
              <div className="px-[21px] py-[14px] border-r border-[#262626]">5,0000</div>
              <div className="px-[21px] py-[14px]">12.00</div>
            </div>
          </div>

          <button className="px-[21px] py-[11px] bg-[#22251B] rounded-[57px] text-[#D1FF4D] text-[12px]">Exchange</button>
        </div>


        <div className="absolute flex items-center top-[-30px] left-[-45px] bg-[#22251B] gap-[7px] rounded-9px px-[14px] py-[11px] z-[9999] rounded-[37px]">
          <img src="/mainPage/plus.png" alt="" className="w-[30px]" />

          <div>
            <p className="text-white text-[14px]">+ $5000,00</p>
            <p className="text-[#E4E4E7] text-[11px]">Monthly Income</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-10px] right-38 flex items-center gap-[8px] py-[7px] pl-[17px] pr-[7px] bg-[#22251B] rounded-[55px]">
        <p className="text-white text-[12px]">Supported Currency</p>

        <div className="flex bg-[#1A1A1A] p-[7px] rounded-[38px] gap-[6px]">
          <div className="bg-[#262626] w-[27px] h-[27px] flex items-center justify-center rounded-[50%]">
            <img src="/mainPage/dollar.png" alt="" className="w-[9px]"/>
          </div>
          <div className="bg-[#262626] w-[27px] flex items-center justify-center rounded-[50%]">
            <img src="/mainPage/euro.png" alt="" className="w-[9px]"/>
          </div>
          <div className="bg-[#262626] w-[27px] flex items-center justify-center rounded-[50%]">
            <img src="/mainPage/btc.png" alt="" className="w-[9px]"/>
          </div>
          <div className="bg-[#262626] w-[27px] flex items-center justify-center rounded-[50%]">
            <img src="/mainPage/eth.png" alt="" className="w-[9px]"/>
          </div>
        </div>
      </div>
    </main>
  )
}
