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
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose templated
            </button>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col-reverse">
          <div className="w-full mt-5">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/1016368_OJK9410_mcpebk.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/1016368_OJK9410_mcpebk.jpg"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/1016368_OJK9410_mcpebk.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948581/21742871_6494056_ztlwjz.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948581/21742871_6494056_ztlwjz.jpg"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948581/21742871_6494056_ztlwjz.jpg")
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
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948587/9411715_3619_dbz1ec.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948587/9411715_3619_dbz1ec.jpg"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948587/9411715_3619_dbz1ec.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948584/10705525_18935515_gsjrhu.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948584/10705525_18935515_gsjrhu.jpg"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948584/10705525_18935515_gsjrhu.jpg")
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
              src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948576/2525027_340264-PB2BNE-82_w9flgk.jpg"
              data-te-img="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948576/2525027_340264-PB2BNE-82_w9flgk.jpg"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948576/2525027_340264-PB2BNE-82_w9flgk.jpg")
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
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 p-6 !pt-0"
      >
        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
              alt="Dark Roast Iced Coffee"
              className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full mb-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full mb-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
              alt="Table Full of Spices"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
          <div className="w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
              alt="Coconut with Strawberries"
              className="cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
              }
              className="w-full text-center bg-blue-500 text-white py-2 font-medium"
            >
              Choose template
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 flex-col">
          <div className="w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
              data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
              alt="Dark Roast Iced Coffee"
              className=" w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
            />
            <button
              onClick={() =>
                (window.location.href =
                  "/chat?template=https://res.cloudinary.com/dw9oa2vpq/image/upload/v1699948578/8945323_4031914_xzl0a5.jpg")
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
