import '../styles/cardProduct.css'

function Card ({data}) {
  return (
    <>
      <div className="col-4 mb-4">
        <div className="card-product text-center position-relative" style={{backgroundColor: `rgb(${Math.random()*255 - 10}, ${Math.random()*255 - 10}, ${Math.random()*255 - 10})`}}>
          <div className="h-100 w-100 d-flex align-items-center justify-content-center">
            <div>
              <img src={data.img_url} className="img-card" alt={data.name} />
            </div>
          </div>
          <div className="card-body">
            <p className="card-text position-absolute bottom-0 mb-2 text-light bolder fs-5">{data.name.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card