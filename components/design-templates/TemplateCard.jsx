import React from "react";

const TemplateCard = ({ image, title, description }) => {
  return (
    <div className="col-span-1 h-fit space-y-4 shadow-md shadow-gray-100 bg-blue-50 px-4 pt-4 pb-6 rounded-lg">
      <img
        className="flex-1 w-full h-44 aspect-square mb-3"
        alt="product image"
        src={image.src}
      />
      <a
        href="#"
        className="text-lg uppercase font-bold pt-3 hover:underline underline-offset-4 hover:text-blue-500"
      >
        {title}
      </a>
      <p className="text-base font-light h-3/5">{description}</p>

      <div className="border-2 border-gray-800" />
    </div>
  );
};

export default TemplateCard;
