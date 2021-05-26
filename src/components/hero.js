import ArrowRight from "./arrow-right";
const Hero = () => {
  return (
    <div className="container mx-auto flex h-96 bg-vaksin-green-light p-10 mt-6 max-w-6xl overflow-hidden">
      <div className="flex flex-col justify-center items-start space-y-3">
        <div>
          <h2 className="font-bold text-vaksin-indigo uppercase text-4xl">
            tempahan untuk slot janji temu vaksin astrazeneca
          </h2>
          <h3 className="text-white uppercase font-bold text-2xl">
            Tempahan telah ditutup. Terima kasih.
          </h3>
        </div>

        <a
          href="https://ceghap.com"
          className="bg-white cursor-pointer text-vaksin-indigo hover:bg-gray-100 uppercase px-4 py-2 flex items-center font-bold"
        >
          <ArrowRight /> <span>Maklumat tepat</span>
        </a>
      </div>
      <div className="overflow-hidden md:-mb-96">
        <img alt="az bottle" src="/images/az-bottle.png" />
      </div>
    </div>
  );
};

export default Hero;
