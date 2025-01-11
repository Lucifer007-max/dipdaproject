import { Container } from 'reactstrap';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

const ClientLayout = (props: any) => {
  return (
    <Container fluid className=''>
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}

export default ClientLayout