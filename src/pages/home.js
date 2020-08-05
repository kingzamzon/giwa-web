import React from "react";
import welcome_bg from "../img/bg-img/welcome-bg.png";
import device from "../img/bg-img/device.png";
import clients_1 from "../img/clients-img/1.png";
import clients_2 from "../img/clients-img/2.png";
import clients_3 from "../img/clients-img/3.png";
import clients_4 from "../img/clients-img/4.png";
import clients_5 from "../img/clients-img/5.png";
import features from "../img/bg-img/features.png";
import trophy from "../img/core-img/trophy.png";
import edit from "../img/core-img/edit.png";
import video_camera from "../img/core-img/video-camera.png";
import presentation from "../img/core-img/presentation.png";
import portfolio_img_1 from "../img/portfolio-img/1.jpg";
import portfolio_img_2 from "../img/portfolio-img/2.jpg";
import portfolio_img_3 from "../img/portfolio-img/3.jpg";
import portfolio_img_4 from "../img/portfolio-img/4.jpg";
import portfolio_img_5 from "../img/portfolio-img/5.jpg";
import portfolio_img_6 from "../img/portfolio-img/6.jpg";
import portfolio_img_7 from "../img/portfolio-img/7.jpg";
import portfolio_img_8 from "../img/portfolio-img/8.jpg";
import work_progress from "../img/core-img/work-progress.png";
import cta_bg from "../img/bg-img/cta.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>

<section className="welcome_area clearfix" id="home" style={{ backgroundImage: `url("${welcome_bg}")` }}>
        <OwlCarousel items={1} className="hero-slides" loop >
            <div className="single-hero-slide d-flex align-items-end justify-content-center">
                <div className="hero-slide-content text-center">
                    <h2>A Clean and Modern Template</h2>
                    <h4>Get your freebie template now!</h4>
                    <img className="slide-img" src={device} alt="" />
                </div>
            </div>
            <div className="single-hero-slide d-flex align-items-end justify-content-center">
                <div className="hero-slide-content text-center">
                    <h2>A Clean and Modern Template</h2>
                    <h4>Get your freebie template now!</h4>
                    <img className="slide-img" src={device} alt="" />
                </div>
            </div>
        </OwlCarousel>
</section>



      {/* service area start */}
      <section className="mosh-service-area clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <OwlCarousel items={3} className="mosh-service-slides owl-theme" loop>
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
</OwlCarousel>

                </div>
                <div className="col-12 text-center">
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
                <img src={trophy} alt="" />
                <h4>No1 in Sales!</h4>
                <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay=".4s">
                <img src={edit} alt="" />
                <h4>Documentation inside</h4>
                <p>Tiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay=".7s">
                <img src={video_camera} alt="" />
                <h4>Modern Design</h4>
                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
        <div className="single-more-service-area">
            <div className="more-service-content text-center wow fadeInUp" data-wow-delay="1s">
                <img src={presentation} alt="" />
                <h4>Marketing Strategist</h4>
                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am.</p>
            </div>
        </div>
    </section>
    {/* Service Area End  */}

    {/* Portfolio area start */}
    <section className="mosh-portfolio-area section_padding_100_0 clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <p>Our Work</p>
                        <h2>See our Online Portfolio</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="mosh-projects-menu">
            <div className="text-center portfolio-menu">
                <p className="active" data-filter="*">All</p>
                <p data-filter=".gd">Graphic Design</p>
                <p data-filter=".bi">Brand Identity</p>
                <p data-filter=".pho">Photography</p>
                <p data-filter=".wd">Web Design</p>
                <p data-filter=".pc">Printing Colaterall</p>
            </div>
        </div>

        <div className="mosh-portfolio">
             <div className="single_gallery_item gd">
                <img src={portfolio_img_1} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item bi">
                <img src={portfolio_img_2} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item gd bi">
                <img src={portfolio_img_3} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item pho">
                <img src={portfolio_img_4} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item pho">
                <img src={portfolio_img_5} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item wd pc">
                <img src={portfolio_img_6} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item wd">
                <img src={portfolio_img_7} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
            <div className="single_gallery_item pc">
                <img src={portfolio_img_8} alt="" />
                <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                    <div className="port-hover-text text-center">
                        <h4>DFR Corp. Branding</h4>
                        <Link to="#">Brand Identity</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Portfolio area end */}

    {/* Workflow area start */}
    <section className="mosh-workflow-area section_padding_100_0 clearfix">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center mb-0">
                        <p>Our Work Flow</p>
                        <h2>This is how we work on Projects</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="workflow-img">
            <img src={work_progress} alt="" />
        </div>

        <div className="workflow-slides-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <OwlCarousel items={3}
                        className="mosh-workflow-slides owl-carousel"
                        loop
                        >
                            <div className="single-workflow-area d-flex">
                                <h2>1.</h2>
                                <div className="workflow-content ml-15">
                                    <h4>This is the first step</h4>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                                </div>
                            </div>
                            <div className="single-workflow-area d-flex">
                                <h2>2.</h2>
                                <div className="workflow-content ml-15">
                                    <h4>This is the second step</h4>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                                </div>
                            </div>
                            <div className="single-workflow-area d-flex">
                                <h2>3.</h2>
                                <div className="workflow-content ml-15">
                                    <h4>This is the third step</h4>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                                </div>
                            </div>
                            <div className="single-workflow-area d-flex">
                                <h2>4.</h2>
                                <div className="workflow-content ml-15">
                                    <h4>This is the fourth step</h4>
                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Workflow area end  */}

    {/* CTA Area Start */}
    <section className="mosh-call-to-action-area bg-img bg-overlay section_padding_100" style={{ background: `url("${cta_bg}")` }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="cta-content text-center wow fadeIn" data-wow-delay="0.5s">
                        <div className="section-heading">
                            <p>give us a shout</p>
                            <h2>Are you Ready to have a Talk?</h2>
                            <Link to="contact.html" className="btn mosh-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* CTA Area End */}
      </div>
    );
    }
  }

