import ClientChoose from "./clientChoose";
import { Pricing } from "./Pricing";
import Schedule from "./Schedule";

const SP = () => {
  return (
    <div>
      <Schedule></Schedule>
      <ClientChoose></ClientChoose>
      <Pricing></Pricing>
    </div>
  );
};

export default SP;
