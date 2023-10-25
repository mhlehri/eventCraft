import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Services({ card }) {
  const { _id, title, img, description, price, data_aos } = card;

  return (
    <Card data-aos={data_aos}>
      <CardBody>
        <img
          src={img}
          alt="card-image"
          className="rounded-lg shadow-lg shadow-gray-400 mb-4"
        />
        <h1 className="mb-2 text-2xl text-black font-semibold">{title}</h1>
        <h3 className="text-xl font-semibold ">
          Price: <span className="text-red-700">{price}</span>
        </h3>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/servicesDetails/${_id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
