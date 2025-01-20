export default function Card({ title, image, details }: any) {
  return (
    <div
      // key={index}
      data-scroll
      // data-scroll-speed={`${(index % 2 === 0 ? 1 : 1) * 2}`} // Alternate speed for cards
      style={{
        background: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        fontSize: '16px',
        color: '#333',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        flexDirection: 'column'
      }}
    >

      <img src={image} alt={title} className="d-block " style={{ width: '150px' }} />
      <h6 className="my-3">  {title}   </h6>
      {/* {industry} */}
      {/* <p style={{textAlign:'justify'}}>{details}</p> */}
    </div>
  )
}