const Footer = () => {
  return (
    <div className="bg-white mt-6 p-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl grid grid-cols-2">
        <div>
          <h3 className="text-indigo-900 uppercase text-sm font-bold">
            info terikini di sini!
          </h3>
          <div className="mt-5 flex h-10 space-x-3">
            <a href="https://ceghap.com">
              <img
                alt="facebook icon"
                className="h-10 w-10"
                src="/images/footer_facebook.png"
              />
            </a>
            <a href="https://ceghap.com">
              <img
                alt="instagram icon"
                className="h-10 w-10"
                src="/images/footer_instagram.png"
              />
            </a>
            <a href="https://ceghap.com">
              <img
                alt="twitter icon"
                className="h-10 w-10"
                src="/images/footer_twitter.png"
              />
            </a>
            <a href="https://ceghap.com">
              <img
                alt="youtube icon"
                className="h-10 w-10"
                src="/images/footer_youtube.png"
              />
            </a>
            <a href="https://ceghap.com">
              <img
                alt="telegram icon"
                className="h-10 w-10"
                src="/images/footer_telegram-logo.png"
              />
            </a>
          </div>
        </div>
        <div className="text-right ">
          <p className="text-indigo-900 text-sm font-semibold">
            Untuk sebarang pertanyaan atau aduan, sila hubungi:
          </p>
          <a
            href="https://ceghap.com"
            className="text-blue-500 underline text-sm font-semibold"
          >
            info@vaksincovid.gov.my
          </a>
        </div>
      </div>
      <div className="w-full absolute right-0 -bottom-6 flex justify-end">
        <div className="w-96 h-16 bg-indigo-900 "></div>
        <div className="w-96 h-16 bg-indigo-900 "></div>
        <div className="w-20 h-16 bg-indigo-900 "></div>
      </div>
    </div>
  );
};

export default Footer;
