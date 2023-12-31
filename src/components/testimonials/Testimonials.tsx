import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

type AvatarData = {
  avatar: string;
  name: string;
  review: string;
};

const data: AvatarData[] = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptate odio animi corrupti fuga, iste sunt ad.odio animi corrupti fuga, iste sunt ad.",
  },
  {
    avatar: AVTR2,
    name: "Jonson Kesper",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptate odio animi corrupti fuga, iste sunt ad.odio animi corrupti fuga, iste sunt ad.",
  },
  {
    avatar: AVTR3,
    name: "Margret Comptin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptate odio animi corrupti fuga, iste sunt ad.odio animi corrupti fuga, iste sunt ad.",
  },
  {
    avatar: AVTR4,
    name: "Wragner buffet",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptate odio animi corrupti fuga, iste sunt ad.odio animi corrupti fuga, iste sunt ad.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
