// "use client";

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Parallax, Mousewheel, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
 
// import slide from '../styles/component_styles/Slides.module.css';
// import '../styles/component_styles/Slides.module.css';

// // Define the structure for a slide's content
// interface SlideContent {
//   id: number;
//   chapter: string;
//   titleEmphasis: string;
//   titleRest: string;
//   page: string;
//   paragraph: string;
//   imageClassLeft: string;
//   imageClassRight: string;
// }

// const slides: SlideContent[] = [
//   {
//     id: 1,
//     chapter: 'Commercial Services',
//     titleEmphasis: 'Displays',
//     titleRest: 'You Brand Needs.',
//     page: '',
//     paragraph:
//       'A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay hands on.',
//     imageClassLeft: 'swiper-image-one',
//     imageClassRight: 'swiper-image-two',
//   },
//   {
//     id: 2,
//     chapter: 'Chapter II',
//     titleEmphasis: 'Drop',
//     titleRest: 'Of Eternal life.',
//     page: 'page VII',
//     paragraph:
//       'A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.',
//     imageClassLeft: 'swiper-image-three',
//     imageClassRight: 'swiper-image-four',
//   },
//   {
//     id: 3,
//     chapter: 'Chapter III',
//     titleEmphasis: 'Sense',
//     titleRest: 'Of Things to Come.',
//     page: 'page XI',
//     paragraph:
//       'Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours’ faults, the one behind his own. Hence it is that men do not see their own faults, but never fail to see those of others.',
//     imageClassLeft: 'swiper-image-five',
//     imageClassRight: 'swiper-image-six',
//   },
// ];

// const Slides: React.FC = () => {
//   return (
//     <div className={`flex justify-center items-center w-full h-screen bg-gradient-to-br from-[#2a1f30] to-[#383d44]`}>
//       <div id="home-slider" className="relative h-[80vh] w-[90vw] shadow-2xl">
//         <Swiper
//           direction="vertical"
//           loop={true}
//           parallax={true}
//           speed={1000}
//           mousewheel={true}
//           pagination={{ clickable: true }}
//           modules={[Pagination, Parallax, Mousewheel, Autoplay]}
//           className="h-full w-full"
//         >
//           {/* Parallax Background for titles and text (simulating the original data-swiper-parallax-y on the image containers) */}
//           {/* Note: In Swiper v10/v11, parallax elements are typically placed outside the slides but within the Swiper container 
//               or use the 'data-swiper-parallax' attributes inside the slides. We'll use the latter approach which aligns better 
//               with the content structure. The Parallax module handles the movements on elements with this attribute. */}
          
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id} className="flex overflow-hidden">
//               {/* Left Side */}
//               <div 
//                 className={`w-1/2 h-full bg-cover bg-center flex flex-col justify-center items-center text-white p-16 transition-all duration-1000 delay-1000 ${slide.imageClassLeft} swiper-image-left-filter`}
//                 data-swiper-parallax-y="-20%"
//               >
//                 <h1 className="font-['Cormorant_Garamond'] font-medium self-start m-0 mb-auto text-[4.5rem] leading-none opacity-0 translate-x-[-20%] swiper-h1-transition">
//                   A <span className="font-bold italic opacity-0 translate-x-[-20%] swiper-emphasis-transition">{slide.titleEmphasis}</span>. <br />
//                   <span className="text-[3.5rem]">{slide.titleRest}</span>
//                 </h1>
//                 <p 
//                     className="font-['Cormorant_SC'] text-sm tracking-[2px] m-0 leading-none mt-auto self-end uppercase opacity-0 translate-x-[-20%] font-medium pr-32 swiper-p-transition"
//                     data-swiper-parallax-y="35%" // Applying parallax to the page number to simulate movement
//                 >
//                     {slide.chapter}, {slide.page}
//                 </p>
//               </div>

//               {/* Right Side */}
//               <div 
//                 className={`w-1/2 h-full bg-cover bg-center flex flex-col justify-center items-center text-white p-16 transition-all duration-1000 delay-1000 swiper-image-right-filter ${slide.imageClassRight}`}
//                 data-swiper-parallax-y="35%"
//               >
//                 <p className="m-0 font-['Cormorant_Garamond'] text-white w-full max-w-sm text-justify text-xl font-medium opacity-0 translate-x-[-20%] swiper-paragraph-transition">
//                   {slide.paragraph}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
 