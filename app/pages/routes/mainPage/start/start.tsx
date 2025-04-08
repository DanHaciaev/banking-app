export default function Start() {
    return (
        <section className="relative flex justify-between gap-[80px] my-[120px] mx-[80px] p-[60px] items-center bg-[#1C1C1C] border-[1px] border-[#262626] rounded-[20px]">
            <img src="/mainPage/cases_abstract.png" alt="" className="absolute top-0 left-0 w-[202px]" />

            <div className="flex flex-col gap-[10px] w-3xl relative z-10">
                <p className="text-[#CAFF33] text-[38px]"><span className="text-white">Start your financial journey with </span>YourBank today!</p>
                <p className="text-[#B3B3B3] text-[14px]">
                    Lorem ipsum dolor sit amet consectetur. 
                    Blandit odio semper risus pellentesque 
                    elit. Pellentesque eget ut imperdiet 
                    nulla penatibus. Nascetur viverra arcu 
                    sed amet cursus purus.
                </p>
            </div>

            <button className="py-[14px] px-[24px] bg-[#CAFF33] rounded-[82px] w-fit text-[14px]">Open Account</button>
        </section>
    )
}
