import React from "react";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";
import $ from "jquery";
import "./Slider.scss";
import foodIco from "../../assets/images/icon_food.png";
import phoneIco from "../../assets/images/icon_phone.png";
import messageIco from "../../assets/images/message.png";
export default class Slider extends React.Component {
  componentDidMount() {

    let currentSlide = 1;
    let slideCount = $(".slider__images").children().length;
    let translateWidth = 0;
    console.log(slideCount)
    function nextSlide() {
      if(currentSlide === slideCount || currentSlide <= 0 ||currentSlide > slideCount){
         $(".slider__images").css('transform' , 'translate(0 , 0)');
          currentSlide = 1
      }
      else{
        translateWidth = -$('.slider__viewport').width() * currentSlide ;
        $(".slider__images").css({
          'transform': 'translateX('  + translateWidth + 'px)',
          '-webkit-transform': 'translateX(' + translateWidth + 'px)',
          '-ms-transform': 'translateX(' + translateWidth + 'px)',
        });
        currentSlide++
      }
    }
    setInterval( () =>{
      nextSlide();
    },4000)
  }
  render() {
    return (
      <div className="slider">
        <div className="slider__viewport">
          <div className="slider__images">
            <div className="slider__images-item">
              <img src={Slider1} alt="" />

              <div className="slider__texts first">
                <h2>Смакуйте страви</h2>
                <h3>
                  тільки у <span>Luxury Restaurant</span>
                </h3>
              </div>
            </div>
            <div className="slider__images-item">
              <img src={Slider2} alt="" />

              <div className="slider__texts">
                <h2>Багато різновидів страв</h2>
                <h3>
                  тільки у <span>Luxury Restaurant</span>{" "}
                </h3>
              </div>
            </div>
            <div className="slider__images-item">
              <img src={Slider3} alt="" />

              <div className="slider__texts">
                <h2>Святкуйте разом із друзями</h2>
                <h3>
                  У <span>Luxury Restaurant</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__details">
          <div className="container">
            <div className="slider__details-block">
              <div className="slider__details-block--circle">
                <img src={foodIco} alt="" />
              </div>
              <a href="#menu">
                Explore <br /> Food Menu
              </a>
            </div>
            <div className="slider__details-info">
              <div className="slider__details-info-reviews">
                <img src={messageIco} alt="" />
                <div className="slider__details-info-reviews-content">
                  <p> Read</p>
                  <span> Reviews</span>
                </div>
              </div>
              <div className="slider__details-info-call">
                <img src={phoneIco} alt="" />
                <div className="slider__details-info-call-content">
                  <p>Call us Now for</p>
                  <span>Home Delivery</span>
                </div>
              </div>
              <div className="slider__details-info-tel">
                <div className="slider__details-info-tel-content">
                  <span>1-008 005 006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
