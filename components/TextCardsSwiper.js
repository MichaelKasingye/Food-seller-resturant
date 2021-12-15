import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line
// import "swiper/css/bundle";
// import "./styles.css";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import valueCss from "../styles/values.module.css";

// import Swiper core and required modules
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export function ImageCardsSwiper() {
  const valuesItems = [
    {   image:"https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg",
        title:"Motivation",
        description:"Minim veniam, quis nostrud exercitation ullamco",
       icon: <i style={{color:'#E1444D'}} className="bi bi-card-checklist p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
    },
    {   image:"https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg",
        title:"Vision",
        description:"Minim veniam, quis nostrud exercitation ullamco",
        icon: <i style={{color:'#E1444D'}} className="bi bi-briefcase p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
    }
    ,
    {   image:"https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg",
        title:"Ideas",
        description:"Minim veniam, quis nostrud exercitation ullamco",
        icon: <i style={{color:'#E1444D'}} className="bi bi-bar-chart p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
    } ,
    {   image:"https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg",
        title:"Finance",
        description:"Minim veniam, quis nostrud exercitation ullamco",
        icon: <i style={{color:'#E1444D'}} className="bi bi-brightness-high p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
    }
]
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        // className="mySwiper"
        className={valueCss.swiper}
      >

<div className="border ">
            {valuesItems.map((value, index) =>(
                <SwiperSlide key={index} >
                  <div style={{width:"100%", backgroundColor:'#F8F9FA', color:'#444444'}} className="d-flex flex-row  p-1 ">
            <div className="p-1 d-flex flex-row justify-content-center align-items-center flex-wrap ">
            <div className={valueCss.imageContainer}>
            <img className={valueCss.img}
            src={value.image}
            alt="food"
          />
            </div>
            <div className={valueCss.captionsImage}>
              <span className="d-flex flex-column p-1">
              <h4 className="h5 w-100 text text-start w-100 fw-bolder text-secondary " >{value.title}</h4>
              <span className="fs-6 text text-start text-dark">{value.description} </span>
              </span>
              </div>
              </div>
          </div>
          </SwiperSlide> 
            ))}
        </div>

                {/* <SwiperSlide>
            <div className={values.imgContainer}>

          <img className={values.img}
            src="https://cdn.pixabay.com/photo/2014/01/26/02/27/child-251920__340.jpg"
            alt="boy"
          />
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className={values.imgContainer}>

            <img className={values.img}
            src="https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg"
            alt="boy"
            />
        </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className={values.imgContainer}>

            <img className={values.img}
            src="https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg"
            alt="boy"
            />
        </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className={values.imgContainer}>

            <img className={values.img}
            src="https://cdn.pixabay.com/photo/2017/04/20/10/12/children-of-uganda-2245270__340.jpg"
            alt="boy"
            />
        </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export function TextCardsSwiper() {
    const values = [
        {
            title:"Motivation",
            description:"Minim veniam, quis nostrud exercitation ullamco",
           icon: <i style={{color:'#E1444D'}} className="bi bi-card-checklist p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
        },
        {
            title:"Vision",
            description:"Minim veniam, quis nostrud exercitation ullamco",
            icon: <i style={{color:'#E1444D'}} className="bi bi-briefcase p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
        }
        ,
        {
            title:"Ideas",
            description:"Minim veniam, quis nostrud exercitation ullamco",
            icon: <i style={{color:'#E1444D'}} className="bi bi-bar-chart p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
        } ,
        {
            title:"Finance",
            description:"Minim veniam, quis nostrud exercitation ullamco",
            icon: <i style={{color:'#E1444D'}} className="bi bi-brightness-high p-3 pb-3 fs-1 text-start  d-flex align-items-start"></i>
        }
    ]
    return (
      <>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={30}
        //   pagination={{ clickable: true }}
          className="mySwiper "
        >
            <div className="border ">
            {values.map((value, index) =>(
                <SwiperSlide key={index} >
                  <div style={{width:"100%", backgroundColor:'#F8F9FA', color:'#444444'}} className="d-flex flex-row  p-1 ">
            <div className="p-1 d-flex flex-row justify-content-center align-items-center flex-wrap ">
            {value.icon}
              <span className="d-flex flex-column p-1">
              <h4 className="h5 w-100 text text-start w-100 fw-bolder text-secondary " >{value.title}</h4>
              <span className="fs-6 text text-start text-dark">{value.description} </span>
              </span>
            </div>
          </div>
          </SwiperSlide> 
            ))}
        </div>

        </Swiper>
      </>
    );
  }
