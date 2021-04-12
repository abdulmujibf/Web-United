import '../styles/style.css'
import Logo from '../assets/v502_768.png'
import SectionCard from '../components/SectionCard'
import { useEffect, useState } from 'react'
import Image from '../assets/v502_1483.png'
import HeadSection from '../components/HeadSection'
import OurWorkSection from '../components/OurWorkSection'
import CarouselAboutUs from '../components/CarouselAboutUs'
import ClientSection from '../components/ClientSection'
import Navbar from '../components/Navbar'
// Logo
import Logo1 from '../assets/v502_742.png'; import Logo2 from '../assets/v502_744.png'; import Logo3 from '../assets/v502_745.png';
import Logo4 from '../assets/v502_746.png'; import Logo5 from '../assets/v502_747.png'; import Logo6 from '../assets/v502_748.png';
import Logo7 from '../assets/v502_749.png'; import Logo8 from '../assets/v502_751.png'; import Logo9 from '../assets/v502_753.png';
import Logo10 from '../assets/v502_754.png'; import Logo11 from '../assets/v502_756.png'; import Logo12 from '../assets/v502_757.png';
import Logo13 from '../assets/v502_759.png'; import Logo14 from '../assets/v502_761.png';
// Our Work Image
import ourWork0 from '../assets/v691_2372.png'; import ourWork2 from '../assets/v733_1558.png'; import ourWork1 from '../assets/v691_2366.png'
const baseUrl = 'http://localhost:3001'

function Home () {
  const [data, setData] = useState([])

  const [client, setClient] = useState([
    {id: 1, name: 'client', img_url: Logo1}, {id: 2, name: 'client', img_url: Logo2}, {id: 3, name: 'client', img_url: Logo3},
    {id: 4, name: 'client', img_url: Logo4}, {id: 5, name: 'client', img_url: Logo5}, {id: 6, name: 'client', img_url: Logo6},
    {id: 7, name: 'client', img_url: Logo7}, {id: 8, name: 'client', img_url: Logo8}, {id: 9, name: 'client', img_url: Logo9},
    {id: 10, name: 'client', img_url: Logo10}, {id: 11, name: 'client', img_url: Logo11}, {id: 12, name: 'client', img_url: Logo12},
    {id: 13, name: 'client', img_url: Logo13}, {id: 14, name: 'client', img_url: Logo14}, {id: 15, name: 'client', img_url: Logo1},
  ])

  const [ourWork, setOurWork] = useState([
    {
      id: 1,
      slides1: [
        {id: 1, name: 'REXONA MEN SOCCER STAR', img_url: ourWork0},
        {id: 2, name: 'BALI UNITED FESTIVAL', img_url: ourWork1},
        {id: 3, name: 'NEW INDOMIE VARIANT', img_url: ourWork2},
      ]
    },
    {
      id: 2,
      slides2: [
        {id: 1, name: 'REXONA MEN SOCCER STAR', img_url: ourWork0},
        {id: 2, name: 'BALI UNITED FESTIVAL', img_url: ourWork1},
        {id: 3, name: 'NEW INDOMIE VARIANT', img_url: ourWork2},
      ]
    },
    {
      id: 3,
      slides3: [
        {id: 1, name: 'REXONA MEN SOCCER STAR', img_url: ourWork0},
        {id: 2, name: 'BALI UNITED FESTIVAL', img_url: ourWork1},
        {id: 3, name: 'NEW INDOMIE VARIANT', img_url: ourWork2},
      ]
    }
  ])

  const [services, setServices] = useState([])

  const [footerText, setFooterText] = useState([
    "Product", "About Us", "Services", "Contact Us",
    "Works", "Career", "Client"
  ])

  useEffect(() => {
    fetch(baseUrl + '/products', {
      method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
          setData(data.Products)
        })
  }, [])

  useEffect(() => {
    fetch(baseUrl + '/services', {
      method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
          setServices(data.Services)
        })
  }, [])

  return (
    <>
      {/* Headers */}
      <header className="header-home">
        <Navbar Logo={Logo} />
        <div className="head-text">
          <h1 className="head-title mb-3 bolder fst-italic">28 MILLION<br />COMMUNITY</h1>
          <button className="btn btn-outline-light btn-header">LETS WORK WITH US</button>
        </div>
        <div className="indicator-header">
          <button type="button" className="btn mx-1 pill-indicator active bg-danger"></button>
          <button type="button" className="btn mx-1 pill-indicator bg-light"></button>
          <button type="button" className="btn mx-1 pill-indicator bg-light"></button>
        </div>
      </header>
      <div className="mx-4">

        {/* Introduction */}
        <section className="mt-5 font-large">
          <p>Bali United Football Club is an Indonesian professional club based in Gianyar, Bali.
            Bali United began operations in 2014 and continues to be of the highest tier in the Indonesian football competition, League 1.
            The club has a vision  to grow the football industry in Indonesia through creating an ecosystem consisting of 4Cs namely the Club,
            Community, Corporation and Country. <span className="fw-bold red">Staying true to this version</span>, the football club launched a sports agency under the name United
            Creative, to always bring the <span className="fw-bold red">GAME ON</span> beyond its own club.</p>
          <p className="mb-5">Warn Regards, <br/>United Creative</p>
          <hr/>
        </section>
  
        {/* Products */}
        <section>
          <SectionCard data={data} title={"Products"} />
        </section>
  
        {/* Carousel */}
        <section className="mt-4 container-carousel">
          <CarouselAboutUs image={Image} />
        </section>
        <hr/>

        {/* Services */}
        <section>
          <SectionCard data={services} title={"Services"} />
        </section>

        {/* Our Works */}
        <section className="container-work">
          <OurWorkSection image={Image} data={ourWork} />
        </section>
        <br/>
        <br/>
        <hr/>
        {/* Clients */}
        <section className="mb-5">
          <HeadSection title={'Clients'} />
          <div className="container">
            <ClientSection image={Image} data={client} />
          </div>
        </section>
        
        <section className="text-center mb-5">
          <h1 className="fst-italic">LET'S CREATE <span className="fw-bold span-bold">CREATIVE PROJECT</span></h1>
          <button className="btn btn-outline-danger mt-3 fw-bold">START PROJECT WITH US</button>
        </section>
      </div>
      <footer className="dark text-light">
        <div className="mx-4 p-4 d-flex justify-content-between">
          <div>
            <img src={Logo} alt="logo" className="logo mb-3" />
            <h6>UNITED CREATIVE HEAD OFFICE</h6>
            <p>Wisma Bali United, Jalan Panjang No.29,<br/>
              Kedoya Selatan, Jakarta Barat <br/>
              (021) 12345678
            </p>
          </div>
          <div className="row">
            {
              footerText.map((item, index) => {
                return (
                  <div className="col-6" key={index}>
                    <p>{item}</p>
                  </div>
                )

              })
            }
          </div>
          <div className="d-flex flex-column align-items-end">
            <div className="bg-light rounded-circle p-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram icon" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </div>
            <span>COPYRIGHT &copy; 2021</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home