import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "./recommendations.scss";
import DataContext from "../../Context/dataContext";
import { useContext } from "react";
import { useEffect } from "react";
const Recommendations = () => {
   const{getRecommendationSectData,client} = useContext(DataContext);
   useEffect(()=>{
    getRecommendationSectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);     
  return (
    <div className="testmonials" id="Recommendations">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {client && client.map((elem,index)=>{
            return (
                <SwiperSlide key={index}>
                <div className="testimonial"> 
                    <img src={elem.clientImg} alt="" />
                    <span>{elem.review}</span>
                    </div>
                </SwiperSlide>

            )
        })}
      </Swiper>
    </div>
  );
};

export default Recommendations;
