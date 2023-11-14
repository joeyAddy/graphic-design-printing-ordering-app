import React from "react";

const PortfolioCard = ({ title, body, image }) => {
  return (
    <div className="col-span-1 flex h-fit space-y-4 relative shadow-md shadow-gray-100 bg-white rounded-lg">
      <div className="flex-[.3] bg-blue-700 py-16 rounded-tl-lg rounded-bl-lg">
        <img
          className="flex-1 relative left-1/2 w-32 h-32 rounded-full aspect-square"
          alt="product image"
          src={image.src}
        />
      </div>
      <div className="flex-[.7] pl-20 flex flex-col justify-center">
        <p className="text-lg uppercase font-bold">{title}</p>
        <p className="my-4 w-9/12">{body}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
