import ArrowRight from "./arrow-right";

const Info = () => {
  return (
    <div
      className="container mx-auto max-w-6xl mt-6 h-96 p-10 flex items-center"
      style={{
        background: "url(/images/home_banner.png)",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "511px",
      }}
    >
      <div className="space-y-4">
        <div>
          <p className="font-bold text-vaksin-green-light text-5xl">
            LINDUNG DIRI,
          </p>
          <p className="font-bold text-white text-5xl">LINDUNG SEMUA.</p>
        </div>
        <div>
          <p className="text-vaksin-green-light font-bold text-xl">
            <span className="text-4xl">10,850,160</span> Sudah Daftar
          </p>
          <p className="text-white font-bold text-xl">
            1,662,273 Sudah Divaksinasi
          </p>
        </div>

        <div>
          <div className="w-1/3 rounded">
            <div className="flex w-full bg-white mt-2 rounded-md">
              <div
                className="bg-yellow-500 text-xs leading-none rounded-md rounded-r-none py-1 text-center text-white"
                style={{ width: "7%" }}
              >
                7%
              </div>
              <div
                className="bg-vaksin-green-light text-xs leading-none rounded-md rounded-l-none py-1 text-center text-white"
                style={{ width: "38%" }}
              >
                38%
              </div>
            </div>
          </div>
          <p class="text-xs text-white font-light ">
            * Sasaran Imuniti Kelompok (80% populasi divaksinasi)
          </p>
        </div>

        <p className="text-white text-lg font-medium w-1/2">
          Anda sudah mendaftar? Jika belum, daftar sekarang untuk lindungi diri
          dan yang tersayang.
        </p>
        <a
          href="#"
          className="bg-vaksin-green-light cursor-pointer text-white hover:bg-vaksin-green-dark uppercase px-4 py-2 inline-flex items-center font-bold"
        >
          <ArrowRight /> <span>Daftar Sekarang</span>
        </a>
      </div>
    </div>
  );
};

export default Info;
