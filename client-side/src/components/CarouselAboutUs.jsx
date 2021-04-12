import '../styles/style.css'

function CarouselAboutUs({image}) {
  return (
    <>
      <h1 className="bolder">WHAT MAKE US DIFFERENT</h1>
      <div id="carousel" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="pill-indicator bg-danger active" aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <div className="d-flex align-items-center h-100">
              <div className="img-carousel d-flex justify-content-center">
                <div className="position-relative">
                  <img src={image} alt="asd" className="img" />
                  <div className="position-absolute top-50 end-0 text-light">
                    <h1 className="font-1 text-end me-3">10.000 <br/> COMMUNITY LEADER</h1>
                  </div>
                </div>
              </div>
              <div style={{width: "700px"}}>
                <p>Some asdrepresentative placeholder content for the first slide. Lorem Ipsum
                  Some asdrepresentative placeholder content for the first slide. Lorem Ipsum
                  Some asdrepresentative placeholder content for the first slide. Lorem Ipsum
                  Some asdrepresentative placeholder content for the first slide. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default CarouselAboutUs