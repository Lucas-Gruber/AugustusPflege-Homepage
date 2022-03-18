const Footer = () => {
  return (
    <>
      <div className="items-center hidden w-full text-white bg-black sm:flex sm:text-sm bg-opacity-80 h-60 md:text-base">
        <div className="flex items-center w-full px-5">
          <div className="border-2 border-yellow-500 border-opacity-50 border-solid">
            <iframe
              loading="lazy"
              className="sm:h-[144px] sm:w-[225px] md:w-[300px] md:h-[192px]"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbUZloJeZnkcR7G3iVg3KT3Q&key=AIzaSyBjNIhs2-TbdJfb5lh_eDAW9CZ4L23KhbM"
            ></iframe>
          </div>
          <div className="pl-5">
            Kontakt:
            <br />
            <br />
            <p>Schöneckstraße 1</p>
            <p>86163 Augsburg</p>
            <p>Tel.: 0821 / 906 76 411</p>
            <p>Fax.: 0821 / 906 76 413</p>
          </div>
        </div>
        <div className="absolute right-0 text-right">
          <div className="pr-5">
            <p>Schreiben sie uns</p>
            <p>
              Email:{" "}
              <a
                href="mailto:augustuspflege@web.de"
                className="text-yellow-500"
              >
                augustuspflege@web.de
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full h-40 text-xs text-white bg-black sm:hidden bg-opacity-80">
        <div className="flex items-center w-full px-2">
          <div className="border-2 border-yellow-500 border-opacity-50 border-solid">
            <iframe
              loading="lazy"
              className="h-[120px] w-[188px]"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbUZloJeZnkcR7G3iVg3KT3Q&key=AIzaSyBjNIhs2-TbdJfb5lh_eDAW9CZ4L23KhbM"
            ></iframe>
          </div>
          <div className="pl-5">
            Kontakt:
            <br />
            <p>Schöneckstraße 1</p>
            <p>86163 Augsburg</p>
            <p>Tel.: 0821 / 906 76 411</p>
            <p>Fax.: 0821 / 906 76 413</p>
            <br />
            <br className="hidden sm:block" />
            <p>
              Email:{" "}
              <a
                href="mailto:augustuspflege@web.de"
                className="text-yellow-500"
              >
                augustuspflege@web.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
