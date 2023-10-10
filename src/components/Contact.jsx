import React from "react";
import ContactSection from "./ContactSection";

function Contact() {
  return (
    <section
      id="contact"
      className=" text-end max-md:p-0 py-10 max-lg:my-9 flex w-[90%] m-auto justify-center items-center gap-6 max-lg:flex-col"
    >
      <article className=" flex flex-col justify-center text-center gap-6 items-center  ">
        <p className="w-[70%] max-lg:w-[100%] max-sm:w-[100%] m-auto opacity-[.8] font-medium text-[14px] ">
          سنكون سعداء للتحدث معك! إذا كان لديك أي أسئلة، ملاحظات، أو فرص
          تعاونية، فنحن هنا لنستمع إليك. يهمنا تواصلك معنا ونحن دائماً مستعدين
          للتعاون ومشاركة المعلومات معكم.
        </p>
        <ContactSection />
      </article>
      <iframe
        className="border-2 border-black rounded-lg w-[70%] max-lg:w-full max-lg:mb-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.9201344110868!2d-5.902183145275851!3d35.704969412108156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88a1dc8d9597%3A0x2598305cb9763aeb!2sP33W%2BWX%2C%20Gueznaia!5e1!3m2!1sen!2sma!4v1696505798600!5m2!1sen!2sma"
        height="450"
        n
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Contact;
