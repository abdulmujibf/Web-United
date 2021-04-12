import '../styles/style.css'

function HeadSection ({title}) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-5">
        <div>
          <h1 className="fw-bold">{title}</h1>
          <span className="red font-large">What we can do for you</span>
        </div>
        <button className="btn btn-outline-danger">View All</button>
      </div>
    </>
  )
}

export default HeadSection