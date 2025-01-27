import { Link } from "react-router-dom";
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand } from "reactstrap";
import Logo from '../../assets/logo.png'
import { useEffect, useState } from "react";
export function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setIsSticky(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsSticky(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggle = () => setDropdownOpen((prevState) => !prevState);
    // const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen2);


    return (
        <div className={`header-wrapper`}>
            <Container className="header-container">
                <Navbar>
                    <NavbarBrand to="/">
                        <img src={'https://www.geospectratech.com/images/logo.png'} width={150} alt="logo" />
                    </NavbarBrand>
                    <button className="menu-toggle-btn d-lg-none d-xl-none d-sm-block d-block d-md-none" onClick={toggleMenu}>
                        <span className="menu-icon">&#9776;</span> {/* Hamburger Icon */}
                    </button>
                    <ul className={`nav-menu-overlay d-flex list-style-none m-0 p-0 ${isMenuOpen ? "open" : ""}`} >
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/about" onClick={toggleMenu}>
                                About
                            </Link>
                        </li>
                        {/* SERVICE LINK */}
                        <li className="mx-3 mb-0">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
                                <DropdownToggle data-toggle="dropdown"
                                    tag="span" caret>Services</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        <Link className="links" to="/service/xray-analyzer" onClick={toggleMenu}>
                                            X-RAY Analyzer
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link className="links" to="/service/pgnaa-analyzer" onClick={toggleMenu}>
                                            PGNAA  Analyzer
                                        </Link>
                                    </DropdownItem>
                                    {/* <DropdownItem divider />
                                    <DropdownItem>
                                        <Link className="links" to="/service/pgnaa-analyzer" onClick={toggleMenu}>
                                            Analytical Process & Quality Control
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link className="links" to="/service/pgnaa-analyzer" onClick={toggleMenu}>
                                            Radtion Service Product
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link className="links" to="/service/pgnaa-analyzer" onClick={toggleMenu}>
                                            Environmental & Geological Engineering
                                        </Link>
                                    </DropdownItem> */}
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        {/* PRODUCT LINKS */}
                        <li className="mx-3 mb-0">
                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={'down'}>
                                <DropdownToggle data-toggle="dropdown" tag="span" caret>Product</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        <Link className="links" to="/product/xrf-sample-preperation-product" onClick={toggleMenu}>
                                            XRF Sample Preperation Product
                                        </Link>
                                    </DropdownItem>
                                    {/* <DropdownItem divider /> */}
                                    {/* <DropdownItem>
                                        <Link className="links" to="/product/radiation-isotope-products" onClick={toggleMenu}>
                                            Radiation Isotope Products
                                        </Link>
                                    </DropdownItem> */}
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/training" onClick={toggleMenu}>
                                Training
                            </Link>
                        </li>
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/contact" onClick={toggleMenu}>
                                Expertise
                            </Link>
                        </li>
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/contact" onClick={toggleMenu}>
                                Our Network
                            </Link>
                        </li>
                        <li className="mx-3 overflow-hidden mb-0">
                            <Link className="links" to="/contact" onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <button className="close-menu-btn d-lg-none d-xl-none d-sm-block d-block d-md-none" onClick={toggleMenu}>
                            &times; {/* Close Icon */}
                        </button>
                    </ul>
                </Navbar>
            </Container>
        </div>
    );
}
