"use client";
import ctaImage from "@/assets/images/ctaImage.jpg";
import { useRouter } from "next/navigation";
const CTA = () => {
  const router = useRouter();
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src={ctaImage.src}
                className="w-full rounded-lg object-cover shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                  What are you waiting for?
                </h2>
                <p className="mb-6 pb-2 lg:pb-0">
                  Get the best designs tailored to your specific and explicit
                  taste. We see you through the conception of your idea to the
                  unique design, printing and finishing.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/chat");
                  }}
                  className="rounded-lg border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
