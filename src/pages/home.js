import React from "react";
import welcome from "../welcome.png";

export default class HomePage extends React.Component {
  render() {
    return (
      <section
        className="welcome_area clearfix"
        id="home"
        style={{ background: `url("${welcome}")` }}
      >
        <HeroSlidesWrapper />
      </section>
    );
  }
}

class HeroSlidesWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          title: "web design",
          description: "Aliqua qui voluptate anim ipsum esse commodo!",
          image: "img/bg-img/device.png",
          link: "?web-design",
        },
      ],
    };
  }

  render() {
    let { slides } = this.state;
    return (
      <div class="hero-slides owl-carousel">
        {slides.map((slide) => {
          return <HeroSlide data={slide} />;
        })}
      </div>
    );
  }
}

class HeroSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div class="single-hero-slide d-flex align-items-end justify-content-center">
        <div class="hero-slide-content text-center">
          <h2>{data.title}</h2>
          <h4>{data.description}</h4>
          <div class="col-12 text-center mt-30">
            <a href={data.link} class="btn mosh-btn">
              Hire Us
            </a>
          </div>
          <img class="slide-img" src={data.image} alt="" />
        </div>
      </div>
    );
  }
}
