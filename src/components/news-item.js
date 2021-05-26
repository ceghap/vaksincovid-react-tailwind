const NewsItem = (props) => {
  const { id, title, link, bg } = props.news;

  return (
    <a href={link} key={id}>
      <div
        className="bg-white h-40 p-3 text-white font-bold flex items-end drop-shadow leading-none"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {title}
      </div>
    </a>
  );
};

export default NewsItem;
