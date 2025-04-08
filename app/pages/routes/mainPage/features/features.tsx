export default function Features() {
  return (
    <section className="flex flex-col gap-[80px] mt-[120px] mx-[80px]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[#CAFF33] text-[38px]"><span className="text-white">Our </span>Features</p>
          <p className="text-[#B3B3B3] text-[14px]">
            Experience a host of powerful features
            at YourBank, including seamless online
            banking, secure transactions, and
            personalized financial insights, all
            designed to enhance your banking experience
          </p>
        </div>

      </div>

      <div className="flex gap-[20px] items-start">
        <div className="p-[40px] rounded-[10px] flex flex-col gap-[20px] bg-[#1C1C1C] whitespace-nowrap">
          <button className="px-[20px] py-[14px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] text-[14px] text-[#CAFF33]">Online Banking</button>
          <button className="px-[20px] py-[14px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] text-[14px] text-white">Financial Tools</button>
          <button className="px-[20px] py-[14px] bg-[#1A1A1A] border-[1px] border-[#262626] rounded-[100px] text-[14px] text-white">Customer Support</button>
        </div>


        <div className="grid grid-cols-2 gap-[20px]">
          {/* First block */}
          <div className="flex flex-col gap-[24px] p-[40px] border-[1px] border-[#262626] rounded-[10px] bg-[#1C1C1C]">
            <div className="flex justify-between items-center">
              <p className="text-[18px] text-white">24/7 Account Access</p>
              <img src="/mainPage/up.png" alt="" className="w-[24px]" />
            </div>
            <p className="text-[#B3B3B3]">
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
              <p className="text-[18px] text-white">Mobile Banking App</p>
              <img src="/mainPage/up.png" alt="" className="w-[24px]" />
            </div>
            <p className="text-[#B3B3B3]">
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
              <p className="text-[18px] text-white">Secure Transactions</p>
              <img src="/mainPage/up.png" alt="" className="w-[24px]" />
            </div>
            <p className="text-[#B3B3B3]">
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
              <p className="text-[18px] text-white">Bill Pay and Transfers</p>
              <img src="/mainPage/up.png" alt="" className="w-[24px]" />
            </div>
            <p className="text-[#B3B3B3]">
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
