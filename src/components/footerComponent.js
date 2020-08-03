import React from "react";
import { Link } from "react-router-dom";

export default class FooterComponent extends React.Component {
  render() {
    return (
      <footer className="footer-area clearfix">
        <div className="top-footer-area section_padding_100_0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <Link to="#" className="mb-50 d-block">
                    <span style={{ color: "#fff", fontWeight: "bold" }}>
                      <i className="fa fa-tree"></i> Savvy Inc.
                    </span>
                  </Link>
                  <p>
                    Savvy Inc. bringing about the birthing of a new era in tech.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5>Fast links</h5>
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="#">Services &amp; Features</Link>
                    </li>
                    <li>
                      <Link to="#">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="#">Login / Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5>Blog</h5>
                  <div className="footer-single--blog-post">
                    <Link to="blog_single.html" className="blog-post-date">
                      <p>23 September, 2017</p>
                    </Link>
                    <Link to="blog_single.html" className="blog-post-title">
                      <h6>Why we love stock photos</h6>
                    </Link>
                  </div>
                  <div className="footer-single--blog-post">
                    <Link to="blog_single.html" className="blog-post-date">
                      <p>22 September, 2017</p>
                    </Link>
                    <Link to="blog_single.html" className="blog-post-title">
                      <h6>Designin on grid. A few rules.</h6>
                    </Link>
                  </div>
                  <div className="footer-single--blog-post">
                    <Link to="blog_single.html" className="blog-post-date">
                      <p>20 September, 2017</p>
                    </Link>
                    <Link to="blog_single.html" className="blog-post-title">
                      <h6>2017 World Design Congress</h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-100">
                  <h5>Contact Info</h5>
                  <div className="footer-single-contact-info d-flex">
                    <div className="contact-icon">
                      <img src="img/core-img/map.png" alt="" />
                    </div>
                    <p>&nbsp;Ikeja, Lagos, Nigeria</p>
                  </div>
                  <div className="footer-single-contact-info d-flex">
                    <div className="contact-icon">
                      <img src="img/core-img/call.png" alt="" />
                    </div>
                    <p>
                      Main:
                      <a
                        href="tel://2349040280736"
                        style={{ color: "#abadbe", fontWeight: 500 }}
                      >
                        234-904-028-0736
                      </a>
                      <br />
                      Office:
                      <a
                        href="tel://2349040280736"
                        style={{ color: "#abadbe", fontWeight: 500 }}
                      >
                        234-904-028-0736
                      </a>
                    </p>
                  </div>
                  <div className="footer-single-contact-info d-flex">
                    <div className="contact-icon">
                      <img src="img/core-img/message.png" alt="" />
                    </div>
                    <p>
                      <a
                        href="mailto://enquiry@savvyinc.com"
                        style={{ color: "#abadbe", fontWeight: 500 }}
                      >
                        enquiry@savvyinc.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 h-100">
                <div className="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                  <div className="copyright-text">
                    <p></p>
                  </div>
                  <div className="footer-social-info">
                    <Link to="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
