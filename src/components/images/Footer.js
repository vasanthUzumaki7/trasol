import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import '../../footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>HNTFX</h2>
          <p>
            The HNTFX - The Land of Financial Possibilities. We as a company found by a group of Forex Traders
            solely dedicated to the Forex Business to help and guide the young traders by setting an unequaled trading platform.
            Our hearts were directed to provide the Best service in the world.
          </p>
          <span>2019-2020 Hntfx Markets LLC</span>
        </div>

        <div className="footer-contact">
        <div className="footer-social" style={{display:"flex",justifyContent:"space-evenly",color:"red"}}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaPinterest />
        </div>
          <p>The HNTFX Markets LLC, First Floor, First St Vincent Bank Ltd Building,</p>
          <p>+971-588930103</p>
          <p>support@theHntfx.com</p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Trading</h4>
          <ul>
            <li>Cent</li>
            <li>Classic</li>
            <li>Pro</li>
            <li>Vip</li>
            <li>Islamic Account</li>
            <li>Contract Specification</li>
          </ul>
        </div>

        <div>
          <h4>Instruments</h4>
          <ul>
            <li>Trading Instruments</li>
            <li>Metal and Energies</li>
            <li>Indices</li>
            <li>Commodities</li>
            <li>Cryptocurrencies</li>
            <li>Live Spreads</li>
          </ul>
        </div>

        <div>
          <h4>Platforms</h4>
          <ul>
            <li>Meta Trader 5</li>
            <li>Mobile App</li>
            <li>Web Trader</li>
            <li>Margin and Leverage</li>
            <li>Spreads and Swaps</li>
            <li>Trading Hours</li>
          </ul>
        </div>

        <div>
          <h4>Funding</h4>
          <ul>
            <li>Payment Options</li>
            <li>How to buy Bitcoin</li>
            <li>Funds Security</li>
            <li>Negative Balance Protection</li>
            <li>Deposit To Your Account</li>
          </ul>
        </div>

        <div>
          <h4>Promotions</h4>
          <ul>
            <li>115% Deposit Bonus</li>
            <li>30$ Welcome Bonus</li>
            <li>Free VPS</li>
            <li>Zero Fees</li>
          </ul>
        </div>

        <div>
          <h4>Partnerships</h4>
          <ul>
            <li>Introducing Broker</li>
            <li>Master IB</li>
            <li>Invite a Friend</li>
            <li>Multi Account Manager</li>
            <li>White Label</li>
            <li>Regional Office</li>
          </ul>
        </div>

        <div>
          <h4>Tools</h4>
          <ul>
            <li>Academy</li>
            <li>Economic Calendar</li>
            <li>Forex Signals</li>
            <li>MQL5</li>
            <li>Autochartist</li>
            <li>Myfxbook Auto trade</li>
          </ul>
        </div>

        <div>
          <h4>About Us</h4>
          <ul>
            <li>Who is Hntfx</li>
            <li>Legal Documents</li>
            <li>Lightning Fast ECN Broker</li>
            <li>FAQ</li>
            <li>Complaints</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Legal documents | Risk Disclosure | Preventing Money Laundering | Privacy Agreement</h1>
        <p>
          The Hntfx is the trade name of the Hntfx Markets LLC registered in the Saint Vincent (Registration number 151 LLC 2019).
          Registered office First Floor, First St Vincent Bank Ltd Building, James Street Kingstown St Vincent and the Grenadines.
        </p>
        <p>
          You're strongly recommended to take a piece of independent financial advice from the Financial Masters before making
          any Investment decisions.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni ullam eius perspiciatis, ex dolores reiciendis, assumenda, quos doloribus tenetur pariatur quas temporibus dolore qui quisquam rerum delectus odio repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam soluta ex, a hic harum totam possimus nobis repellat, quidem fugiat atque quam ab libero quae qui placeat. Ratione, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima quas beatae? Sunt quae minima perspiciatis temporibus dicta cumque, modi quod qui at, vel repellat iure eaque aut fugit exercitationem. You're strongly recommended to take a piece of independent financial advice from the Financial Masters before making
          any Investment decisions.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magni ullam eius perspiciatis, ex dolores reiciendis, assumenda, quos doloribus tenetur pariatur quas temporibus dolore qui quisquam rerum delectus odio repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam soluta ex, a hic harum totam possimus nobis repellat, quidem fugiat atque quam ab libero quae qui placeat. Ratione, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima quas beatae? Sunt quae minima perspiciatis temporibus dicta cumque, modi quod qui at, vel repellat iure eaque aut fugit exercitationem.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
