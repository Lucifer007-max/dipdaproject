import "../../App.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo.png'
export function Footer() {
    return (
        <footer className="footer">
            {/* Left Section */}
            <div className="footer-left">
                <h2 className="footer-logo"><img src={'https://www.geospectratech.com/images/logo.png'} className="w-50"/></h2>
                <p className="footer-description">
                    Delivering excellence with sustainability and innovation.
                </p>
                <div className="footer-partners">
                    <h4 className="footer-heading">Explore</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="footer-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Center Section */}
            <div className="footer-center"></div>

            {/* Right Section */}
            <div className="footer-right">
                <h4 className="footer-heading">Follow us</h4>
                <div className="social-icons">
                    <a href="#" className="social-link">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="social-link">
                        <FaTwitter />
                    </a>
                    <a href="#" className="social-link">
                        <FaYoutube />
                    </a>
                    <a href="#" className="social-link">
                        <FaInstagram />
                    </a>
                </div>
                <h4 className="footer-heading footer-address">Location</h4>
                <p className="footer-location">
                    GEOSPECTRA TECHNICAL SERVICES LLC <br />
                    PO Box 214634, Dubai, United Arab Emirates.
                </p>
            </div>
        </footer>
    );
}
