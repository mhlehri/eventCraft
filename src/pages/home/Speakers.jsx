import Speaker from "./Speaker";

const Speakers = () => {
  const speakers = [
    {
      img: "https://i.ibb.co/thV60NL/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash.jpg",
      name: "Rubiya",
      pos: "Consultant /Trade",
      data_aos: "flip-right",
    },
    {
      img: "https://i.ibb.co/qWVc0vS/mohammad-khaksarmadani-4-FDs-Nc-CR8i-Q-unsplash.jpg",
      name: "Jesi",
      pos: "Consultant /Workshop",
      data_aos: "flip-down",
    },
    {
      img: "https://i.ibb.co/DrSJ36c/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg",
      name: "Maikel",
      pos: "Consultant /Communication",
      data_aos: "flip-left",
    },
  ];

  return (
    <div className="mt-28 mb-16 mx-4">
      <h1 className="text-center text-4xl md:text-6xl font-semibold">
        Spearkers
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-auto max-w-screen-2xl py-20">
        {speakers.map((speaker, index) => (
          <Speaker key={index} speaker={speaker}></Speaker>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
