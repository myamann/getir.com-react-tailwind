import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => {
            return (
              <div key={banner.id}>
                <picture className="block px-2">
                  <img src={banner.image} alt="banner" className="rounded-lg" />
                </picture>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Campaigns;
