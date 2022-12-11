import { ReactComponent as IconCart } from "../../images/cart.svg";
import { ReactComponent as IconAccount } from "../../images/account.svg";

const Extras = () => {
  return (
    <ul className="d-flex list-unstyled align-items-center">
      <li className="col-6 max-w-48 p-2 position-relative">
        <div
          className="max-w-25 max-h-25 bg-green p-1 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-8 position-absolute"
          style={{ top: "5px", right: "10px" }}
        >
          99
        </div>
        <IconCart />
      </li>
      <li className="col-6 max-w-48 p-2">
        <IconAccount />
      </li>
    </ul>
  );
};

export default Extras;
