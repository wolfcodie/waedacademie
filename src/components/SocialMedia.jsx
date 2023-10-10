import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instgram.png";
import linkdin from "../assets/icons/linkdin.png";
function SocialMedia() {
  return (
    <ul className="flex items-center justify-center gap-2  max-lg:w-[150px]  lg:w-[fit-content] xl:max-w-[300px]">
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={facebook} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={instagram} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={twitter} alt="social media logo" />
        </a>
      </li>
      <li className="border border-3 border-black w-[40px] h-[40px] flex items-center justify-center rounded-full opacity-[.5]">
        <a href="#">
          <img src={linkdin} alt="social media logo" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
