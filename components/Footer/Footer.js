import React from 'react'

function Footer() {
    return (
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>The StellaCenter</h3>
                  <p>
                  P. O. Box 4453 <br />
                  Kampala, Uganda
                    <br />
                    <br />
                    <strong>Phone:</strong> +256-755 032412
                    <br />
                    <strong>Email:</strong>  thestellacentre@gmail.com
                    <br />
                  </p>
                  {/* <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Team</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Work</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Education</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Counselling</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">Supply</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Socials</h4>
                {/* <p>
                All Rights Reserved
                </p> */}
                {/* <form action method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form> */}
                 <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Sailor</span>
            </strong>
            . All Rights Reserved
          </div> */}
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ */}
            {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
          </div>
        </div>
      </footer>
    )
}

export default Footer
