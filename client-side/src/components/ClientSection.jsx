import '../styles/style.css'

function ClientSection ({image, data}) {
  return (
    <>
      <div id="carousel-work" className="carousel slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel-work" data-bs-slide-to="0" className="pill-indicator bg-dark active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel-work" data-bs-slide-to="1" className="pill-indicator bg-dark" aria-label="Slide 2"></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {
                data.map(item => {
                  return (
                    <div className="col-2 item mb-3" key={item.id}>
                      <div className="img-card-carousel-client">
                        <img src={item.img_url} alt="asd" className="img" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
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

export default ClientSection