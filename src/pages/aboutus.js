import React from "react";
import breadcumb from "../img/core-img/breadcumb.png";
import ceo from "../img/bg-img/ceo.jpg";
import cta from "../img/bg-img/cta-2.jpg";
import headpiece from "../img/bg-img/headpiece.png";
import features_2 from "../img/bg-img/features-2.png";
import settings2 from "../img/core-img/settings-2.png";
import photo_camera from "../img/core-img/photo-camera.png";
import like from "../img/core-img/like.png";
import gamepad from "../img/core-img/gamepad.png";
import c1 from "../img/bg-img/c-1.jpg";
import c2 from "../img/bg-img/c-2.jpg";
import c3 from "../img/bg-img/c-3.jpg";

import { Link } from "react-router-dom";


export default class AboutUs extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
        <div>
            <div className="mosh-breadcumb-area" style={{ background: `url("${breadcumb}")` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumbContent">
                                <h2>About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link to="#">Home</Link>
                                            </li>
                                        <li className="breadcrumb-item active" aria-current="page">Read Our History</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mosh-aboutUs-area section_padding_100_0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="mosh-about-us-content">
                                <div className="section-heading">
                                    <p>Features</p>
                                    <h2>What you get if you start your business with us</h2>
                                </div>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                <Link to="#" className="btn mosh-btn mt-50">Read More</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mosh-about-us-thumb wow fadeInUp" data-wow-delay="0.5s">
                                <img src={headpiece} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Area Start */}
            <section className="mosh-about-features-area section_padding_100">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-md-4">
                            <div className="mosh-features-thumb wow fadeIn" data-wow-delay="0.5s">
                                <img src={features_2} alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-md-8">
                            <div className="mosh-about-us-content">
                                <div className="section-heading">
                                    <p>Features</p>
                                    <h2>Fun facts about the team and why people love us</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="single-feature-area d-flex">
                                            <div className="feature-icon mr-30">
                                                <img src={settings2} alt="" />
                                            </div>
                                            <div className="feature-content">
                                                <h5>A big team</h5>
                                                <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="single-feature-area d-flex">
                                            <div className="feature-icon mr-30">
                                                <img src={photo_camera} alt="" />
                                            </div>
                                            <div className="feature-content">
                                                <h5>Photo enthuziast</h5>
                                                <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="single-feature-area d-flex">
                                            <div className="feature-icon mr-30">
                                                <img src={like} alt="" />
                                            </div>
                                            <div className="feature-content">
                                                <h5>30k Followers</h5>
                                                <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="single-feature-area d-flex">
                                            <div className="feature-icon mr-30">
                                                <img src={gamepad} alt="" />
                                            </div>
                                            <div className="feature-content">
                                                <h5>We love gaming</h5>
                                                <p>Etiam nec odio vestibulum est mat tis effic iturut magna.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="#" className="btn mosh-btn mt-50">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* Features Area End */}

        {/* Few Words Area Start */}
        <section className="few-words-from-ceo d-md-flex">
            <div className="few-words-contents d-flex align-items-center justify-content-center wow fadeInLeftBig" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-11 col-lg-9 col-xl-7">
                            <div className="few-words-text">
                                <div className="section-heading">
                                    <p>Features</p>
                                    <h2>Fun facts about the team and why people love us</h2>
                                </div>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis effic iturut magna. Pellente sque sita met tellus blandit. Etiam nec odio.</p>
                                <div className="ceo-meta-data d-flex align-items-center mt-50">
                                    <div className="ceo-thumb bg-img" style={{ background: `url("${ceo}")` }}></div>
                                    <div className="ceo-name">
                                        <h6>Jim Morison</h6>
                                        <p>Company CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="few-words-thumb bg-img wow fadeInRightBig" data-wow-delay="1.1s" style={{ background: `url("${cta}")` }}></div>
        </section>
    {/* Few Words Area End */}

    {/* Team Area Start */}
    <section className="mosh-team-area section_padding_100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="section-heading text-center">
                        <p>Clients</p>
                        <h2>Meet Our Incredible Team</h2>
                        <h5 className="mt-30">Est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. </h5>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="mosh-team-slides owl-carousel">
                        <div className="single-team-slide text-center">
                            <div className="team-thumbnail">
                                <img src={c1} alt="" />
                            </div>
                            <div className="team-meta-info">
                                <h4>Christine Smith</h4>
                                <span>CEO Company</span>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
                            </div>
                            <div className="team-social-info">
                                <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="single-team-slide text-center">
                            <div className="team-thumbnail">
                                <img src={c2} alt="" />
                            </div>
                            <div className="team-meta-info">
                                <h4>William Donovan</h4>
                                <span>digital designer</span>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
                            </div>
                            <div className="team-social-info">
                                <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="single-team-slide text-center">
                            <div className="team-thumbnail">
                                <img src={c3} alt="" />
                            </div>
                            <div className="team-meta-info">
                                <h4>Michael Kellog</h4>
                                <span>Developer</span>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
                            </div>
                            <div className="team-social-info">
                                <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="single-team-slide text-center">
                            <div className="team-thumbnail">
                                <img src={c2} alt="" />
                            </div>
                            <div className="team-meta-info">
                                <h4>William Donovan</h4>
                                <span>digital designer</span>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque.</p>
                            </div>
                            <div className="team-social-info">
                                <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Team Area End */}

    </div>
    );
  }
}
