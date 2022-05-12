import React from "react";
import { Carousel } from "antd";

function Hero() {
  return (
    <div className="container-hero">
      <div className="inner-hero">
        <h1>Karir impianmu ada disini </h1>
      </div>
      <div className="inner-hero-h2">
        <h2>Dapatkan pekerjaan yang cocok untukmu di Website Ini.</h2>
      </div>

      <Carousel autoplay>
        <div>
          <img
            src="https://media.istockphoto.com/photos/portrait-of-cheerful-young-manager-handshake-with-new-employee-picture-id1129342452?k=20&m=1129342452&s=612x612&w=0&h=Rk0ZfcVTzKjqgl-G_lA7k-01hh15SOMNP4CgVthdZ7Y="
            className="image-hero"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/photos/silhouette-of-business-people-work-together-in-office-concept-of-and-picture-id1136530201?k=20&m=1136530201&s=612x612&w=0&h=8fvZpP4yQl--n1OmirWS3fxqq-Lk92F2LRaF-fA4fBY="
            className="image-hero"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/photos/business-people-are-analyzing-and-planning-business-business-strategy-picture-id1186614184?k=20&m=1186614184&s=612x612&w=0&h=Nxn6DS_h10fXGMjOWtBA_RoLP7KbQ06D_KFatzF3_Ok="
            className="image-hero"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/photos/stack-of-hands-unity-and-teamwork-concept-picture-id1174511028?k=20&m=1174511028&s=612x612&w=0&h=Nx7oN2s0bb9vjV_5VU6uLyhd6LeRVs3dJRSnD5lYXJ0="
            className="image-hero"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
