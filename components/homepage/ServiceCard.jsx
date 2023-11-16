const ServiceCard = ({ title, image, text }) => {
  return (
    <div className="col-span-1 h-auto space-y-4 shadow-md shadow-gray-100 bg-blue-50 p-4 rounded-lg ">
      <p className="text-lg uppercase font-bold">{title}</p>
      <img className="flex-1" src={image.src} />
      {text && <p className="w-full text-justify">{text}</p>}
    </div>
  );
};

export default ServiceCard;
