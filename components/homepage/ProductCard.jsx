const ProductCard = ({ title, image }) => {
  return (
    <div className="col-span-1 h-fit space-y-4 shadow-md shadow-gray-100 bg-blue-50 p-4 rounded-lg">
      <img
        className="flex-1 w-full h-44 aspect-square"
        alt="product image"
        src={image.src}
      />
      <p className="text-lg uppercase font-bold">{title}</p>
      <div className="border-2 border-gray-800" />
    </div>
  );
};

export default ProductCard;
