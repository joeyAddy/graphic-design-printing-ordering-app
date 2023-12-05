import Link from "next/link";
import PortfolioCard from "./PortfolioCard";
import image1 from "@/assets/mockups/edy 13.png";
import image2 from "@/assets/mockups/edy 44.png";
import image3 from "@/assets/mockups/edy 21.png";
import image4 from "@/assets/mockups/edy 51.png";

const Porfolio = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6 md:p-12">
      <h2 className="text-3xl font-semibold text-center">OUR PORTFOLIO</h2>
      <div className="grid lg:grid-cols-2 gap-4 mt-12">
        <PortfolioCard
          image={image1}
          title={"Wedding Stationery"}
          body={
            "Luxurious wedding stationery included custom-designed magnificently printed and majestically finished invitation cards and RSVPs."
          }
        />
        <PortfolioCard
          image={image2}
          title={"Book Publishings"}
          body={
            "An extra thick thesis that needed something artistic for the print as exquisite as the lengthy research in its pages."
          }
        />
        <PortfolioCard
          image={image3}
          title={"Business Stationery"}
          body={
            "A complete set of business stationery, artfully designed, expertly printed, and masterfully finished for our valued customer."
          }
        />
        <PortfolioCard
          image={image4}
          title={"Brochures"}
          body={
            "Product brochure that need to have the richness of color and finish to catch every customer's eye.​"
          }
        />
      </div>
      <div className="h-12 w-fit ml-auto mb-5 pl-4 py-4 pr-52 mt-6 bg-blue-700 flex items-center justify-end">
        <Link
          href="/portfolio"
          className="text-xl text-white font-medium hover:underline underline-offset-4 hover:-translate-y-2 transition-all duration-200 ease-in"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Porfolio;
