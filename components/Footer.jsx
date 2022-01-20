const Footer = () => {
  return (
    <div className="flex items-center w-full text-white bg-black bg-opacity-80 h-60">
      <div className="flex items-center w-full px-5">
        <div className="border-2 border-yellow-500 border-opacity-50 border-solid">
          <iframe
            width="250"
            height="192"
            loading="lazy"
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
            <span className="text-yellow-500">augustuspflege@web.de</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
