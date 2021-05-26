import ChevronDown from "./chevron-down";

const Nav = () => {
  return (
    <nav className="flex items-end bg-white pt-5">
      <div className="bg-indigo-900 absolute flex left-0 top-0">
        <div className="bg-indigo-900 h-20 w-80"></div>
      </div>
      <div className="container mx-auto max-w-6xl justify-end space-y-1">
        <div className="flex justify-end cursor-pointer">
          <a
            href="https://ceghap.com"
            className="border border-indigo-900 bg-vaksin-indigo text-white font-bold text-sm px-2 py-0"
          >
            BM
          </a>
          <a
            href="https://ceghap.com"
            className="border border-indigo-900 font-bold text-sm text-vaksin-indigo px-2 py-0 hover:bg-indigo-900 hover:text-white"
          >
            EN
          </a>
          <a
            href="https://ceghap.com"
            className="border border-indigo-900 font-bold text-sm text-vaksin-indigo px-2 py-0 hover:bg-indigo-900 hover:text-white"
          >
            中文
          </a>
          <a
            href="https://ceghap.com"
            className="border border-indigo-900 font-bold text-sm text-vaksin-indigo px-2 py-0 hover:bg-indigo-900 hover:text-white"
          >
            தமிழ்
          </a>
        </div>
        <div className="flex justify-end">
          <nav className="font-bold text-sm uppercase text-vaksin-indigo flex items-center cursor-pointer space-x-3 justify-end">
            <a href="https://ceghap.com" className="p-2 inline-block">
              <svg
                className="svg-inline--fa fa-home fa-w-18 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
            </a>
            <span>
              {" "}
              <a
                href="https://ceghap.com"
                className="text-white bg-vaksin-green-light p-2 font-bold"
              >
                Daftar
              </a>
              <a
                href="https://ceghap.com"
                className="text-white bg-vaksin-green-dark p-2 font-bold"
              >
                Semak
              </a>
            </span>

            <a
              href="https://ceghap.com"
              className="p-2 flex items-center space-x-2"
            >
              <span>Statistik & maklumat</span>
              <ChevronDown />
            </a>
            <a href="https://ceghap.com" className="p-2">
              soalan lazim
            </a>
            <a href="https://ceghap.com" className="p-2 flex space-x-2">
              <span>tentang kami</span>
              <ChevronDown />
            </a>
            <a href="https://ceghap.com" className="p-2 flex space-x-2">
              <span>maklumat lain</span>
              <ChevronDown />
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
