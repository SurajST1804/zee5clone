// import React from "react";
// import { Carousel } from "3d-react-carousal";
// const CarouselSlider = () => {
//   let slides = [
//     <img src="https://picsum.photos/800/300/?random" alt="1" />,
//     <img src="https://picsum.photos/800/301/?random" alt="2" />,
//     <img src="https://picsum.photos/800/302/?random" alt="3" />,
//     <img src="https://picsum.photos/800/303/?random" alt="4" />,
//     <img src="https://picsum.photos/800/304/?random" alt="5" />,
//   ];

//   return (
//     <div>
//       <Carousel slides={slides} autoplay={true} interval={1000} />
//     </div>
//   );
// };

// export default CarouselSlider;

import React from "react";
import { Carousel } from "react-carousel-minimal";

const CarouselSlider = () => {
  const data = [
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z592425/cover/1170x658withlogo2ae71bfe2e3d43418fbed457e8d8d919.jpg",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571978/cover/1170x658withlogoe2853ee6b64f433d8131d31582b62829.jpg",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z587327/cover/1170x658withlogoa34f4da839aa4e5f91f5f46dd212242a.jpg",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z560890/cover/1170x658withlogoe5da400cbcbc40a1a6e8af9cc0718413.jpg",
    },
    {
      image:
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z571846/cover/1170x658withlogof8eaf284875e4b44af6cbce3018a4ccb7b04b65a7cd5486bb17e5852cef103a8.jpg",
    },
  ];

  //   const captionStyle = {
  //     fontSize: "2em",
  //     fontWeight: "bold",
  //   };
  //   const slideNumberStyle = {
  //     fontSize: "20px",
  //     fontWeight: "bold",
  //   };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p> */}
        <div
        //   style={{
        //     padding: "0 20px",
        //   }}
        >
          <Carousel
            data={data}
            time={4000}
            width="100%"
            height="500px"
            // captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            automatic={true}
            dots={true}
            // pauseIconColor="white"
            // pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            // style={{
            //   textAlign: "center",
            //   //   maxWidth: "850px",
            //   //   maxHeight: "500px",
            //   margin: "40px auto",
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
