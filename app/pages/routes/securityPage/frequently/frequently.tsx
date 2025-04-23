import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Frequently() {
    const [showMore, setShowMore] = useState(false);

    const toggleFAQ = () => setShowMore(!showMore);

    return (
        <section className="flex flex-col gap-[60px] phone:mt-[80px] 2xl:mt-[120px] phone:mx-[20px] 2xl:mx-[80px]">
            <div className="flex flex-col gap-[10px]">
                <p className="text-[#CAFF33] phone:text-center phone:text-[28px] 2xl:text-left 2xl:text-[38px] 4xl:text-[48px]">
                    Frequently <span className="text-white">Asked Questions</span>
                </p>
                <p className="text-[#B3B3B3] phone:text-center 2xl:text-left phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">
                    Still you have any questions?
                    Contact our Team via support@yourbank.com
                </p>
            </div>

            <div className="phone:flex phone:flex-col 2xl:grid 2xl:grid-cols-2 phone:gap-[20px] 4xl:gap-[30px]">
                {[
                    {
                        question: "How do I open an account with YourBank?",
                        answer: "Opening an account with YourBank is easy. Simply visit our website and click on the \"Open an Account\" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
                    },
                    {
                        question: "What documents do I need to provide to apply for a loan?",
                        answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
                    },
                    {
                        question: "How can I access my accounts online?",
                        answer: "Accessing your accounts online is simple and secure. Visit our website and click on the \"Login\" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the \"Enroll Now\" button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
                    },
                    {
                        question: "Are my transactions and personal information secure?",
                        answer: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
                    },
                ].map((faq, index) => (
                    <div key={index} className="phone:p-[30px] 2xl:p-[40px] 4xl:p-[50px] rounded-[10px] flex flex-col gap-[24px] border-[1px] border-[#262626]">
                        <p className="text-white phone:text-[18px] 4xl:text-[20px]">{faq.question}</p>
                        <hr className="border-[#262626]" />
                        <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">{faq.answer}</p>
                    </div>
                ))}

                {/* Animated extra FAQ blocks */}
                <AnimatePresence>
                    {showMore && (
                        <>
                            {[{
                                question: "How do I open an account with YourBank?",
                                answer: "Opening an account with YourBank is easy. Simply visit our website and click on the \"Open an Account\" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
                            },
                            {
                                question: "What documents do I need to provide to apply for a loan?",
                                answer: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
                            }].map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="phone:p-[30px] 2xl:p-[40px] 4xl:p-[50px] rounded-[10px] flex flex-col gap-[24px] border-[1px] border-[#262626]"
                                >
                                    <p className="text-white phone:text-[18px] 4xl:text-[20px]">{faq.question}</p>
                                    <hr className="border-[#262626]" />
                                    <p className="text-[#B3B3B3] phone:text-[14px] 2xl:text-[16px] 4xl:text-[18px]">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Toggle button */}
            <button
                onClick={toggleFAQ}
                className="w-fit mx-auto mt-[-40px] px-[20px] flex items-center gap-[8px] py-[14px] text-white text-[14px] rounded-[100px] bg-[#1C1C1C] border-[1px] border-[#262626] transition-all duration-300"
            >
                {showMore ? 'Hide Extra FAQ\'s' : 'Load All FAQ\'s'}
                <motion.img
                    src="/mainPage/arrow_down.png"
                    alt=""
                    className="w-[18px]"
                    animate={{ rotate: showMore ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
        </section>
    );
}
