import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, NavbarText } from "reactstrap";
import Logo from '../../assets/logo.png'
export function Header({ args }: any) {

    return (
        <Container data-scroll data-scroll-sticky data-scroll-class="stuck" >
            <Navbar {...args} className="">
                <NavbarBrand href="/"><img src={Logo} width={150} /></NavbarBrand>
                <ul className="d-flex list-style-none m-0 p-0">
                    <li className="mx-2"><Link className="links" to='/'>Home</Link></li>
                    <li className="mx-2"><Link className="links" to='/about'>about</Link></li>
                    <li className="mx-2"><Link className="links" to='/contact'>COntact</Link></li>
                </ul>
            </Navbar>
        </Container>
    )
}
