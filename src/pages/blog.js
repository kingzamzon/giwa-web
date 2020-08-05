import React from "react";
import breadcumb from "../img/core-img/breadcumb.png";
import blog_img_1 from "../img/blog-img/1.jpg";
import blog_img_2 from "../img/blog-img/2.jpg";
import blog_img_3 from "../img/blog-img/3.jpg";
import lb_1 from "../img/blog-img/lb-1.jpg";
import lb_2 from "../img/blog-img/lb-2.jpg";
import lb_3 from "../img/blog-img/lb-3.jpg";
import lb_4 from "../img/blog-img/lb-4.jpg";
import ins_1 from "../img/blog-img/ins-1.jpg";
import ins_2 from "../img/blog-img/ins-2.jpg";
import ins_3 from "../img/blog-img/ins-3.jpg";
import ins_4 from "../img/blog-img/ins-4.jpg";
import ins_5 from "../img/blog-img/ins-5.jpg";
import ins_6 from "../img/blog-img/ins-6.jpg";


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

            {/* Blog Area Start */}
            <section className="blog-area section_padding_100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="mosh-blog-posts">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="single-blog wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="blog-post-thumb">
                                                <img src={blog_img_1} alt="" />
                                            </div>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Lore Papp,</Link><Link to="#">October 22, 2017,</Link><Link to="#">Uncategorized,</Link><Link to="#">3 Comments</Link></h6>
                                            </div>
                                            <h2>The best November Design Inspiration</h2>
                                            <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am. Quisque luctus lorem eu massa ornare, ac posuere massa finibus. Pellentesque varius dui quis feugiat sodales. Fusce varius arcu sed massa convallis malesuada. Pellentesque interdum lorem a leo cursus, non aliquet ante tincidunt.</p>
                                            <Link to="#">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-blog wow fadeInUp" data-wow-delay="0.7s">
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Lore Papp,</Link><Link to="#">October 22, 2017,</Link><Link to="#">Uncategorized,</Link><Link to="#">3 Comments</Link></h6>
                                            </div>
                                            <h2>News about the New Yourk Design Conference</h2>
                                            <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am. Quisque luctus lorem eu massa ornare, ac posuere massa finibus. Pellentesque varius dui quis feugiat sodales. Fusce varius arcu sed massa convallis malesuada. Pellentesque interdum lorem a leo cursus, non aliquet ante tincidunt.</p>
                                            <Link to="#">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-blog wow fadeInUp" data-wow-delay="1.2s">
                                            <div className="blog-post-thumb">
                                                <img src={blog_img_2} alt="" />
                                            </div>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Lore Papp,</Link><Link to="#">October 22, 2017,</Link><Link to="#">Uncategorized,</Link><Link to="#">3 Comments</Link></h6>
                                            </div>
                                            <h2>The best November Design Inspiration</h2>
                                            <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am. Quisque luctus lorem eu massa ornare, ac posuere massa finibus. Pellentesque varius dui quis feugiat sodales. Fusce varius arcu sed massa convallis malesuada. Pellentesque interdum lorem a leo cursus, non aliquet ante tincidunt.</p>
                                            <Link to="#">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-blog wow fadeInUp" data-wow-delay="1.7s">
                                            <div className="blog-post-thumb">
                                                <img src={blog_img_3} alt="" />
                                            </div>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Lore Papp,</Link><Link to="#">October 22, 2017,</Link><Link to="#">Uncategorized,</Link><Link to="#">3 Comments</Link></h6>
                                            </div>
                                            <h2>The best November Design Inspiration</h2>
                                            <p>Nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am. Quisque luctus lorem eu massa ornare, ac posuere massa finibus. Pellentesque varius dui quis feugiat sodales. Fusce varius arcu sed massa convallis malesuada. Pellentesque interdum lorem a leo cursus, non aliquet ante tincidunt.</p>
                                            <Link to="#">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mosh-pagination-area">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item active"><Link className="page-link" to="#">1.</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2.</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3.</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="mosh-blog-sidebar">

                                <div className="blog-post-search-widget mb-100">
                                    <form action="#">
                                        <input type="search" name="search" id="Search" />
                                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </form>
                                </div>

                                <div className="blog-post-archives mb-100">
                                    <h5>Archives</h5>
                                    <ul>
                                        <li><Link to="#">March 2018</Link></li>
                                        <li><Link to="#">April 2018</Link></li>
                                        <li><Link to="#">May 2018</Link></li>
                                    </ul>
                                </div>

                                <div className="blog-post-categories mb-100">
                                    <h5>Categories</h5>
                                    <ul>
                                        <li><Link to="#">Entertaiment</Link></li>
                                        <li><Link to="#">Business &amp; Finance</Link></li>
                                        <li><Link to="#">Technology</Link></li>
                                        <li><Link to="#">Creative fields</Link></li>
                                        <li><Link to="#">Lifestyle &amp; Travel</Link></li>
                                        <li><Link to="#">Uncategorized</Link></li>
                                    </ul>
                                </div>

                                <div className="latest-blog-posts mb-100">
                                    <h5>Latest Posts</h5>
                                    <div className="single-latest-blog-post d-flex">
                                        <div className="latest-blog-post-thumb">
                                            <img src={lb_1} alt="" />
                                        </div>
                                        <div className="latest-blog-post-content">
                                            <h6><Link to="#">A simple blog post</Link></h6>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Jane Smith</Link>/<Link to="#">Aug 25, 2016</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-latest-blog-post d-flex">
                                        <div className="latest-blog-post-thumb">
                                            <img src={lb_2} alt="" />
                                        </div>
                                        <div className="latest-blog-post-content">
                                            <h6><Link to="#">A new way to see things in design</Link></h6>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Jane Smith</Link>/<Link to="#">Aug 25, 2016</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-latest-blog-post d-flex">
                                        <div className="latest-blog-post-thumb">
                                            <img src={lb_3} alt="" />
                                        </div>
                                        <div className="latest-blog-post-content">
                                            <h6><Link to="#">This is just a blog post</Link></h6>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Jane Smith</Link>/<Link to="#">Aug 25, 2016</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-latest-blog-post d-flex">
                                        <div className="latest-blog-post-thumb">
                                            <img src={lb_4} alt="" />
                                        </div>
                                        <div className="latest-blog-post-content">
                                            <h6><Link to="#">Make a good investment in 2018</Link></h6>
                                            <div className="post-meta">
                                                <h6>By <Link to="#">Jane Smith</Link>/<Link to="#">Aug 25, 2016</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="instagram-feeds">
                                    <h5>Instagram</h5>
                                    <ul>
                                        <li><Link to="#"><img src={ins_1} alt="" /></Link></li>
                                        <li><Link to="#"><img src={ins_2} alt="" /></Link></li>
                                        <li><Link to="#"><img src={ins_3} alt="" /></Link></li>
                                        <li><Link to="#"><img src={ins_4} alt="" /></Link></li>
                                        <li><Link to="#"><img src={ins_5} alt="" /></Link></li>
                                        <li><Link to="#"><img src={ins_6} alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Area End */}
        </div>
    );
  }
}
