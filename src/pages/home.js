import React from "react";
import welcome_bg from "../img/bg-img/welcome-bg.png";
import device from "../img/bg-img/device.png";
import clients_1 from "../img/clients-img/1.png";
import clients_2 from "../img/clients-img/2.png";
import clients_3 from "../img/clients-img/3.png";
import clients_4 from "../img/clients-img/4.png";
import clients_5 from "../img/clients-img/5.png";
import features from "../img/bg-img/features.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>

<section class="welcome_area clearfix" id="home" style={{ background: `url("${welcome_bg}")` }}>
        <div class="hero-slides ">
            <div class="single-hero-slide d-flex align-items-end justify-content-center">
                <div class="hero-slide-content text-center">
                    <h2>A Clean and Modern Template</h2>
                    <h4>Get your freebie template now!</h4>
                    <img class="slide-img" src={device} alt="" />
                </div>
            </div>
            <div class="single-hero-slide d-flex align-items-end justify-content-center">
                <div class="hero-slide-content text-center">
                    <h2>A Clean and Modern Template</h2>
                    <h4>Get your freebie template now!</h4>
                    <img class="slide-img" src={device} alt="" />
                </div>
            </div>
        </div>
    </section>



      {/* service area start */}
      <section className="mosh-service-area clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mosh-service-slides">
                        <div className="single-service-area text-center">
                            <h2>01.</h2>
                            <h4>No1 in Sales!</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                        <div className="single-service-area text-center">
                            <h2>02.</h2>
                            <h4>Online Marketing</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                        <div className="single-service-area text-center">
                            <h2>03.</h2>
                            <h4>Modern Design</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                        <div className="single-service-area text-center">
                            <h2>04.</h2>
                            <h4>No1 in Sales!</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                        <div className="single-service-area text-center">
                            <h2>05.</h2>
                            <h4>Online Marketing</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                        <div className="single-service-area text-center">
                            <h2>06.</h2>
                            <h4>Modern Design</h4>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mt-100">
                    <Link to="#" className="btn mosh-btn">Discover More</Link>
                </div>
            </div>
        </div>
    </section>
      {/* service are end */}
    
    {/* cient area start */}
    <section className="mosh-clients-area section_padding_100 clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <p>clients</p>
                        <h2>All our clients love our work</h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="clients-logo-area d-sm-flex align-items-center justify-content-between">
                        <Link to="#"><img src={clients_1} alt="" /></Link>
                        <Link to="#"><img src={clients_2} alt="" /></Link>
                        <Link to="#"><img src={clients_3} alt="" /></Link>
                        <Link to="#"><img src={clients_4} alt="" /></Link>
                        <Link to="#"><img src={clients_5} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* client area end  */}

    {/* Feature Area Start */}
    <section className="mosh-features-area section_padding_100 clearfix">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-12 col-md-6">
                    <div className="section-heading">
                        <p>clients</p>
                        <h2>What you get if you start your business with us</h2>
                    </div>
                    <div className="features-content">
                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio.</p>
                        <div className="features-progress-bar mt-50">
                            <div className="single_progress_bar mb-15 wow fadeInUp" data-wow-delay="0.2s">
                                <p>Development</p>
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="70"></span>
                                </div>
                            </div>
                            <div className="single_progress_bar mb-15 wow fadeInUp" data-wow-delay="0.4s">
                                <p>Design</p>
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="90"></span>
                                </div>
                            </div>
                            <div className="single_progress_bar mb-15 wow fadeInUp" data-wow-delay="0.6s">
                                <p>SEO</p>
                                <div id="bar3" className="barfiller">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="55"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="features-img">
            <img src={features} alt="" />
        </div>
    </section>
    {/* Feature Area End */}

    {/* Service Area Start */}
    <section className="mosh-more-services-area d-sm-flex clearfix">
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay=".1s">
                <img src="img/core-img/trophy.png" alt="" />
                <h4>No1 in Sales!</h4>
                <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
                <img src="img/core-img/edit.png" alt="" />
                <h4>Documentation inside</h4>
                <p>Tiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
                <img src="img/core-img/video-camera.png" alt="" />
                <h4>Modern Design</h4>
                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay="1s">
                <img src="img/core-img/presentation.png" alt="" />
                <h4>Marketing Strategist</h4>
                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
    </section>
    {/* Service Area End  */}
      </div>
    );
    }
  }

