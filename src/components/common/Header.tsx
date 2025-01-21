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
        <div className={`header-wrapper ${isSticky ? "sticky" : ""}`}>
            <Container className="header-container">
                <Navbar>
                    <NavbarBrand to="/">
                        <img src={Logo} width={150} alt="logo" />
                    </NavbarBrand>
                    <button className="menu-toggle-btn" onClick={toggleMenu}>
                        <span className="menu-icon">&#9776;</span> {/* Hamburger Icon */}
                    </button>
                    <ul className={`nav-menu-overlay d-flex list-style-none m-0 p-0 ${isMenuOpen ? "open" : ""}`} >
                        <li className="mx-3 mb-0">
                            <Link className="links" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="mx-3 mb-0">
                            <Link className="links" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="mx-3 mb-0">
                            <Link className="links" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="mx-3 mb-0">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
                                <DropdownToggle data-toggle="dropdown"
                                    tag="span" caret>Services</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem> <Link className="links" to="/service/Gamma-ray">
                                        Gamma Ray
                                    </Link></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem> <Link className="links" to="/service/XrayAnalyzer">
                                        Xray Analyzer
                                    </Link></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="mx-3 mb-0">
                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={'down'}>
                                <DropdownToggle data-toggle="dropdown" tag="span" caret>Product</DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        <Link className="links" to="/product/xrf-sample">
                                            XRF Sample
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link className="links" to="/service/XrayAnalyzer">
                                            Xray Analyzer
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    <button className="close-menu-btn" onClick={toggleMenu}>
                        &times; {/* Close Icon */}
                    </button>
                    </ul>
                </Navbar>
            </Container>
        </div>
    );
}
