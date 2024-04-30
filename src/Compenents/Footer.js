import { useContext } from "react";
import { ContactInfo } from "../Utils/Constant";
import { CompanyInfo } from "../Utils/Constant";
import { DeliverInfo } from "../Utils/Constant";
import ThemeContext from "../Utils/Context/ThemeContext";
const Obj = ({ props }) => {
  return (
    <div className="flex w-44 h-max flex-col items-center justify-center mb-3 ">
      <h2 className="text-xl m-auto ">{props[0].name}</h2>
        {props[1].info.map((e) => {
          return <p className="m-auto " key={self.crypto.randomUUID()}>{e}</p>;
        })}
    </div>
  );
};
const Footer = () => {
  const {theme} =useContext(ThemeContext)
  return (
    <>
      <div className={"flex justify-around " + theme.color1}>
        <Obj props={ContactInfo} />
        <Obj props={CompanyInfo} />
        <Obj props={DeliverInfo} />
      </div>
    </>
  );
};
export default Footer;
