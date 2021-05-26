import ChevronRight from "./chevron-right";

const Menu = () => {
  return (
    <div className="container mx-auto max-w-6xl mt-6 bg-white  grid grid-cols-6 ">
      <div className="bg-vaksin-indigo text-white col-span-1 p-4 font-bold">
        Maklumat lanjut
      </div>
      <div className="text-vaksin-indigo flex justify-between col-span-5 py-4 px-8 font-bold uppercase text-sm cursor-pointer">
        <a href="#">soalan lazim</a>
        <a href="#">penerbitan</a>
        <a href="#">video</a>
        <a href="#">berita</a>
        <a href="#">tentang jkjav</a>
        <a href="#">tentang citf</a>
        <a href="#" className="flex space-x-8 items-center">
          <span>tajaan koporat</span> <ChevronRight />
        </a>
      </div>
    </div>
  );
};
export default Menu;
