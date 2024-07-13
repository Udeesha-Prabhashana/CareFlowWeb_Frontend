import React from "react";
import "./footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem1">CareFlow</li>
          <li className="fListItem">+94 71 0 225 225</li>
          <li className="fListItem">info@echannelling.com</li>
          <li className="fListItem">CareFlow PLC, No: 108, W A D Ramanayake Mawatha, Colombo 2, Sri Lanka.</li>
        </ul>
        <ul className="fList">
          <li className="fListItem1">Others </li>
          <li className="fListItem">Terms and Conditions </li>
          {/* <li className="fListItem">FAQ </li> */}
          <li className="fListItem">Feedback</li>
          <li className="fListItem">Privacy Policy</li>
        </ul>
        <ul className="fList">
          <li className="fListItem1">About </li>
          <li className="fListItem">The Company</li>
          <li className="fListItem">Investor Relations </li>
          <li className="fListItem">Careers</li>
        </ul>
      </div>
      <div className="contact">
        <div className="fText"><WhatsAppIcon/></div>
        <div className="fText"><InstagramIcon/></div>
        <div className="fText"><FacebookIcon/></div>
        <div className="fText"><TwitterIcon/></div>
      </div>
    </div>
  );
};

export default Footer;
