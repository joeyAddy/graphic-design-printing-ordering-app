import React from "react";

const PageBanner = ({ image, text, title }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 h-fit md:!h-72">
      <div className="col-span-1 flex flex-col">
        <div className="md:h-1/3 w-full md:!w-[80%] bg-blue-700 pt-16 pb-4 pl-8 pr-4">
          <h2 className="text-3xl text-white font-semibold">{title}</h2>
        </div>
        <div className=" p-6 md:pl-14 md:pt-5">
          <p>{text}</p>
        </div>
      </div>
      <div className="col-span-1 hidden md:block pt-4">
        <div className="w-full h-full">
          <img
            src={image.src}
            alt="template banner"
            className=" rounded-tl-full rounded-bl-full h-2/3 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
