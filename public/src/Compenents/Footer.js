import { useContext } from "react";
import { ContactInfo } from "../Utils/Constant";
import { CompanyInfo } from "../Utils/Constant";
import { DeliverInfo } from "../Utils/Constant";
import ThemeContext from "../Utils/Context/ThemeContext";
const Obj = ({ props }) => {
  return (
    <div className="flex sm:w-44 w-[33vw] h-max flex-col items-center justify-center mb-3 ">
      <p className="text-[5vw] sm:text-3xl  m-auto ">{props[0].name}</p>
        {props[1].info.map((e) => {
          return <p className="m-auto text-[3vw] sm:text-xl " key={self.crypto.randomUUID()}>{e}</p>;
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
