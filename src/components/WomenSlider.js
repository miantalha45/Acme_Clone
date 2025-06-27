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
                <img src="https://www.bata.com.pk/cdn/shop/files/515-9342-_1.jpg?v=1682589909&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/515-2341-_1.jpg?v=1697028551&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/515-5342-_1.jpg?v=1682589454&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/515-8341-_1.jpg?v=1697028584&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/products/671-7411-_1.jpg?v=1674471965&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/601-8009-_1.jpg?v=1683012560&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Red Label - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/files/601-9009-_1.jpg?v=1682590397&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>
              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
            <div>
              <a href="/">
                <img src="https://www.bata.com.pk/cdn/shop/products/671-9526-_1.jpg?v=1681383751&width=533" alt="" style={{ height: 300, width: 300 }} />
              </a>

              <h3 className="product-card-title">Bata Comfit - Men</h3>
            </div>
          </Slider>
        </div>
      </div>

    );
  }
}