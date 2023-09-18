/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function Explain({img, title, spanned, para, flexDirection }) {
    const flexClass = flexDirection === 'row' ? 'flex-row' : 'flex-row-reverse';

  return (
    <div className={`w-[100%] h-auto flex flex-col md:${flexClass} items-center justify-center md:justify-between bg-blue gap-[58px] px-[42px] pt-[29px] pb-[50px] lg:pl-[256px] lg:pr-[169px] lg:gap-[109px]`}>
      <img src={img} alt="" className="lg:w-[490px] lg:h-[477px]"/>
      <div className="w-[100%] flex flex-col items-center justify-center lg:items-start">
        <h1 className="font-clash text-white lg:text-[32px] font-bold w-[238px] lg:w-[398px] text-center lg:text-left mb-[9px]">
          {title}
          <br/>
          <span className="text-light-purple">{spanned}</span>
        </h1>
        <p className="text-white font-monts text-[13px] lg:[14px] font-normal text-center lg:text-left">
           {para}
          </p>
      </div>
      
    </div>
  );
}

export default Explain;
