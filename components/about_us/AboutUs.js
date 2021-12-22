import React from 'react'

function AboutUs() {
    return (
        <section id="about" style={{paddingTop:'100px'}} className="about">
  <div style={{color:'#444444'}} className="container ">
    <div className="row content">
      <div className="col-lg-6">
        <h2>About Us</h2>
        <h3>
        Foodii - <span className="fw-light"> is a full-service,  restaurant specialized in delivering a relaxed and memorable dining experience.</span>
        </h3>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <h4>OPENING HOURS</h4>
        <p>Monday - Thursday 7.30 AM to 5:00 PM</p>
        <p>Friday - Saturday 7.30 AM to 5:00 PM</p>
        <p>Sunday 7.30 AM to 5:00 PM</p>
      </div>
    </div>
  </div>
</section>

    )
}

export default AboutUs
