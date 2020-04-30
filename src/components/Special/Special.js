import React from "react";
import "./Special.scss";
import image1 from "../../assets/images/e1.jpg"
import image2 from "../../assets/images/e2.jpg"
import image3 from "../../assets/images/e3.jpg"
import image4 from "../../assets/images/e4.jpg"
import image5 from "../../assets/images/e5.jpg"
import $ from "jquery";
class Special extends React.Component{
    componentDidMount() {
        let currentSlide = 1;
        let translateWidth = 0;
        const margin = -20
        let width = -$(".special__list-item").width() +  margin ;
        let slides = $(".special__list").children().length -2;
        function nextSlide () {
            if( currentSlide > slides|| currentSlide <= 0 || currentSlide > slides){
                $(".special__list").css('transform' , 'translate(0)');
                currentSlide = 1
            }
            else{
                translateWidth = width * currentSlide   ;
                $(".special__list").css({
                    'transform': 'translateX('  + translateWidth  + 'px)',
                    '-webkit-transform': 'translateX(' + translateWidth + 'px)',
                    '-ms-transform': 'translateX(' + translateWidth + 'px)',
                });
                currentSlide++
            }
        }
        setInterval(() => {
            nextSlide();
        }, 4000);
    }
    render(){

  return (
    <div className="special">
      <div className="container">
        <h2 className="special__title">Today Special</h2>
          <div className="special__viewport">
              <div className="special__list">
                  <div className="special__list-item">
                      <img src={image1} alt="" className="special__list-item-photo" />
                      <div className="special__list-item-content">
                          <h3 className="special__list-item-content-title">
                              Food Name one
                          </h3>
                          <p className="special__list-item-content-text">
                              printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and scrambled.
                          </p>
                      </div>
                      <div className="special__list-item-details">
                          <a className="special__list-item-details-logo">Home
                              <span>Delivary</span>
                          </a>
                          <a
                              href=""
                              className="special__list-item-details-tel"
                          >1-008 005 006</a>
                          <span className="special__list-item-details-price"><sup>$</sup>89.00</span>
                      </div>

                  </div>
                  <div className="special__list-item">
                      <img src={image2} alt="" className="special__list-item-photo" />
                      <div className="special__list-item-content">
                          <h3 className="special__list-item-content-title">
                              Food Name two
                          </h3>
                          <p className="special__list-item-content-text">
                              printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and scrambled.
                          </p>
                      </div>
                      <div className="special__list-item-details">
                          <a className="special__list-item-details-logo">Home
                              <span>Delivary</span>
                          </a>
                          <a
                              href=""
                              className="special__list-item-details-tel"
                          >1-008 005 006</a>
                          <span className="special__list-item-details-price"><sup>$</sup>89.00</span>
                      </div>

                  </div>
                  <div className="special__list-item">
                      <img src={image3}alt="" className="special__list-item-photo" />
                      <div className="special__list-item-content">
                          <h3 className="special__list-item-content-title">
                              Food Name three
                          </h3>
                          <p className="special__list-item-content-text">
                              printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and scrambled.
                          </p>
                      </div>
                      <div className="special__list-item-details">
                          <a className="special__list-item-details-logo">Home
                              <span>Delivary</span>
                          </a>
                          <a
                              href=""
                              className="special__list-item-details-tel"
                          >1-008 005 006</a>
                          <span className="special__list-item-details-price"><sup>$</sup>89.00</span>
                      </div>

                  </div>
                  <div className="special__list-item">
                      <img src={image4} alt="" className="special__list-item-photo" />
                      <div className="special__list-item-content">
                          <h3 className="special__list-item-content-title">
                              Food Name four
                          </h3>
                          <p className="special__list-item-content-text">
                              printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and scrambled.
                          </p>
                      </div>
                      <div className="special__list-item-details">
                          <a className="special__list-item-details-logo">Home
                              <span>Delivary</span>
                          </a>
                          <a
                              href=""
                              className="special__list-item-details-tel"
                          >1-008 005 006</a>
                          <span className="special__list-item-details-price"><sup>$</sup>89.00</span>
                      </div>

                  </div>
                  <div className="special__list-item">
                      <img src={image5} alt="" className="special__list-item-photo" />
                      <div className="special__list-item-content">
                          <h3 className="special__list-item-content-title">
                              Food Name five
                          </h3>
                          <p className="special__list-item-content-text">
                              printing and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and scrambled.
                          </p>
                      </div>
                      <div className="special__list-item-details">
                          <a className="special__list-item-details-logo">Home
                              <span>Delivary</span>
                          </a>
                          <a
                              href=""
                              className="special__list-item-details-tel"
                          >1-008 005 006</a>
                          <span className="special__list-item-details-price"><sup>$</sup>89.00</span>
                      </div>

                  </div>

              </div>
          </div>

          {/*<div className="special__block">*/}
          {/*    <img width="310px" height="310px" src={specialImg} alt="alt"/>*/}
          {/*</div>*/}
      </div>
    </div>
  );
}
}
export default Special;
