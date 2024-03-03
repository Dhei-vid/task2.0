import { ReactComponent as Trophy } from "../../assets/trophy.svg";
import "./go-pro.scss";

const GoPro = () => {
  return (
    <div className="main">
      <Trophy />
      <p className="gopro_text">Go Pro Upgrade Now</p>
      <div>
        <p className="gopro_text">$1</p>
      </div>
    </div>
  );
};

export default GoPro;
