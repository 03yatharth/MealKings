import { ContactInfo } from "../src/Constant";
import { CompanyInfo } from "../src/Constant";
import { DeliverInfo } from "../src/Constant";
const Obj = ({ props }) => {
  return (
    <div className="contact">
      <h2>{props[0].name}</h2>
      {
        <div className="head">
          <div className="detail">
            {props.map((e) => {
              return <div key={self.crypto.randomUUID()}>{e.info.join("\n")}</div>;
            })}
          </div>
        </div>
      }
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Obj props={ContactInfo} />
        <Obj props={CompanyInfo} />
        <Obj props={DeliverInfo} />
      </div>
    </>
  );
};
export default Footer;
