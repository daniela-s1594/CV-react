import { info } from "../../Data/data";
import "./Header.css";

export const Header = () => {
  return (
    <header className="Header">
      <img src={info.image} alt="image" className="dani_photo" />
      <div className="header-elements">
        <p href="">{info.name}</p>
        <p href="">{info.phone}</p>
        <p href="">{info.profession}</p>
        <p href="">{info.email}</p>
        <p href="">{info.address}</p>
      </div>
    </header>
    )
};