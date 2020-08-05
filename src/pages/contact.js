import React from "react";
import breadcumb from "../img/core-img/breadcumb.png";
import map from "../img/core-img/map.png";
import call from "../img/core-img/call.png";
import message from "../img/core-img/message.png";


import { Link } from "react-router-dom";


export default class Services extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
        <div>
            {/* Breadcrum area start */}
            <div className="mosh-breadcumb-area" style={{ backgroundImage: `url("${breadcumb}")` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumbContent">
                            <h2>Blog</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">The News</li>
                                </ol>
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrum area end */}

            {/* Contact Area Start*/}
            <section className="contact-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="contact-form-area">
                                <h2>Get in touch</h2>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <input type="text" className="form-control" id="name" placeholder="Name" />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <input type="email" className="form-control" id="email" placeholder="E-mail" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <button className="btn mosh-btn mt-50" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="contact-information">
                                <h2>Contact</h2>
                                <div className="single-contact-info d-flex">
                                    <div className="contact-icon mr-15">
                                        <img src={map} alt="" />
                                    </div>
                                    <p>4127/ 5B-C Mislane Road,<br /> Gibraltar, UK </p>
                                </div>
                                <div className="single-contact-info d-flex">
                                    <div className="contact-icon mr-15">
                                        <img src={call} alt="" />
                                    </div>
                                    <p>Main: 203-808-8613 <br /> Office: 203-808-8648</p>
                                </div>
                                <div className="single-contact-info d-flex">
                                    <div className="contact-icon mr-15">
                                        <img src={message} alt="" />
                                    </div>
                                    <p>office@yourbusiness.com</p>
                                </div>
                                <div className="contact-social-info mt-50">
                                    <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-behance" aria-hidden="true"></i></Link>
                                    <Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Contact Area End*/}
        </div>
    );
  }
}
