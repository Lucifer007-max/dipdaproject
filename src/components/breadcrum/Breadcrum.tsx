import { Container } from "reactstrap"

export default function   CustomBreadcrum({ title, baseLine, image , size}: any) {
  return (
    <div className="about-header top_banner" style={{ minHeight: "100vh", minWidth: '100vh', backgroundImage: `url(${image})`, backgroundSize:`${size}`}}>
      <Container>
        <div className="banner_text" style={{ zIndex: 9 }}  >
          <p>{baseLine}.</p>
          <p style={{ fontSize: "45px", fontWeight: "400" }}>{title}</p>
        </div>
      </Container>
    </div >
  )
}

