import { Container } from "reactstrap"

export default function CustomBreadcrum({ title, baseLine, image }: any) {
  return (
    <div className="about-header top_banner" style={{ minHeight: "100vh", background: `url(${image})  50% 0% / cover no-repeat`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Container>
        <div className="banner_text" style={{ zIndex: 9 }}  >
          <p>{baseLine}.</p>
          <p style={{ fontSize: "45px", fontWeight: "400" }}>{title}</p>
        </div>
      </Container>
    </div >
  )
}

