import React from 'react'
import headerStyles from "../styles/Header.module.css";
// import Image from 'next/image';
function Hero() {
    return (
    <div className={headerStyles.height} id="Home">
      <div className={headerStyles.insider}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/11/04/33/child-4617142_960_720.jpg"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block h-100 ">
                <div className={headerStyles.captionseffects}>
               <h1 className="h1 fw-bold animate__animated animate__fadeInDown">Protection</h1> 
               <span className="animate__animated animate__fadeInUp"> 
                 <p className={headerStyles.captionsbody}>
                 Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="https://cdn.pixabay.com/photo/2013/10/24/01/46/children-200066_960_720.jpg"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                <div className={headerStyles.captionseffects}>
                  <h1 className="h1 fw-bold animate__animated animate__fadeInDown">Education</h1>
                  <span className="animate__animated animate__fadeInUp"> 
                 <p className={headerStyles.captionsbody}>
                 Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2021/05/28/00/10/africa-6289451_960_720.jpg"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block mw-100"> 
                <div className={headerStyles.captionseffects}>
                <h1 className="h1 fw-bold animate__animated animate__fadeInDown">Knowledge</h1>
                 <span className="animate__animated animate__fadeInUp"> 
                 <p className={headerStyles.captionsbody}>
                 Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    )
}

export default Hero
