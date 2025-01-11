import { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const ClientLayout = (props: any) => {
  const containerRef = useRef<any>(null);;
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scrollInstance = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.5, 
    });

    return () => {
      // Clean up Locomotive Scroll instance
      scrollInstance.destroy();
    };
  }, []);
  return (
    <div ref={containerRef} data-scroll-container>
      <Container fluid className='p-0'>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </div>
  )
}

export default ClientLayout