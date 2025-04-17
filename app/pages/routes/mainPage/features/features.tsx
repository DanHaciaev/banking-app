export default function Features() {
  return (
    <section className="flex flex-col phone:gap-[50px] middle:gap-[80px] mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#CAFF33] phone:text-center phone:text-[28px] 2xl:text-left 2xl:text-[38px] 4xl:text-[48px]"><span className="text-white">Our </span>Features</p>
        <p className="text-[#B3B3B3] phone:text-center 2xl:text-left phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
          Experience a host of powerful features
          at YourBank, including seamless online
          banking, secure transactions, and
          personalized financial insights, all
          designed to enhance your banking experience
        </p>
      </div>

      <div className="flex gap-[20px] items-start phone:flex-col middle:flex-row">
        <div className="phone:overflow-x-auto phone:w-full 2xl:overflow-visible 2xl:w-fit">
          <div className="phone:p-[20px] middle:p-[40px] 4xl:p-[50px] rounded-[10px] flex phone:flex-row middle:flex-col phone:w-max 2xl:w-full gap-[20px] bg-[#1C1C1C] whitespace-nowrap">
            <button className="phone:px-[20px] phone:py-[14px] 2xl:px-[20px] 2xl:py-[14px] 4xl:py-[18px] 4xl:px-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] phone:text-[14px] 4xl:text-[18px] text-[#CAFF33]">Online Banking</button>
            <button className="phone:px-[20px] phone:py-[14px] 2xl:px-[20px] 2xl:py-[14px] 4xl:py-[18px] 4xl:px-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] phone:text-[14px] 4xl:text-[18px] text-white">Financial Tools</button>
            <button className="phone:px-[20px] phone:py-[14px] 2xl:px-[20px] 2xl:py-[14px] 4xl:py-[18px] 4xl:px-[24px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] phone:text-[14px] 4xl:text-[18px] text-white">Customer Support</button>
          </div>
        </div>



        <div className="phone:flex phone:flex-col 2xl:grid 2xl:grid-cols-2 gap-[20px]">
          {/* First block */}
          <div className="flex flex-col gap-[24px] p-[40px] border-[1px] border-[#262626] rounded-[10px] bg-[#1C1C1C]">
            <div className="flex justify-between items-center">
              <p className="phone:text-[18px] 4xl:text-[22px] text-white">24/7 Account Access</p>
              <img src="/mainPage/up.png" alt="" className="phone:w-[24px] 4xl:w-[34px]" />
            </div>
            <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
              Enjoy the convenience of accessing your
              accounts anytime, anywhere through our
              secure online banking platform. Check
              balances, transfer funds, and pay bills
              with ease.
            </p>
          </div>

          {/* Second block */}
          <div className="flex flex-col gap-[24px] p-[40px] border-[1px] border-[#262626] rounded-[10px] bg-[#1C1C1C]">
            <div className="flex justify-between items-center">
              <p className="phone:text-[18px] 4xl:text-[22px] text-white">Mobile Banking App</p>
              <img src="/mainPage/up.png" alt="" className="phone:w-[24px] 4xl:w-[34px]" />
            </div>
            <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
              Stay connected to your finances on
              the go with our user-friendly mobile
              banking app. Easily manage your accounts,
              deposit checks, and make payments from
              your smartphone or tablet.
            </p>
          </div>


          {/* Third block */}
          <div className="flex flex-col gap-[24px] p-[40px] border-[1px] border-[#262626] rounded-[10px] bg-[#1C1C1C]">
            <div className="flex justify-between items-center">
              <p className="phone:text-[18px] 4xl:text-[22px] text-white">Secure Transactions</p>
              <img src="/mainPage/up.png" alt="" className="phone:w-[24px] 4xl:w-[34px]" />
            </div>
            <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
              Rest assured knowing that your
              transactions are protected by
              industry-leading security measures.
              We employ encryption and multi-factor
              authentication to safeguard your
              financial information.
            </p>
          </div>


          {/* Fourth block */}
          <div className="flex flex-col gap-[24px] p-[40px] border-[1px] border-[#262626] rounded-[10px] bg-[#1C1C1C]">
            <div className="flex justify-between items-center">
              <p className="phone:text-[18px] 4xl:text-[22px] text-white">Bill Pay and Transfers</p>
              <img src="/mainPage/up.png" alt="" className="phone:w-[24px] 4xl:w-[34px]" />
            </div>
            <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
              Save time and avoid late fees with
              our convenient bill pay service.
              Set up recurring payments or make
              one-time transfers between your accounts
              with just a few clicks.
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}
