import React from "react";
import ServiceCard from "./ServiceCard";
import image from "@/assets/images/hero.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-neutral-50 min-h-screen w-full flex items-center justify-center py-12 group">
      <div className="w-[95%] h-fit] bg-white group-hover:p-12 group-hover:bg-neutral-50 group-hover:w-full group-hover:h-full transition-all duration-200 ease-in">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="h-full bg-blue-700 pt-16 pb-4 pl-8 pr-4">
            <h2 className="text-3xl text-white font-semibold">OUR SERVICES</h2>
          </div>
          <p className="md:mt-16 pb-6 px-8">
            From Graphic Design to high end digital printing services to
            finishing; EdyGraphics Limited. has you covered.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row mt-6 md:pr-12 pb-16">
          <div className="flex-[.4] hidden md:flex flex-col justify-between mb-12">
            <p className="md:mt-16 pb-6 px-8">
              We offer a wide range of top quality services at competitive
              prices. Our highly skilled technical team specializes in high
              quality designs, digital printing, and other related services.
            </p>
            <div className="h-12 w-auto mr-12 pr-4 bg-blue-700 flex items-center justify-end">
              <Link
                href="/services"
                className="text-xl text-white font-medium hover:underline underline-offset-4 hover:-translate-y-2 transition-all duration-200 ease-in"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex-[.6] h-fit grid md:grid-cols-2 gap-4">
            <ServiceCard image={image} title={"GRAPHIC DESIGNS"} />
            <ServiceCard image={image} title={"BILLBOARDS/MAGAZINES"} />
            <ServiceCard image={image} title={"BUSINESS CARDS/JOURNALS"} />
            <ServiceCard
              image={image}
              title={"GENERAL DESIGNS/PRINTING SERVICES"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
