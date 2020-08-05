import React from "react";
import breadcumb from "../img/core-img/breadcumb.png";
import portfolio_img_1 from "../img/portfolio-img/1.jpg";
import portfolio_img_2 from "../img/portfolio-img/2.jpg";
import portfolio_img_3 from "../img/portfolio-img/3.jpg";
import portfolio_img_4 from "../img/portfolio-img/4.jpg";
import portfolio_img_5 from "../img/portfolio-img/5.jpg";
import portfolio_img_6 from "../img/portfolio-img/6.jpg";
import portfolio_img_7 from "../img/portfolio-img/7.jpg";
import portfolio_img_8 from "../img/portfolio-img/8.jpg";
import portfolio_img_9 from "../img/portfolio-img/9.jpg";
import portfolio_img_10 from "../img/portfolio-img/10.jpg";
import portfolio_img_11 from "../img/portfolio-img/11.jpg";
import portfolio_img_12 from "../img/portfolio-img/12.jpg";


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
                                <h2>Portfolio</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Our Work</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrum area end */}

            {/* Portfolio area start */}
            <section className="mosh-portfolio-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mosh-projects-menu">
                                <div className="portfolio-menu">
                                    <p className="active" data-filter="*">All</p>
                                    <p data-filter=".gd">Graphic Design</p>
                                    <p data-filter=".bi">Brand Identity</p>
                                    <p data-filter=".pho">Photography</p>
                                    <p data-filter=".wd">Web Design</p>
                                    <p data-filter=".pc">Printing Colaterall</p>
                                </div>
                            </div>
                        </div>
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
                    <div className="single_gallery_item pc">
                        <img src={portfolio_img_9} alt="" />
                        <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                            <div className="port-hover-text text-center">
                                <h4>DFR Corp. Branding</h4>
                                <Link to="#">Brand Identity</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single_gallery_item pc">
                        <img src={portfolio_img_10} alt="" />
                        <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                            <div className="port-hover-text text-center">
                                <h4>DFR Corp. Branding</h4>
                                <Link to="#">Brand Identity</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single_gallery_item pc">
                        <img src={portfolio_img_11} alt="" />
                        <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                            <div className="port-hover-text text-center">
                                <h4>DFR Corp. Branding</h4>
                                <Link to="#">Brand Identity</Link>
                            </div>
                        </div>
                    </div>
                    <div className="single_gallery_item pc">
                        <img src={portfolio_img_12} alt="" />
                        <div className="gallery-hover-overlay d-flex align-items-center justify-content-center">
                            <div className="port-hover-text text-center">
                                <h4>DFR Corp. Branding</h4>
                                <Link to="#">Brand Identity</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center mt-100">
                    <Link to="#" className="btn mosh-btn">Load More</Link>
                </div>
            </section>
            {/* Portfolio area end */}
        </div>
    );
  }
}
