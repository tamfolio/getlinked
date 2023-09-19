import { Link } from "react-router-dom";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="w-[100%] h-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-[57px] md:px-[128px]">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start py-[30px]">
        <h1 className="font-clash text-[#fff] font-bold text-[32px]  lg:text-[58px] 2xl:text-[58px] leading-normal mb-[3px]">getlinked Tech</h1>
        <span className="font-clash text-[#fff] font-bold text-[32px] lg:text-[58px] 2xl:text-[58px] leading-normal mb-[9px] flex">Hackathon <span className="text-light-purple">1.0</span> <img src="./assets/chain.png" alt="" className='w-[32px] h-[32px] md:w-[86px] md:h-[86px]' /> <img src="./assets/spark.png" alt="" className='w-[32px] h-[32px] md:w-[56px] md:h-[56px]'/></span>
        <p className="text-white font-monts text-[13px] md:text-[20px] text-center md:text-left mb-[24px] md:mb-[41px] w-[264px] md:w-[522px]">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Link to='/register'>
        <Button text="Register"/>
        </Link>
        <div className="flex items-end justify-end h-[60px] gap-[20px] lg:mt-[47px] xl:mt-[77px]">
            <div className="flex items-baseline gap-[5px] h-[50px]">
                <p className="text-white font-unica text-[40px] md:text-[64px] h-[50px]">00</p>
                <p className="text-white font-unica text-[14px] h-[50px]">H</p>
            </div>
            <div className="flex items-baseline gap-[5px] h-[50px]">
                <p className="text-white font-unica text-[40px] md:text-[64px] h-[50px]">00</p>
                <p className="text-white font-unica text-[14px] h-[50px]">M</p>
            </div>
            <div className="flex items-baseline gap-[5px] h-[50px]">
                <p className="text-white font-unica text-[40px] md:text-[64px] h-[50px]">00</p>
                <p className="text-white font-unica text-[14px] h-[50px]">S</p>
            </div>
        </div>
      </div>
      <div className="">
        <img src="./assets/hero.png" alt="" className="xl:w-[824px]"/>
      </div>
    </div>
  );
}

export default HeroSection;
