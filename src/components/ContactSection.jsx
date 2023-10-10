import phone from "../assets/icons/phone-black.png";
import phone_white from "../assets/icons/phone_white.png";
import map_black from "../assets/icons/map-black.png";
import mail from "../assets/icons/Envelope.png";

function ContactSection() {
  return (
    <div className=" w-[fit-content]  my-4 max-lg:w-[100%] text-white  bg-white  max-sm:p-4 rounded-lg flex flex-col  gap-3 items-end">
      <article className="flex justify-between gap-2  max-md:flex-col max-sm:gap-4 my-2 w-full ">
        <a
          href={`tel:${"0539383809"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold max-sm:pl-[20%] gap-4 p-4 bg-green-500 text-white rounded-md    px-6"
        >
          <img src={phone_white} alt="phone" />
          05666666666
        </a>
        <a
          href={`tel:${"0661100616"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold max-sm:pl-[20%] gap-4 p-4 bg-white text-black rounded-md    px-6"
        >
          <img src={phone} alt="phone" />
          0666666666
        </a>
        <a
          href={`tel:${"0661060366"}`}
          className="flex max-sm:w-[100%] shadow-md border items-center font-semibold max-sm:pl-[20%] gap-4 p-4 bg-white text-black rounded-md    px-6"
        >
          <img src={phone} alt="phone" />
          066666666
        </a>
      </article>

      <a
        href={`mailto:${" casapapel08@gmail.com"}`}
        className="flex items-center max-sm:w-[100%]   shadow-md border font-semibold pl-[20%] max-sm:pl-[20%] gap-4 p-4 w-full bg-white text-black rounded-md max-sm:text-[16px]  px-6 max-sm:px-4  text-[16px]"
      >
        <img src={mail} alt="phone" />
        emailsomthing@gmail.com
      </a>
      <a
        className="flex items-center shadow-md border font-semibold pl-[20%]  max-sm:pl-[20%]  gap-4 p-4 w-full bg-white text-black rounded-md max-sm:px-3  px-6 text-[16px]"
        href="https://maps.app.goo.gl/8gcDTTpWLJL6XMsX9"
        target="_blank"
      >
        <img src={map_black} alt="phone" className="h-[20px]" />
        Gueznaia Tangier
      </a>
    </div>
  );
}

export default ContactSection;
