import { orgName, address } from "../asset";

const Footer = () => {
  return (
    <footer className="bg-main">
      <div className="flex flex-col py-5 pl-6">
        <p className="text-white text-sm font-extrabold tracking-widest uppercase mb-1">
          {orgName}
        </p>
        <span className="text-gainsboro">{address}</span>
      </div>
      <div className="py-3 pl-6 bg-maindark">
        <p className="text-gainsboro">
          ©{new Date().getFullYear()}, {orgName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
