import React from "react";
import buttonImage from "../../assets/images/button.jpg"
import foodImageFirst from "../../assets/images/food-1.jpg"
import foodImageSecond from "../../assets/images/food-2.jpg"
import foodImageThird from "../../assets/images/food-3.jpg"
import foodImageFour from "../../assets/images/food-4.jpg"
import "./About.scss"
const About = (props) => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__text">
          <h2 className="about__text-title">About Restaurent</h2>
          <p className="about__text-data">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged...
          </p>
          <div className="about__text-confirm">
            <button className="about__text-confirm-btn">Read More</button>
            <img width="236px" height="71px" src={buttonImage} alt="" />
          </div>
        </div>
        <div className="about__gallery">
          <div className="about__gallery-items first">
            <div className="about__gallery-item ">
              <img width="270px" height="150px" src={foodImageFirst} alt="" />
            </div>
            <div className="about__gallery-item ">
              <img width="270px" height="150px"   src={foodImageSecond} alt="" />
            </div>
          </div>
          <div className="about__gallery-items second">
            <div className="about__gallery-item ">
              <img width="270px" height="150px"  src={foodImageThird} alt="" />
            </div>
            <div className="about__gallery-item ">
              <img width="270px" height="150px"   src={foodImageFour} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default About