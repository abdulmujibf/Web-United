import '../styles/style.css'

function OurWorkSection ({data}) {
  return (
    <>
      <h1 className="text-center fw-bold">Our Work</h1>
      <div id="carousel-work" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {
            data.map((item, index) => {
              return (
                <>
                  <button key={item.id} type="button" data-bs-target="#carousel-work" data-bs-slide-to={index} className={item.id === 1 ? "pill-indicator bg-danger active" : "pill-indicator bg-danger"}></button>
                </>
              )
            })
          }
        </div>
        <div className="carousel-inner h-100">
          {
            data.map(item => {
              const slide = Object.keys(item)[1]
              return (
                <div className={item.id === 1 ? "carousel-item active h-100" : "carousel-item h-100"} key={item.id}>
                  <div className="row h-100">
                    {
                      item[slide].map(el => {
                        return (
                          <div className="col-4" key={el.id}>
                            <div className="img-card-carousel position-relative">
                              <img src={el.img_url} alt={el.name} className="img" />
                              <div className="position-absolute bottom-0 end-0">
                                <p className="text-light fw-bold mx-3">{el.name}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-work" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel-work" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default OurWorkSection