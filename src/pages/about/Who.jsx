import React from "react";

const Who = () => {
  return (
    <div className="text-center mx-auto max-w-screen-lg  h-[30vh] mb-48">
      <div className="flex mx-3 justify-center items-center bg-right-top bg-[url('https://i.ibb.co/kgw8BY2/animation-lngekno1-small.gif')] bg-no-repeat    h-full">
        <div className=" " style={{ backgroundSize: "300px" }}>
          <h1 className="text-3xl md:text-6xl font-semibold py-6">
            Who we are
          </h1>
          <p className="text-xl md:text-2xl">
            At Event Craters, we are a passionate team of event management
            professionals dedicated to creating exceptional corporate events.
            With years of experience in the industry, we have established
            ourselves as leaders in the field, known for our creativity,
            attention to detail, and commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
