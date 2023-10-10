import people from "../assets/images/people.png";
import student from "../assets/images/student.png";
import win from "../assets/images/win.png";

function About() {
  return (
    <section
      id="About"
      className="text-center max-md:p-6 p-10 px-14 max-lg:my-9 w-[70%] m-auto my-10 "
    >
      <h2 className="text-[48px] font-bold text-blue mb-14">حول المعهد</h2>
      <div className="flex justify-between items-center gap-4 max-lg:flex-col max-lg:justify-center">
        <article className=" w-[30%] max-lg:my-0   p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl ">
          <img className="h-[50px]" src={student} alt="dollar" />
          <h4 className="text-[35px] my-3 font-bold">60+</h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            عدد الطلاب
          </p>
        </article>
        <article className=" w-[30%] max-lg:my-0  p-3 py-5 flex flex-col items-center  justify-center gap-2 rounded-xl ">
          <img className="h-[50px]" src={win} alt="qualite" />
          <h4 className="text-[35px] my-3 font-bold">+95%</h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            نسبة النجاح
          </p>
        </article>
        <article className=" w-[30%] max-lg:my-0  p-3 py-5 flex flex-col items-center justify-center gap-2 rounded-xl ">
          <img
            className="h-[40px] object-contain w-[70px]"
            src={people}
            alt="service"
          />
          <h4 className="text-[35px] my-3 font-bold">+6</h4>
          <p className="w-[80%] max-md:w-[100%] opacity-[.8] text-[14px]">
            أستاذة الخبراء
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
