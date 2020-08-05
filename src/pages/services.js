import React from "react";
import breadcumb from "../img/core-img/breadcumb.png";
import trophy from "../img/core-img/trophy.png";
import edit from "../img/core-img/edit.png";
import video_camera from "../img/core-img/video-camera.png";
import presentation from "../img/core-img/presentation.png";
import gamepad from "../img/core-img/gamepad.png";
import atomic from "../img/core-img/atomic.png";
import safebox from "../img/core-img/safebox.png";
import settings_2 from "../img/core-img/settings-2.png";
import alarm_clock from "../img/core-img/alarm-clock.png";
import c_1 from "../img/core-img/alarm-clock.png";
import c_2 from "../img/bg-img/c-2.jpg";
import c_3 from "../img/bg-img/c-3.jpg";

import sub_1 from "../img/bg-img/sub-1.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Link } from "react-router-dom";


export default class Services extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
        <div>
            <div className="mosh-breadcumb-area" style={{ backgroundImage: `url("${breadcumb}")` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumbContent">
                                <h2>Services</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">what we offer</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services area start */}
            <section className="mosh--services-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={trophy} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>No1 in Sales!</h4>
                                    <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={edit} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Documentation inside</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={video_camera} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Modern Design</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={presentation} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Marketing Strategist</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={gamepad} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Play with colors</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={atomic} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Mix &amp; Match</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={safebox} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Worth the money</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={settings_2} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>Modern elements</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single-feature-area d-flex mb-100">
                                <div className="feature-icon mr-30">
                                    <img src={alarm_clock} alt="" />
                                </div>
                                <div className="feature-content">
                                    <h4>24 Hours support</h4>
                                    <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to="#" className="btn mosh-btn">Read More</Link>
                        </div>
                    </div>
                </div>
         </section>
            {/* Services area end */}
        
            {/* Testimonial Area start */}
            <section className="mosh-clients-testimonials-area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <p>What they say</p>
                            <h2>Client’s testimonials</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <OwlCarousel items={5}
                            className="testimonials-slides owl-carousel"
                            loop
                            >
                            <div className="single-testimonial-area text-center">
                                <div className="testimonial-content">
                                    <span>"</span>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</p>
                                </div>
                                <div className="testimonials-meta">
                                    <div className="testimonial-thumb bg-img" style={{ backgroundImage: `url("${c_1}")` }}></div>
                                    <h6>Jim Morison</h6>
                                    <p>Company CEO</p>
                                </div>
                            </div>

                            <div className="single-testimonial-area text-center">
                                <div className="testimonial-content">
                                    <span>"</span>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</p>
                                </div>
                                <div className="testimonials-meta">
                                    <div className="testimonial-thumb bg-img" style={{ backgroundImage: `url("${c_2}")` }}></div>
                                    <h6>Jim Morison</h6>
                                    <p>Company CEO</p>
                                </div>
                            </div>

                            <div className="single-testimonial-area text-center">
                                <div className="testimonial-content">
                                    <span>"</span>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</p>
                                </div>
                                <div className="testimonials-meta">
                                    <div className="testimonial-thumb bg-img" style={{ backgroundImage: `url("${c_3}")` }}></div>
                                    <h6>Jim Morison</h6>
                                    <p>Company CEO</p>
                                </div>
                            </div>

                            <div className="single-testimonial-area text-center">
                                <div className="testimonial-content">
                                    <span>"</span>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit.</p>
                                </div>
                                <div className="testimonials-meta">
                                    <div className="testimonial-thumb bg-img" style={{ backgroundImage: `url("${c_2}")` }}></div>
                                    <h6>Jim Morison</h6>
                                    <p>Company CEO</p>
                                </div>
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonial Area End */}

            {/* Cool Facts Area Start */}
            <section className="mosh-cool-facts-area service-page bg-img section_padding_100" style={{ background: `url("${breadcumb}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-cool-fact">
                                <div className="counter-area">
                                    <h3><span className="counter">14</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-cool-fact">
                                <div className="counter-area">
                                    <h3>+<span className="counter">1000</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-cool-fact">
                                <div className="counter-area">
                                    <h3><span className="counter">14</span>k</h3>
                                </div>
                                <div className="cool-facts-content">
                                    <p>Followers on FB</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <div className="single-cool-fact">
                                <div className="counter-area">
                                    <h3><span className="counter">732</span></h3>
                                </div>
                                <div className="cool-facts-content">
                                    <p>Finished Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cool Fact Area End */}

            {/* Service Skill Start */}
            <section className="service-skills-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="single-pie-bar text-center mb-100" data-percent="75">
                                        <canvas className="bar-circle" width="70" height="70"></canvas>
                                        <h6>Awesome</h6>
                                        <p>Etiam nec odio</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-pie-bar text-center mb-100" data-percent="83">
                                        <canvas className="bar-circle" width="70" height="70"></canvas>
                                        <h6>Creative</h6>
                                        <p>Etiam nec odio</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-pie-bar text-center mb-100" data-percent="25">
                                        <canvas className="bar-circle" width="70" height="70"></canvas>
                                        <h6>Lazy</h6>
                                        <p>Etiam nec odio</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-pie-bar text-center mb-100" data-percent="75">
                                        <canvas className="bar-circle" width="70" height="70"></canvas>
                                        <h6>Outstanding</h6>
                                        <p>Etiam nec odio</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="service-skills-content">
                                <div className="section-heading">
                                    <p>Features</p>
                                    <h2>What you get if you start your business with us</h2>
                                </div>
                                <div className="skills-text d-flex">
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit.</p>
                                    <p>Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio. Etiam nec odio vestibulum est mattis effic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service SKill End */}

            <section className="mosh-subscribe-newsletter-area bg-img bg-overlay-white section_padding_100" style={{ background: `url("${sub_1}")` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="subscribe-newsletter-content text-center wow fadeInRightBig" data-wow-delay=".5s">
                                <p>give us a shout</p>
                                <h2>Subscribe to our newsletter</h2>
                                <form action="#">
                                    <input type="email" name="email" id="Email" placeholder="Your e-mail here" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}
