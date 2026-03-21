// function ProductCard({ item }) {
//   return (
//     <div className="bg-white p-4 relative group">
      
//       {/* NEW tag */}
//       <span className="absolute top-3 left-3 bg-pink-300 text-black text-xs px-2 py-1 font-semibold">
//         NEW
//       </span>

//       {/* Heart icon */}
//       <span className="absolute top-3 right-3 text-gray-500 cursor-pointer">
//         ♡
//       </span>

//       {/* Image */}
//       <div className="h-60 flex items-center justify-center">
//         <img src={item.image} alt="" className="h-full object-contain" />
//       </div>

//       {/* Hover button */}
//       <div className="absolute bottom-28 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
//         <button className="bg-gray-300 px-6 py-2 text-sm font-semibold">
//           XEM NHANH
//         </button>
//       </div>

//       {/* Color options */}
//       <div className="flex gap-2 mt-4">
//         {item.colors.map((color, i) => (
//           <span
//             key={i}
//             className="w-5 h-5 rounded-full border"
//             style={{ backgroundColor: color }}
//           ></span>
//         ))}
//       </div>

//       {/* Name */}
//       <h3 className="mt-3 text-sm font-semibold leading-snug">
//         {item.name}
//       </h3>

//       {/* Price */}
//       <p className="mt-2 font-bold">{item.price}</p>
//     </div>
//   );
// }