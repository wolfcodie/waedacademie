import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";

function Services() {
  return (
    <section
      id="Services"
      className="text-center max-md:p-6  px-14 max-lg:my-9  m-auto my-10"
    >
      <h2 className="text-[48px] font-bold text-blue mb-14">خدماتنا</h2>
      <div className="flex justify-between items-center gap-4 max-lg:flex-wrap max-lg:justify-center max-lg:gap-2">
        <article className=" w-[25%] max-lg:w-[300px]  max-lg:my-2  p-3 py-5 flex flex-col items-center h-[300px] justify-start gap-2 rounded-xl ">
          <img className="h-[100px]" src={service1} alt="dollar" />
          <h4 className="text-[25px] text-blue my-3 font-bold">
            العديد من اللغات
          </h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            تعلم لغات متعددة مع محترفينا. الإنجليزية، الإسبانية، الألمانية،
            والفرنسية. انضم لتطوير مهاراتك اللغوية معنا
          </p>
        </article>
        <article className=" w-[25%] max-lg:w-[300px]  max-lg:my-2  p-3 py-5 flex flex-col items-center  h-[300px] justify-start gap-2 rounded-xl ">
          <img className="h-[100px]" src={service2} alt="qualite" />
          <h4 className="text-[25px] text-blue my-3 font-bold">
            دروس الدعم و التقوية
          </h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            تقدم مركزنا دروس الدعم والتقوية للتفوق في مختلف المواد التعليمية.
            انضم إلينا لتعزيز مستوى دراستك
          </p>
        </article>
        <article className=" w-[25%] max-lg:w-[300px]  max-lg:my-2  p-3 py-5 flex flex-col items-center h-[300px] justify-start gap-2 rounded-xl ">
          <img className="h-[100px]" src={service3} alt="service" />
          <h4 className="text-[25px] text-blue my-3 font-bold">
            الحساب الدهني
          </h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            تطوير مهارات الحساب الذهني. اكتسب القدرة على الحساب السريع والدقيق.
            انضم إلى دورات الحساب الذهني لدينا الآن{" "}
          </p>
        </article>
        <article className=" w-[25%] max-lg:w-[300px]  max-lg:my-2  p-3 py-5 flex flex-col items-center h-[300px] justify-start gap-2 rounded-xl ">
          <img className="h-[100px]" src={service4} alt="service" />
          <h4 className="text-[25px] text-blue my-3 font-bold">
            التحضير للامتحانات
          </h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            ستعد بفعالية للامتحانات مع دورات التجهيز المخصصة لدينا. نمنحك
            الأدوات والاستراتيجيات للتفوق في الاختبارات.{" "}
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
