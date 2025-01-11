import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import Logo from '../../assets/logo.png'
export function Header() {
    return (
        <div >
            <Container data-scroll data-scroll-sticky  data-scroll-class="stuck" className="header-container" >
                <Navbar>
                    <NavbarBrand to="/"><img src={Logo} width={150} alt="logo" /></NavbarBrand>
                    <ul className="d-flex list-style-none m-0 p-0">
                        <li className="mx-2"><Link className="links" to='/'>Home</Link></li>
                        <li className="mx-2"><Link className="links" to='/about'>About</Link></li>
                        <li className="mx-2"><Link className="links" to='/contact'>Contact</Link></li>
                    </ul>
                </Navbar>
            </Container>
        </div>
    )
}
