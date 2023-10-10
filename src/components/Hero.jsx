import bg from "../assets/images/bg.png";
import test from "../assets/images/testmonials.png";
import map from "../assets/icons/map_black.png";

function Hero() {
  return (
    <section className="h-full flex justify-between items-center max-lg:block bg-[#F9F9F9]">
      <article className="right flex flex-col  items-end gap-6 max-md:gap-10  h-full max-lg:order-1 order-2  mt-10 flex-1 text-right max-lg:text-center pr-[5%] max-lg:pr-0  max-lg:my-10 max-lg:mt-[100px] max-lg:items-center max-lg:w-[80%] max-lg:m-auto ">
        <h1 className="text-blue text-[72px] max-sm:text-[60px] font-bold leading-[100%]">
          وعد <br />
          <span className="text-yellow">أكاديمي</span>
        </h1>
        <h2 className="text-blue font-bold text-[18px]  max-sm:text-[16px]">
          تعلم اللغات واحصل على فرصة عمل أفضل
        </h2>
        <p className="w-[70%]  max-lg:w-[100%] text-blue font-semibold opacity-[.7]">
          في أكاديمية وعد نقدم دورات تعليمية على أعلى مستوى لتعلم الألمانية،
          الإنجليزية، والفرنسية. نساعد الطلاب على التحضير لامتحانات
          وغيرها.TOEFL، IELTS، TCF مثل
        </p>
        <button className="p-4 px-10 bg-purple rounded-lg text-white">
          استكشف الآن!
        </button>
        <div className="flex items-center gap-10 flex-wrap justify-end max-lg:justify-center max-lg:gap-5">
          <a className="flex items-center justify-center gap-3 text-[14px]  max-sm:text-[12px]">
            <img src={map} alt="adress icon" /> gzenaya 90000, Tangier, Morocco
          </a>
          <article className="shadow-lg p-3 rounded-lg max-xl:w-[150px] max-sm:w-full max-sm:flex max-sm:justify-center">
            <img src={test} alt="testmonials" className="max-sm:w-[50%] " />
          </article>
        </div>
      </article>
      <article className="left h-full max-lg:h-[100%] max-lg:w-full flex-1 order-1 max-lg:order-2 max-md:p-4 ">
        <img
          src={bg}
          className="max-lg:w-full max-md:rounded-2xl overflow-hidden"
          alt="background"
        />
      </article>
    </section>
  );
}

export default Hero;
