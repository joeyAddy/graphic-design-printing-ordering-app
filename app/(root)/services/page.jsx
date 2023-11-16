import PageBanner from "@/components/common/PageBanner";
import React from "react";
import banner from "@/assets/images/hero.jpg";
import ServiceCard from "@/components/homepage/ServiceCard";
import Link from "next/link";
import image from "@/assets/images/hero.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageBanner
        title="Services"
        text="We understand your project, quality-monitor it every step of the process, respect your budget, & deliver premium products swiftly."
        image={banner}
      />
      <div className="flex items-center flex-col self-center my-6 text-center w-1/5 space-y-2">
        <div className="border-2 border-gray-800 w-1/5" />

        <h2 className="text-2xl uppercase font-bold">
          Our High Quality Services
        </h2>
        <div className="border-2 border-gray-800 w-1/5" />
      </div>
      <div className="flex-1 flex flex-col md:flex-row mt-6 md:pr-12 pb-16 px-6">
        <div className="flex-1 h-fit grid md:grid-cols-4 gap-6">
          <ServiceCard
            image={image}
            title={"Finishing"}
            text="With our in-house finishing service, we can keep a tight grip on quality and deadlines for your project. Our broad range of finishing products includes folding, collating, laminating, foiling, and perforating. We also offer a range of binding options like hard and soft binding, case binding, saddle stitching, PUR binding, and Wiro binding. "
          />
          <ServiceCard
            image={image}
            title={"Packing and Delivery"}
            text="A job well done needs to be a job well delivered. Making sure that you receive your high-quality product in due time is our priority. We have a fleet of drivers and riders, who can deliver your order within London on time. However, if you are based outside of London we can use an overnight courier."
          />
          <ServiceCard
            image={image}
            title={"Student Printing"}
            text="We are the most experienced specialists in printing thesis and dissertations for students offering binding service on our large format HP printer which is also perfect for high-quality posters. We offer the fastest and most reliable poster printing service within London, with collection time, within an hour. "
          />
          <ServiceCard
            image={image}
            title={"GRAPHIC DESIGNS"}
            text="We are the most experienced specialists in printing thesis and dissertations for students offering binding service on our large format HP printer which is also perfect for high-quality posters. We offer the fastest and most reliable poster printing service within London, with collection time, within an hour. "
          />
          <ServiceCard
            image={image}
            title={"BILLBOARDS/MAGAZINES"}
            text="We are the most experienced specialists in printing thesis and dissertations for students offering binding service on our large format HP printer which is also perfect for high-quality posters. We offer the fastest and most reliable poster printing service within London, with collection time, within an hour. "
          />
          <ServiceCard
            image={image}
            title={"BUSINESS CARDS/JOURNALS"}
            text="We are the most experienced specialists in printing thesis and dissertations for students offering binding service on our large format HP printer which is also perfect for high-quality posters. We offer the fastest and most reliable poster printing service within London, with collection time, within an hour. "
          />
          <ServiceCard
            image={image}
            title={"GENERAL DESIGNS/PRINTING SERVICES"}
            text="We are the most experienced specialists in printing thesis and dissertations for students offering binding service on our large format HP printer which is also perfect for high-quality posters. We offer the fastest and most reliable poster printing service within London, with collection time, within an hour. "
          />
          <ServiceCard
            image={image}
            title={"Foiling, Embossing, and Die-cutting"}
            text="Adding a little luxury to your printed materials. Our embossing, foil stamping, and die-cutting make your simple project look regal. Perfect for presentation folder, greeting cards, book covers, Letterheads, reports, and everything else.  "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
