import product1 from "@/assets/mockups/edy 28.png";
import product2 from "@/assets/mockups/edy 18.png";
import product3 from "@/assets/mockups/edy 1.png";
import product4 from "@/assets/mockups/edy 47.png";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Products = () => {
  return (
    <div className="min-h-screen p-12 bg-neutral-50">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl text-blue-700 font-semibold uppercase">
          Products
        </h2>
        <p className="w-2/3 pt-1">
          We deliver splendid products, for every project no matter what the
          volume; owing to our state of the art printing equipment, skilled
          professionals, and decades of experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 mt-12">
        <ProductCard image={product1} title={"Bespoke Wedding Stationery"} />
        <ProductCard
          image={product2}
          title={"Booklets & Presentation Folders"}
        />
        <ProductCard image={product3} title={"Business Stationery"} />
        <ProductCard image={product4} title={"Same Day Flyers & Leaflets"} />
      </div>
      <div className="h-12 w-fit ml-auto pl-4 py-4 pr-52 mt-6 bg-blue-700 flex items-center justify-end">
        <Link
          href="/templates"
          className="text-xl text-white font-medium hover:underline underline-offset-4 hover:-translate-y-2 transition-all duration-200 ease-in"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Products;
