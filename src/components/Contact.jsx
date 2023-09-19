import Button from "./Button";
import Navbar from "./Navbar";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-auto bg-blue flex items-center justify-center lg:justify-between lg:pl-[198px] lg:pr-[208px] pb-[50px] px-[49px]">
        <div className="hidden lg:block">
          <h1 className="font-clash text-light-purple text-[32px] font-semibold">
            Get in touch
          </h1>
          <p className="font-monts text-white text-[16px] w-[96px] mt-[17px]">
            Contact Information
          </p>
          <p className="font-monts text-white text-[16px] w-[119px] mt-[17px]">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p className="font-monts text-white text-[16px] w-[171px] mt-[17px]">
            Call Us : 07067981819
          </p>
          <p className="font-monts text-white text-[16px] w-[272px] mt-[17px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div className="mt-[35px]">
            <h2 className="font-clash text-light-purple text-[16px] font-semibold mb-[14px]">
              Share on
            </h2>
            <div className="flex gap-[15px] items-center justify-start">
              <FaInstagram className="w-[24px] h-[24px] fill-white" />
              <FaXTwitter className="w-[24px] h-[24px] fill-white" />
              <FaFacebookF className="w-[24px] h-[24px] fill-white" />
              <FaLinkedinIn className="w-[24px] h-[24px] fill-white" />
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[617px] lg:h-[611px] rounded-[12px] bg-blue lg:contact-form flex items-start justify-center flex-col lg:pl-[92px] mt-[20px]">
          <h1 className="font-clash text-light-purple font-semibold text-[20px] w-[195px]">
            Questions or need assistance?
          </h1>
          <h1 className="font-clash text-light-purple font-semibold text-[20px] w-[205px]">
            Let us know about it!
          </h1>
          <p className="text-white text-[12px] md:hidden w-[239px] mt-[24px]">Email us below to any question related to our event</p>
          <div className="mt-[34px] flex flex-col gap-[25px] lg:gap-[42px]">
            <input
              type="text"
              placeholder="First Name"
              className="input-entry w-[298px] lg:w-[473px] h-[47px] font-monts text-white pl-[29px] placeholder:text-white placeholdr:text-[16px]"
            />
            <input
              type="text"
              placeholder="Mail"
              className="input-entry w-[298px] lg:w-[473px] h-[47px] font-monts text-white pl-[29px] placeholder:text-white placeholder:text-[16px]"
            />
            <textarea
              type="text"
              placeholder="Message"
              className="input-entry w-[298px] lg:w-[473px] h-[119px] font-monts text-white pl-[15px] pt-[6px] placeholder:text-white placeholder:text-[16px]"
            />
          </div>
          <div className="mt-[31px] flex items-center justify-center w-[100%]">
            <Button text="Submit" />
          </div>
          <div className="mt-[41px] w-[100%] flex flex-col items-center justify-center md:hidden">
            <h2 className="font-clash text-light-purple text-[12px] font-semibold mb-[14px]">
              Share on
            </h2>
            <div className="flex gap-[15px] items-center justify-start">
              <FaInstagram className="w-[16px] h-[16px] fill-white" />
              <FaXTwitter className="w-[16px] h-[16px] fill-white" />
              <FaFacebookF className="w-[16px] h-[16px] fill-white" />
              <FaLinkedinIn className="w-[16px] h-[16px] fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
