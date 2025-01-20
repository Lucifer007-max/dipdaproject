export default function CustomBreadcrum({ title, image }: any) {
  return (
    <div
      className='breadcrums'
      // data-scroll-section
      style={{
        minHeight: '40vh',
        background: `url(${image})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',

        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 data-scroll data-scroll-speed="2" style={{zIndex:'99'}}> {title}</h1>
      {/* <img src={image} alt="" /> */}
    </div>
  )
}

