import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      lazyLoad: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container my-5">
        <div>
          <Slider {...settings}>

            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-9220-_1.jpg?v=1706613826&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-9104-_1.jpg?v=1706613753&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-6223-_1.jpg?v=1706613727&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-6222-_1.jpg?v=1706613690&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-4222-_1.jpg?v=1706613606&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-3220-_1.jpg?v=1706613538&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-3105-_1.jpg?v=1706613518&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/883-3104-_1.jpg?v=1706613485&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>

              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
          </Slider>
        </div>
      </div>

    );
  }
}