import Row from "./table-row";
import ArrowRight from "./arrow-right";
const statistiks = [
  {
    id: 1,
    state: "johor",
    total: "1,315,186",
    percentage: "46.33%",
  },
  {
    id: 2,
    state: "kedah",
    total: "579,526",
    percentage: "36.24%",
  },
  {
    id: 3,
    state: "kelantan",
    total: "364,858",
    percentage: "29.62%",
  },
  {
    id: 4,
    state: "k.lumpur",
    total: "896,564",
    percentage: "60.54%",
  },
  {
    id: 5,
    state: "labuan",
    total: "39,070",
    percentage: "53.96%",
  },
  {
    id: 6,
    state: "melaka",
    total: "339,091",
    percentage: "48.37%",
  },
  {
    id: 7,
    state: "n.sembilan",
    total: "429,585",
    percentage: "50.58%",
  },
  {
    id: 8,
    state: "pahang",
    total: "426,578",
    percentage: "34.63%",
  },
  {
    id: 9,
    state: "p.pinang",
    total: "719,015",
    percentage: "51.93%",
  },
  {
    id: 10,
    state: "perak",
    total: "774,288",
    percentage: "40.04%",
  },
  {
    id: 11,
    state: "perlis",
    total: "73,295",
    percentage: "38.95%",
  },
  {
    id: 12,
    state: "putrajaya",
    total: "62,499",
    percentage: "100.00%",
  },
  {
    id: 13,
    state: "sabah",
    total: "515,124",
    percentage: "17.56%",
  },
  {
    id: 14,
    state: "sarawak",
    total: "1,172,042",
    percentage: "56.57%",
  },
  {
    id: 15,
    state: "selangor",
    total: "2,843,697",
    percentage: "58.71%",
  },
  {
    id: 16,
    state: "terengganu",
    total: "299,742",
    percentage: "35.61%",
  },
];

const Statistik = () => {
  return (
    <div className="container mx-auto max-w-6xl bg-white p-10 mt-6 pb-1">
      <div>
        <h2 className="font-bold uppercase text-4xl text-vaksin-green-light">
          statistik perkembangan
        </h2>
        <h2 className="font-bold uppercase text-4xl text-vaksin-indigo">
          program imunisasi covid-19 kebangsaan
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-2 space-y-4 mt-6">
          <div>
            <p className="text-vaksin-green-light font-bold text-xl">
              <span className="text-4xl">10,850,160</span> Sudah Daftar
            </p>
            <p className="text-black font-bold text-xl">
              1,662,273 Sudah Divaksinasi
            </p>
          </div>
          <div>
            <div className="w-full rounded">
              <div className="flex w-full bg-gray-200 mt-2 rounded-md">
                <div
                  className="bg-vaksin-indigo text-xs leading-none rounded-md rounded-r-none py-1 text-center text-white"
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
            <p className="text-xs text-vaksin-indigo font-light ">
              * Sasaran Imuniti Kelompok (80% populasi divaksinasi)
            </p>
          </div>
          <a
            href="#"
            className="bg-vaksin-indigo cursor-pointer  text-white hover:bg-blue-500 uppercase px-4 py-2 flex items-center justify-center font-bold"
          >
            <ArrowRight /> <span>Daftar Sekarang</span>
          </a>
        </div>
        <div className="col-span-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            x="0"
            y="0"
            enableBackground="new 0 0 778.3 322.3"
            version="1.1"
            viewBox="0 0 778.3 322.3"
            xmlSpace="preserve"
          >
            undefined
            <path
              fill="#FF9D3C"
              d="M-204.3-99.4v-1l-.7-1.5 4-.6 1.4.7 3-.4.7-1.3 1.5-.4 1.4 1.7 1.6.6.9 1.2-.9 1.8.9.6-2.6 2.9-1.5-1.2-2.9 2-2.6 1-1-2.2.4-2.2-.5-.4-1.6-.1-1.5-.2v-1z"
              className="daftar_mapkedah"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-197.2-93.5l.5-.7 1.2-1h.7v1l.8.3.2.8 1.2.8-.8 1.4h-1.3l-.2 2-1.9.4-1.7-2.6v-1l1-.5.3-.9z"
              className="daftar_mapkedah"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-123.2 72.3l-1.5.9h-.9l-.1-2.5 1.4-1.7 1.8-3.6.7-.9 1.1.6.6 1.3-1.8 3.5-1.3 2.4zM-123.4 65.5c-.4.8-.8 1.5-1.2 2.2-.1-.1-1.4-.9-1.4-.9l.5-1.8 1.8-.2.3.7z"
              className="daftar_mapselangor"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M370.3-28.9l.2-3.2 3.2-3.8 2 1.1-.4 4.2-2.8 1.6-1.1.7-1.1-.6z"
              className="daftar_maplabuan"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M390.5 48.1l2.3-8.2-2.7-1.7.3-1.6 2.9-.9 2-7.6-2.8-1.9.1-6.3.6-4.4-2.9-.8-.9-6.4.5-2.9-1.5-3.1 3.1-3.5-.1-2 3.4-3.1-.1-1.3-1.2-.9-.2-4 .1-2.4-1.4-.9-4.5 1.7-4.7-2-2.3 1.7.1 1.3-1.3 1.1-4.8-1-.2-2.1-3.2-.2-.2 2.4h-.8v.9l.3 1.1 1.3.3.4 1.6 1.8 1.9 1.5 4.6V.3l1.2 1.6.5 2.5-1.3 1 .2 5.7 3.3 2.6 1.1 3.5-3 2-1.4-1.3-2.8-1.3-7.3-1.9.4-4.3-2.3-6.8V1.3l-.7-1.8.4-1.7-1.1-1.2 1-2.1.2-2-.5.2-.9-3.9-2 4.1-5.2.9-1.5 2.6-2.4.5v2.5l.9.7 1.6 11.9 2.4.2-.3 3.6-3 4.8 2-.4-2.6 4 .1 1.9-1.4 1.3-4.1 5.2-2.4.7-1.1-2-2.6-.4-1.5-4.5-2.2-.6-2.1-5.7-2.9.6-3.4-.7.6-3.9-1.9-1.3.1-2.2-2.5-4.9-3-1-1.8-2.4-8.7-.9-1.2 1.4 1.6 5.1-1.5 7.4-6.8 9.2-1 3.1-10.2 10-7.9 4.9-.5 2.6-6.6 8.4.6 1.7-6.2 5-1.6 3.4-4.1 3 .3 3-3.4 2.9-8.6 2.8-2 .1-9.6 3.1-16.1 3.8-6.9 2.2-23.2 3.5-7.6 4.6-3.9 2.6-.9 5.7-.4-6.7-1.5-3.4-3.2.2-1.1 3.8 1.1 10-.4 2.6v2l-2.4-1.2-2.5 2.5-.6 7.9 1 1.7-2.4 1.8 1.5 1.9 3.3-.4-3.4 5.4-.8 3.6-2.4 4.1-1.3 5.3 1.9 3.9h-4.7l-2.5 5.9.4 2.3-1.6.6-8-3.8-1.3.5.1 2.7-1.9-1.8-5.1-2.2-4.5.1.2-1.1-2.7-.9 2.9-4.3-2.5-1.1-2.1.4-1.4 2.1-2.4-.5-.4-2.6-1.8-1.5-1.1 1.5 1.1 3.1-2.9-.9-15.7.4-2.1-1-.7-2.3-8.8-4-2.6-3.8 1.3-3.1-1.8-1.9h-.7l-.9 2.9h-1.5l-.5 1.7-2.2-.1 2.7 6.8 2.9-.1 1.7 1.7-1.3 7.5 7 7 1.6-.3.3 3.3 4.3-.6 1.9 1.7 1.2 4.7 3.9 2.1-.5 2 5.9.9 1.8 3.8 1.5.4 1.9 3.3v1.1l.7.7 2.1-.5.8 1.4h2.6l.3 2.1 1.6.4 1.4 2.4 4.3 1.3 3.1-.1 1.1-1.9.9 1.5 4.2-1.3 1.1-1.3 1.5 1.5.7-2.3 3.1-.9.2-1.7 1.2-1.4 13.1-1.3 2.8-1.9 9.2 3.9 3.9-1 1.1 3.3 1.4.8.5-1.6 1.3-.1.5-1 3.9-1.6 2.5 1.5 2.3-.8 2.9 1.6 1.7-1.1.7-2.6 1.5-.8 2.1-2.1 9.6-.3.4-6.5 4.1-6.8-2.1-.7.9-1.9 3.5-1.2 1.8-1.9 5.7-1.3 2.6-2 16.5 2 3.5-2.6 8.5 1.4-1.1 3.6-3.1 2.3.1 2.1 6.5-2.3 1.6 3.2 9.7.4 4.5 5.1 2.5-2.3 3.6.1 4.3 4.8 9.3-5.1-.3-2.1 6.8-3.7 8.3-1.4 4.1 2.3 1.6-1.4 7.9-3.5 6.5 3.9 2.6-.1 1.5-6.5 4.5-2.9.3-4.8-.7-3.6.9-2.9 1.7-.5 1.4 1.2 1.6-2.1 3.3-.9-1.5-2.2 1.7-3.2-2.3-1.5-1.5 1.1-.9-1.7.7-1.5-1.5-4.9 1.7-4 4.8.6 2.6-.9-.5-4.5 1.4-.8 1.1 1.4 1.3-.4 1.1-2.1 2.1-.4.4-1.4 3.5-2.3 1.9.7 2.3-2.1-3.4-3.9-2-.5-.5 1-1.9-.9 1.1-1.6-.7-4.5 1.5-.4.9-2.9-1.8-1.3 2.8-5.5 3.7-1.8 2.1-4.1 2.6 3.9 8.1-2.8 1-5.2 1.7-.5.1-1.3L388 72l3.3-11.7 1.7 2.1 1.6-2L393 59l-2.5-10.9z"
              className="daftar_mapsarawak"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-169.4-66.6l.1 2.2-1 .3.4 4.5 10.1 1.9.1 14.2 1.4 6-1.4 2h-.4l.2 1.1 2.3.1 3.7-4.7.7-3.6 2.1-.6v-2l2-1.3 2.2.4 2.2-2 .7-5.2.7-1.3 1.5-.2.7-.3.4-3.1-1-.4-.1-1.6 2.3-2.4.6-2.9-1.5-1.1.3-1.9 2.8-1.3-1.1-1.4 1.6-.4-.1-2.4 1.7-2.8 2.3.6.4-2.3 1.5-.8-.8-.8v-6.3L-134-88l.3-1.2 2.6-.9-1.3-3.9-3.3 1.1-2.8-1.7-1.2 2-1.9.3-1.5-.9-1.2.9-.9-2.7.3-1.5-1-1.6v-4.1l-3.3-1.4-1.6-2.2-1.3 1.8-2.2 1.1-4.5-2.2-1.1.5-2.6-2.1-3 .3-2.4-1.7.4 2.7-.7 4.6-3.3 1.8-5.3 6 1.9 1.8 1.9 5.9 1.6 1.8 2.1 6.1-.1 10.8z"
              className="daftar_mapkedah"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-177.5-93.7l5.4-6.1 3-1.6.6-3.8-.6-3.7-2.2-1.6 1.3-.8-1.7-4.2-3.1.5-1.8-1.4-1.5 1.6.4 1.4-.6 1.1.6 3.4-1.2.2-.3 4-1.8 2.9 2.8 7.3.7.8z"
              className="daftar_mapperlis"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-177.6-55.2l2.8.6 1.1-1.2 1.3.3.6 1.2 1 .6-.4 6.9-.4 3.3-1.4.1-1.5-1.3-3-.1-.1-6.9-.7-1 .3-2.3.4-.2zm12.4 18.4h4.9l.7-1-1.3-5.6-.1-13.4-8.2-1.5 1.1 1.4-.3 6.5 1.9 5.1-.7 1.1 1.7 2.7-.7.4v1.1l-1.3 2.1 2.3 1.1z"
              className="daftar_mappenang"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-67.6-65.1l1 6.5L-68-56l.4 2.2-.4 2.4 2.8 1.9-1.3 3.4-.3 6 2.3 1.6 3.3 1.8-.5 2.4-.9 1.1.4 2.2-.8 1.6 1.6 1.4-1 2.6 3.1-.3 4 2.8 1.1 4 .5 1.6 4.9 2.7 2.7-1.1 2.6 4-1.2 3.2-.9.5.1 1.8 1.1 1.4 2.9.6 1.8-1.3 4.4 4.7-1.5 1 .2 2.1-.7 1.3h-2.2l-.9 2.4-.9 1-.2 3.8-1.3 1.5.7.9 3-1.1 7 2 2.2 2.8 2.2.1 3.8 2.1.1 2.5.6 1.7.1-1.9.9-1v-4.5l-1-1.1.6-6.4 3.2.5 3.5.2 2.7-5.6V1.9l-1.6-2.5v-2.7l-.7-3.3 1.7-1-1.7-5.5-.6-8.3-15-27.6-8.7-8.6-2.9-.2-1.1-1-2.2-.8-1.8-2.4-5-3.5-4.4-5.8-2.6-1.2-7.8 7.4z"
              className="daftar_mapterengganu"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-16.3 69.8l.6-5.1.3-7.7-.9-3.1-.5-6 1.3-1.3.7-4.9-4.7-5.1-2.4-5.9 2.1-4.5-.4-1.8 2.3-3.7 1.5.5.4-1.3-1.2-1.2-1.5-5 1.3-1.7v-1.4l-2.3-.1-2-.3-.4 4.5.9 1v5.4l-.9 1-.2 2.8H-24l-1.1-2.9-.1-2-2.9-1.6-2.4-.1-2.3-3-6.2-1.8-3.5 1.2-1.8-2.3 1.7-2 .2-3.8.9-1.3 1.1-3h2.4l.2-.3-.2-2.5.9-.6-2.8-2.9-1.4 1-3.8-.8-1.6-2-.2-3 1.4-.6.8-2.1-1.8-2.7-2.4 1-5.8-3.3-.5-1.8-1.5-.4-.5 1.2-.2 3.8-3.1-1.3-.9 1.7h-2.5l-1.6-1.9-4-.4.6 1.3-1.6 2.8-4-1.1-1.3.4-.5 1.8-3.5-1.9.2-1.3-2.1-1.5-1.1-2.3-1.2.5-2.4 1.2-3.5-1.2-.2 3.6-1.1.8-.6 2.7-2.3-.2-.6-4.1-2.7-1.6.3-2h-.7l-.7 2.1-.5 5.3-4.3 1-2.3 2.3-2.9-1-3.1-2-.9.1v1.5l-3 .5-1-2-2.2-.8-1.1 1.3 1.9 3.9-2.6 3.1 1.2 1.8 1.7-.7 3.2 2.8-1.3 1.5 2.1 3.3-.5 2.2 2.7.8-.4 3.8 3.3.8.3 2.3-.8 2 1.1 2.2-.2 3.5 1.6 2-.3 3.8 2 .6.9 2.6 3.3.3 4.5 6-.4 2.9-1.7.7-.6 1.7 1.1 4.1-1.3 1.5 1.9 2.6 4.9 2.6 1.7-1.2L-88 56l.6 1.1h2.4l.4 2.4 1 .3 2.9-1.4 1.5 1.4 11.5 3.3 3.7 5.1 8.7 4.8 2.2.8.2 3.2 5 1.5 7.7 10.2 9.3 3.4 9.8-3.3 12.5 6.3 1.5-.3-.5-1.6-2.1-1.1 1.2-3.1-1.5-2.4.2-2.1 2.4.5 2-.5.4-.3-.1-.1-1.7-.6-8.5-8.5-1-5.2z"
              className="daftar_mappahang"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF9D3C"
              d="M-103.5-65.8l-1.1 1.8v2.2l1.7 1-1.1 3.1 4.1.5.4 7.9-2.2 2-3.1-.2-1.7-1.2-.3.1-.4 2.2-1.4.3v2l-2.8 1.2-1 4.6-1.2 8.6-2.1 1v.4l1.4 1-.2 3.6-2 2.2.1 3.2-1.4.9.6.7.2 2.3-2.7-.4-.2.6 1.7 2.6 2.9 1 .8 1.7 1.1-.2v-1.6l2.4-.3 3.4 2.2 2 .7 2-2 3.8-.9.4-4.6 1-3.1 3 .1-.4 2.5 2.4 1.4.4 3.7h.3l.5-2.1 1-.8.3-4.5 4.5 1.5 2-1 2.3-1 1.4 3.1 2.5 1.7-.2 1.2 1.4.8.2-1 2.3-.7 3.4 1 .8-1.4-1.3-2.6 6.7.7 1.6 1.8h1.2l1.1-2 2.5 1 .1-2.4 1-2.3 1.8.5-.7-2.6-3.3-2.3-4.4.4 1.3-3.6-1.7-1.4 1.1-2.1-.5-2.4 1-1.3.2-1.3-2.6-1.4-2.9-2.1.4-6.8 1-2.7-2.7-1.8.5-2.9-.5-2.4 1.4-2.6-1.1-6.7 7.9-7.6-3.4-4.1-1.1-3.5-2.6-3.5-2-4.9-6.4-2.5-.3 1.6-4.2-1.3-2.2-1.8-1.1 2 .6 3.6-1.7 3-5.4 4v1.8l-1.4 2.5 1.4.9-.8 2.4-2.5.5-.3 1.8-2.6.9-.3 2.6-2.1-3-2.7.3-.7 1.6-.7-1.1.2 3.5z"
              className="daftar_mapkelantan"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-152.3 10.7c.1 0 3.7 3.9 3.7 3.9v3.7l-1.9-.4-1.1 1.3-.7 2.4-.1 2.3 1.8 2 11-1.1 1.1.8v1l1.1.4.6 2-1.1.6.4.5.2-.1 1.4-1.6 1.8.8 2.5.9.2 1.3 2.4-.1 5.3 2 .1 1.5 3.2-.9-1.2-4 3.2-1.5 1.6 2.6 2 .4 3.5 3.4 1.6-1 1.7-2.6.4-5-1.6-2 .2-3.6-1.2-2.4.9-2.2-.2-1.2-3.6-.8.4-3.8-2.8-.8.6-2.8-2.3-3.6 1.1-1.3-1.7-1.5-2 .8-2.2-3.4 2.7-3.2-1.9-3.9 1.6-1.9-1.8-2.8.5-2.2 2.4.3v-.4l-1.3-1.4 2.1-1.3-.1-3 2-2.2.1-2.5-1.4-1 .1-1.8 2.1-1 1.1-8 1.1-5.2 2.6-1.1v-2.2l1.6-.3.4-2.2 1.6-.3 1.8 1.3 2.3.1 1.4-1.3-.3-6.3-4.6-.6 1.3-3.6-1.4-.8v-3.3l1.2-1.9.4-8h-1.9v-1.5l-3.3-1.6-4 2.9h-4.2l-2 3.6-4.1-.6-.9 1.7.7 3.8-5.5 4.1-1.6-.2.3-1.6-3.2-4.1-1.6-.1-.8-1-2.5 1.1-.1.6 1.5 1.2-.8 4-2.1 2.2v.3l1.1.5-.5 4.8-1.5.6-1 .1-.3.6-.7 5.4-2.9 2.7-2.4-.5-1 .7v2.2l-2.3.6-.6 3.1-4.2 5.4-3.9-.1-.4-2.3h-4.2l-2.5-1.1-1.1 1.8 3 5.6 1.2 3 2 .1.1 1.3 2.8 2.2 1.3 1 .1 2.4-.1 3.1 1.1 1.6v1.7l-.7 1.6 1.9 3-.1 4.6-2.8 6.9 1.4 1.6-.2 1.9-1.1-1.1-1.1 1.1 2.5 2.9h1.5l1.2 1.7c-.3 0 2.4-.4 2.6-.4z"
              className="daftar_mapperak"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M17.7 81.4L16 78.2l2.4-1.3-.2-1.8 1-2.5h1.3l1.8 5.3-.1 1.1 1 1.9-3.9 1.4-1.6-.9zm-.7 22.2l-1-1.6 1.1-.2 1 .9-.1 1.3-1-.4zm20.2-6.5L36 95.7l.3-1.3 1.1.1.7 1.4-.9 1.2zm-11.8 43.6l-1.5-.9.1-3.5-4.6-10.8-1.9-.5-1.2-2.6 1.5-1.5-8.5-13.6 1.4-2.1-.9-1.2-.6-2.4-2.5-2-3.2-4.1-.7-2.2.8-1.5-.6-.5-.3-2.7-1.9-.7-2.5-2.6-1.2.6-1-.7-.9.7-2.6.6-1.3-.3v.4L-7 89l-1 2.7 1.6.8 1 3.4-3.3.6-12.3-6.2-9.8 3.3-10.1-3.7-7.7-10.2-4.4-1.4-2.9 8.1.1 2.8-1 1-.3 3.7v2.4l-1.4 2.3h-.1l-3.4 3-.4 4.7-1.4 1.7 1.3.3 2.5 2.5-1.9 1.5-.4.5 1.4 1.1-.2.5h.1l.4 1.9 3.1 2.3 4.9 6.2 2.2-.9 3.7.7 4.2 5.5 4.3-.5 8.6 6 8 3.1 4.8 9.6.1 2.4 4.3 3.1.1-2.4 1.2-.5.1-1.4.9.1 2 .2 1.9-2.3 1.8-3.7 3.4-2 4.9 1.9 2.5 1.8 4.8.1.5-2.3-.8-2.3.6-1.7-1.6-1.7.4-.9 2.9 2.4.3 2.7.6.4.7 2.8 1.9 2.3-.5 1.5 1.8 1.1 4.5-.1L25 148l.2-1.8 1.2-1.4-.9-1.8-.1-2.3z"
              className="daftar_mapjohor"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-102.3 87.5l2.5-4-.4-9.1 7.4.3 1.5-6.9 1.6-.7-1-3.6 1-1.5-1-2.1-.2-2-1-1-5.8-3.1-2.7-3.6 1.5-1.8-1-3.8.8-2.5 1.6-.7.3-1.7-3.9-5.1-3.5-.4-1-2.7-1.2-.4-.1.7-2 3.1-2.6 1.6-3.9-3.8-2.2-.5-1.4-2.2-1.3.6 1.3 4.1-5.8 1.6-.2-2.2-4.4-1.7-3.2.1-.2-1.7-1.9-.7-1-.4-1 1.2-1.4.6-1.7-2.5 1.5-.8-.1-.5-1.3-.5v-1.3l-.2-.1-8.6.9 1.2.3.3 1.2.5 1.7 2 .4 2.5 1.8.9 2 1.7.5 4.3 3.3 2.2 5.8 5.4 7.5 1.7.3.2.7 3 2.1.4 7.3 2.8 3.3v2.5l-2.8 4-.9 2.7 1.1 2.3 4.5 1.5 1.4 1.5 1.7 3.4 9.3 4.1 2.8 1.1v-.5zM-106 62l1.1-3-.1-1.6 3.8-.4 2.2-.6.3 4.8-.4 4.1-1.3 1.1-2.4.6-2.1-1-1.1-2.3V62zm.8 8.8l.8-1.4 2-.6 1.6 1.7.4 2-2.3 1.5-2.1.4-.4-3.6z"
              className="daftar_mapselangor"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#9BAA44"
              d="M-102.6 65.8l1.7-.4.8-.6.3-3.5-.2-3.3-.9.3-2.7.3.1.7-1.2 3v1.3l.8 1.6 1.3.6z"
              className="daftar_mapkl"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-64 113l1.3-1.6 1-.8-1.3-1.3-2.9-.6 2.4-2.9.4-4.9 3.1-2.7-5.3-1-2.6-1.9-3-.7-2.6 2.1-5.4-2.3-1.5 1.3-3.2.5-1 1.2-1.3-.4-.8.9-2.4 1 .2.6 4.4 1.5 1.4 2.7 1.8.7 1.5 2.3 4.2.9 6.2 3.3 6.1 2.4-.7-.3z"
              className="daftar_mapmelaka"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#BBAC4E"
              d="M-87.6 97.1l1.1-1.3 1.3.4.8-.9 3.3-.5 1.8-1.5 5.4 2.3 2.5-2 3.8.9 2.6 1.8 5.9 1.1.8-1.3v-2.2l.4-4.2.9-.9-.1-2.5 3.1-8.8-.1-2.7-1.5-.6-9-5-3.7-5-11.4-3.2-1.1-1-2.6 1.2-2.2-.6-.3-2.2H-88l-.8-1.5-1.6-1.2-.5.4 1.2 1.2.2 2.2 1.2 2.5-1.1 1.6 1.1 4.1-1.9.9-1.5 7.3-7.2-.3.3 8.2-2.6 4.1-.1.6 2.2-.3.7 1.3.2 1.6 2 1.7 1 4.7 2.6.2 1.1-.4 1.4.8 2.5-1z"
              className="daftar_mapnegerisembilan"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#3CB64C"
              d="M-101.9 71.1l-.9-.9-.8.3-.4.7.2 1.9.6-.1 1.4-.9-.1-1z"
              className="daftar_mapputrajaya"
              transform="translate(204.955 133.833)"
            ></path>
            <path
              fill="#FF5D3C"
              d="M453.1-125l1.3-4.7 5-1.7.5-1.4 1.3.1 1.4 1.3.1 1.6-1 .4-1.1-.4-.4.8.7.9-3.5 1.8-1.4-.7-1.1 2.7-1.8-.7zm10.6 3.6l.2-6.7-.4-1.7 3.5-2.3 1.1-1.8 7.5.4 1.1 1.3-1.7 2.2.9 2.8-2.4 3.1-1.3-.1-2.6.2-4 2.8-.3 1.1-1 .2-.6-1.5zm10.3 3.1l.5-1.8 4.3 2.3-1.1 1.1-2.2.1-1.5-1.7zm3.2 20.8l4.3 1.2 4.3-1.7.8-1.6-1.9-4-4-.3-.7 1.5 1.8 2.2-1.3.4-2.9-.1-.4 2.4zm51.1 99l-1-1.5 3.7.1 1-1.3 1.4-.1 1.1 2 5 .9-1.3 2.6-3-.5-3.5-.9-3.4-1.3zm-22.9 23.4l-10.9-.1-.7-2.1 1.6-2.7h3.3l2 2.6 4.1 1 .6 1.3zm67.9-57.7l-2.7-5.4-4.1-.7-2.8 1.9-5.4-1.1-2 .8-1-1.2-5.8-3.7-2.6-1-5.1-4.9-1.3.2-.5-1.5-12.7-8.3-1.2.5-6.3-1.9-1.8 1.4.3 3.5-1.9 1v2.5l-1.6-1.4-2.3-.3-3.4 2.2-1.3-.1.5-1.9-.5-1.5 1.5.8 2.1-1.1-.4-1.1 3.5-2.5.9-2.6-1.6-1.5-.1-1.9-1.7-1.9.8-2.1-3.5-2.3-1.8 2.9-2.1.6-.4 2.2-7.2 1.1-.4 1.8-4.1-.2-1.4-.4 5-2.6-1.1-2.2-3.4-.6 1.5-1.9-3.3-5.4 1.9-3.3 3.7.7 1.4-3.7-1.1-1.8 1.7-4.6-4.4-3.7-3.9-1.1-2.6-4.6-1.3-.5-1.9 2.9-2.6-.1v-1.1l-2.8-.8-2.4.3-1.9-4.5.5-2.4-2.6-3.8 2.3-2.5-.7-3.4-3.1-.9v-1.2l-2.4-1.5-4.6.9v2.6l-1.3.4.6 4.3-3.1 4-.5 2.7-6.9 6.3h-2.7l-.2-1.8 5.3-8-1.1-2.8-.2-5.7-3.4-3.8-2.1.4-4.9 8.6.3 1.9-1.3 1.1.7 4.4-3.6 2.8-3.6 7.4-6.6 4.3-.8 1.5-1.3.5.4 1.7-1.6.3-5.6 5.3-1.2 3.1-3.4 2.6 1.8 3.1-3.7 6.2-.2 4-6.8 4-.9 5-1.7 4.8-5.6.8-5.6-1 1.1-2.8-2.5-.9-1.2 2.5-8 8.2-2.2.8-.3 5.8 1.6.8 3.6 2.9 5.6.4 1 .4-2.5 1.9-.3 4.1-4.9 3.6 3.6 1.5 4.6-1.8 2.6 1.5-.1 3.1.1 3.4 1.2.9.1 2.4-3.4 3.1.1 2-2.9 3.2 1.3 2.7-.5 3.1.7 5.4 3.2.8-.7 5.5-.1 5.6 1.9 1.3.7-2.6 3.7-3.3 2.7.3 2.8-3.1.4-3.7 1.3-.7 1.5 1.4h2.2l3.1 3.9 1.3.1 1.1-2.3 2.6-.1 1.4-2 5.6.7 3.7-1.8 3.4 5.1 5.3-2.1-.1-2.2 1.1-1.4 2.5 1.3 1.2 1.6 4.4-.4 1.4-1.7 4.9 2.9 2.5-1.7 4.8 1.1.7 1.1 1.8-1.1 6.1.2 3.5-1.4 8.3 5.7 1.7 3.7 6.6-.1.8 1.9 1.5-1.5 2.2-4.5-3.1-5.3 2.7-.7 4.1 2.6 2.9 1.6 5.1 1.6 3.6 2 3.5-1.1 12.6-3.3 1.9-.9 2.9.9 4.1-1.3h2l3.2-2.5 6.4-1.9.8-1.3-4.6-2.7-5.3-.8-2.2 1.2-.8-.5V4.9l-2.8-1.7-1.7-.1-7.5-4.6-3-6.3-1.8-2.1 3.2-3.2 4-1.6 1.4 1 3.9-1.9.1-1.7 2.5 1.7v1.1l2.6 2.6 1.9-.8 1.1-1.2 9 .2 22.4-7.9 4-4.1v-2.7l-.7-1.3.5-3.1z"
              className="daftar_mapsabah"
              transform="translate(204.955 133.833)"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6 gap-8">
        <div>
          <table className="w-full">
            <tbody>
              {statistiks.slice(0, 6).map((s) => (
                <Row stats={s} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="w-full">
            <tbody>
              {statistiks.slice(6, 12).map((s) => (
                <Row stats={s} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="w-full">
            <tbody>
              {statistiks.slice(12).map((s) => (
                <Row stats={s} />
              ))}
            </tbody>
          </table>
          <a
            href="#"
            className="bg-vaksin-indigo cursor-pointer  text-white hover:bg-blue-500 uppercase px-4 py-2 mt-2 flex items-center justify-center font-bold"
          >
            <ArrowRight /> <span>Statistik Terperinci</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Statistik;