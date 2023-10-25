const Footer = () => {
  return (
    <footer className=" bg-[#f5f5f5]  rounded-none px-4 lg:px-8 py-8">
      <div className="flex  border-b border-b-black mx-auto max-w-screen-2xl flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#f5f5f5] text-center md:justify-between   pb-6">
        <h1 className="border-4 border-black text-2xl md:text-4xl">
          <span className="bg-black p-1 md:p-0 text-white">Event</span>
          Crafters
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
          <li>
            <a className="cursor-pointer block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a className="cursor-pointer block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:underline">
              License
            </a>
          </li>
          <li>
            <a className="cursor-pointer block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:underline">
              Contribute
            </a>
          </li>
          <li>
            <a className="cursor-pointer block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <p className="block pt-6 text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        © 2023 EventCrafters
      </p>
    </footer>
  );
};

export default Footer;
