// import { useState, useEffect, useRef } from "react";
// import type { Service } from "../types";

// type ServiceDetailCard = Service & {
//   color: string;
//   hoverColor: string;
//   description: string[];
// };

// const ServicesPage = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//   const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     setIsVisible(true);
//     window.scrollTo(0, 0);
//   }, []);

//   const handleMouseEnter = (id: string) => {
//     if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
//     hoverTimeout.current = setTimeout(() => setHoveredCard(id), 300);
//   };

//   const handleMouseLeave = () => {
//     if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
//     setHoveredCard(null);
//   };

 


  

  

//   const isHovered = (id: string) => hoveredCard === id;

//   const firstRow = services.slice(0, 4);
//   const lastCard = services[4];

//   const CardContent = ({ service }: { service: ServiceDetailCard }) => (
//     <div
//       className={`${service.color} ${service.hoverColor} rounded-lg border-4 border-primary-black relative z-10 overflow-hidden shadow-[6px_6px_0px_#000000] ${
//         isHovered(service.id)
//           ? "shadow-[2px_2px_0px_#000000] translate-x-1 translate-y-1 transition-all duration-700 ease-in-out"
//           : "transition-all duration-400 ease-in-out"
//       }`}
//     >
//       <div
//         className={`flex flex-col items-center justify-center px-10 transition-all duration-700 ease-in-out ${
//           isHovered(service.id) ? "pt-8 pb-5" : "h-48"
//         }`}
//       >
//         <h2
//           className={`font-permanent-marker text-primary-black text-center leading-tight transition-all duration-700 ease-in-out w-full ${
//             isHovered(service.id)
//               ? "text-xl md:text-2xl pb-4 border-b-4 border-primary-black"
//               : "text-2xl md:text-3xl"
//           }`}
//         >
//           {service.title}
//         </h2>
//       </div>

//       <div
//         className={`flex justify-center transition-all duration-500 ease-in-out ${
//           isHovered(service.id)
//             ? "opacity-0 max-h-0 overflow-hidden"
//             : "opacity-100 max-h-16 pb-8"
//         }`}
//       >
//         <svg
//           className="w-8 h-8 text-primary-black"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="3"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M19 9l-7 7-7-7"></path>
//         </svg>
//       </div>

//       <div
//         className={`overflow-hidden ${
//           isHovered(service.id)
//             ? "max-h-150 opacity-100 transition-all duration-700 ease-in-out"
//             : "max-h-0 opacity-0 transition-all duration-400 ease-in-out"
//         }`}
//       >
//         <div className="px-10 pb-10 space-y-6">
//           {service.description.map((paragraph, pIndex) => (
//             <p
//               key={pIndex}
//               className="font-shantell-sans text-base md:text-lg font-bold text-primary-black leading-relaxed"
//             >
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-second-pink">
//       <div className="w-full h-32"></div>

//       <div className="w-full flex justify-center px-4 md:px-8">
//         <h1
//           className={`font-permanent-marker text-6xl md:text-8xl text-primary-green text-center transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
//           }`}
//         >
//           OUR SERVICES
//         </h1>
//       </div>

//       <div className="w-full h-20"></div>

//       <div className="w-full flex justify-center px-8 md:px-16">
//         <div className="w-full max-w-6xl flex flex-col" style={{ gap: "2.5rem" }}>
//           <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2.5rem" }}>
//             {firstRow.map((service, index) => (
//               <div
//                 key={service.id}
//                 onMouseEnter={() => handleMouseEnter(service.id)}
//                 onMouseLeave={handleMouseLeave}
//                 className={`relative w-full ${
//                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 400}ms`,
//                   transition: "opacity 1s, transform 1s",
//                 }}
//               >
//                 <CardContent service={service} />
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <div
//               onMouseEnter={() => handleMouseEnter(lastCard.id)}
//               onMouseLeave={handleMouseLeave}
//               className={`relative w-full md:w-1/2 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//               }`}
//               style={{
//                 transitionDelay: `${4 * 400}ms`,
//                 transition: "opacity 1s, transform 1s",
//               }}
//             >
//               <CardContent service={lastCard} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full h-24"></div>
//       <div className="w-full h-1 bg-primary-black"></div>
//     </div>
//   );
// };

// export default ServicesPage;


