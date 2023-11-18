import hero from "@/assets/images/hero.jpg";
const Hero = () => {
  return (
    <div className="bg-neutral-50 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mt-2 mb-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              EDYGRAPHIC AND PRINTING <br />
            </h1>
            <span className="text-primary !text-xl mb-12">
              Over 10 years of excellence in producing supreme quality,
              cost-effective digital design printing.​ With our latest digital
              technology and expert designers we can offer same day printing on,
              leaflets, brochures and much much more.
            </span>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src={hero.src}
              className="w-full object-cover rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
