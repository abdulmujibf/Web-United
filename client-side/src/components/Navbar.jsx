function Navbar ({Logo}) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <img src={Logo} alt="logo" className="logo ms-5 mt-2" />
        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <i className="material-icons icon">view_headline</i>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex justify-content-end">
              <button className="nav-link btn text-light">Home</button>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <button className="nav-link btn text-light">Products</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar