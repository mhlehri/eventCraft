import React from "react";

const Team = () => {
  const teamSection = [
    {
      name: "Sarah Smith",
      position: "Co-Founder and Event Director",
      description:
        "With over 15 years of experience in event planning, Sarah leads our team with unmatched expertise and creativity. Her passion for creating memorable events is the driving force behind our success.",
      image:
        "https://i.ibb.co/LYB0LWD/rafaella-mendes-diniz-et-78-Qk-MMQs-unsplash.jpg",
      aos: "flip-left",
    },
    {
      name: "John Anderson",
      position: "Creative Director",
      description:
        "As our Creative Director, John brings a fresh and innovative approach to event design. His keen eye for aesthetics and attention to detail ensure that each event is a work of art.",
      image:
        "https://i.ibb.co/860V1vk/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg",
      aos: "flip-right",
    },
    {
      name: "Emily Davis",
      position: "Team Building Specialist",
      description:
        "Emily specializes in team building activities that boost team cohesion and productivity. Her dynamic workshops have helped countless teams reach new heights of collaboration.",
      image:
        "https://i.ibb.co/dt4zXzC/matheus-ferrero-W7b3e-DUb-2-I-unsplash.jpg",
      aos: "zoom-in",
    },
    {
      name: "Michael Johnson",
      position: "Event Coordinator",
      description:
        "Michael's organizational skills are the backbone of our event coordination efforts. He ensures that every logistical detail is flawlessly executed, leaving clients stress-free.",
      image: "https://i.ibb.co/Cbjtbxm/vince-fleming-j3lf-Jn6deo-unsplash.jpg",
      aos: "zoom-in",
    },
    {
      name: "Olivia White",
      position: "Client Relations Manager",
      description:
        "Olivia is dedicated to providing outstanding client service. Her commitment to clear communication and client satisfaction makes her a valuable asset to our team.",
      image: "https://i.ibb.co/SPg7VgT/aiony-haust-3-TLl-97-HNJo-unsplash.jpg",
      aos: "flip-up",
    },
    {
      name: "Daniel Martin",
      position: "Award Ceremony Specialist",
      description:
        "Daniel is our go-to expert for planning and executing award ceremonies. His meticulous planning ensures that each honoree feels truly special and celebrated.",
      image:
        "https://i.ibb.co/8jZgFs4/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg",
      aos: "flip-up",
    },
  ];

  return (
    <div className=" my-20 md:my-32 mx-5">
      <h1 className="text-3xl md:text-5xl text-center my-10 md:my-20 font-semibold">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto  gap-10">
        {teamSection.map((member, i) => (
          <MemberC key={i} member={member}></MemberC>
        ))}
      </div>
    </div>
  );
};

const MemberC = ({ member }) => {
  return (
    <div
      data-aos={member.aos}
      className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl  p-6"
    >
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
        <img
          src={member.image}
          alt="tania andrew"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {member.name}
            </h5>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
            {member.position}
          </p>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default Team;
