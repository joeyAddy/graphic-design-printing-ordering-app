"use client";
import banner from "@/assets/images/hero.jpg";
import PageBanner from "@/components/common/PageBanner";
import TemplateCard from "@/components/design-templates/TemplateCard";
import image from "@/assets/images/hero.jpg";
import { useEffect } from "react";

const Templates = () => {
  useEffect(() => {
    const init = async () => {
      const { Lightbox, initTE } = await import("tw-elements");
      initTE({ Lightbox });
    };
    init();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <PageBanner
        title="Templates"
        text="  From a business card to the packing cartons and event backdrops;
          we have the right expertise and technical capacity to produce
          anything and everything, regardless of the volume."
        image={banner}
      />
      <div className="flex items-center flex-col self-center my-6 text-center w-1/5 space-y-2">
        <div className="border-2 border-gray-800 w-1/5" />

        <h2 className="text-2xl uppercase font-bold">
          our exquisite Templates
        </h2>
        <div className="border-2 border-gray-800 w-1/5" />
      </div>
      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 p-6"
      >
        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full md:mt-24">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721425/edy_46_jw6qbo.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721425/edy_46_jw6qbo.png"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721425/edy_46_jw6qbo.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col-reverse">
          <div className="w-full mt-5">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721428/edy_52_exf7z4.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721428/edy_52_exf7z4.png"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721428/edy_52_exf7z4.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721421/edy_51_uoez2z.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721421/edy_51_uoez2z.png"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721421/edy_51_uoez2z.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col-reverse">
          <div className="w-full mt-5">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721411/edy_39_saoium.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721411/edy_39_saoium.png"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721411/edy_39_saoium.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721419/edy_49_ti0stg.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721419/edy_49_ti0stg.png"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721419/edy_49_ti0stg.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full md:mt-24">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721416/edy_45_dfq5jt.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721416/edy_45_dfq5jt.png"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721416/edy_45_dfq5jt.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>
      </div>
      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 p-6"
      >
        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full md:mt-24">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721400/edy_26_nycrpz.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721400/edy_26_nycrpz.png"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721400/edy_26_nycrpz.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col-reverse">
          <div className="w-full mt-5">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721399/edy_25_ftfvm7.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721399/edy_25_ftfvm7.png"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721399/edy_25_ftfvm7.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721393/edy_21_k7oi39.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721393/edy_21_k7oi39.png"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721393/edy_21_k7oi39.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col-reverse">
          <div className="w-full mt-5">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721390/edy_14_sbotsr.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721390/edy_14_sbotsr.png"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721390/edy_14_sbotsr.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721389/edy_16_mkmih1.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721389/edy_16_mkmih1.png"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721389/edy_16_mkmih1.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full md:mt-24">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721387/edy_11_hxcska.png"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721387/edy_11_hxcska.png"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1701721387/edy_11_hxcska.png")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-4 gap-6 h-fit px-6 mb-6">
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
        <TemplateCard
          image={image}
          title={"Flyers and Leaflets"}
          description="We print flyers and Leaflets in a wide choice of sizes, styles, and finishing to ensure you stand out at your next event. Popular styles include DL, A6, A5, A4, or folded leaflets; but you can always create your own style working with our designers."
        />
      </div> */}
    </div>
  );
};

export default Templates;
