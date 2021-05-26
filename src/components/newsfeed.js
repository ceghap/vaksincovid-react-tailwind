import NewsItem from "./news-item";
const news = [
  {
    id: 1,
    title: "maklum balas terhadap dakwaan di laman facebook",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002149.png",
  },
  {
    id: 2,
    title:
      "kenyataan media penjelasan peruntukan rm70 juta bagi pembangunan sistem integrasi data dan janji temu",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002052.png",
  },
  {
    id: 3,
    title: "15 hingga 30 minit tempoh proses suntikan vaksin",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002112.png",
  },
  {
    id: 4,
    title:
      "Tiada rancangan nafikan hak mereka yang enggan ambil vaksin - Khairy",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002214.png",
  },
  {
    id: 5,
    title: "35,100 barisan hadapan Johor terima vaksin COVID-19 mulai hari ini",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002233.png",
  },
  {
    id: 6,
    title:
      "Ketahui lebih lanjut mengenai kelayakan anda untuk mengambil vaksin COVID-19",
    link: "#",
    bg: "https://www.vaksincovid.gov.my/upload/images/ms_MY/repositori/news/ms_MY/news_thumbnail-20210522002254.png",
  },
];

const Newsfeed = () => {
  return (
    <div className="grid grid-cols-4 container mx-auto max-w-6xl mt-6 gap-2">
      {news.slice(0, 4).map((n) => {
        return <NewsItem news={n} />;
      })}
    </div>
  );
};

export default Newsfeed;
