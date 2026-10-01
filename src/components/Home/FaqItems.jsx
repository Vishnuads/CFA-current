// import { ChevronDown } from 'lucide-react'
// import React from 'react'

// const FaqItems = ({ ques, ans, togg, isActive }) => {
//     return (
//         <div
//             className={`font-onest rounded-lg mb-2 overflow-hidden cursor-pointer borde transition-colors duration-300 ${isActive ? 'bg-[#ea991732]  border- border-[#ea991780]' : ''}`}
//             onClick={togg}
//         >
//             {/* Header — always visible */}
//             <div className="flex items-center justify-between px-4 py-3">
//                 <h1 className={`font-medium transition-colors duration-300
//                  ${isActive ? 'text-gray' : 'text-[#8B8B8B]'}`}>
//                     {ques}
//                 </h1>
//                 <ChevronDown
//                     size={18}
//                     className={`shrink-0 text-sec transition-transform duration-300
//                     ${isActive ? 'rotate-180' : ''}`}
//                 />
//             </div>

//             <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
//                 <div className="overflow-hidden">
//                     <p className="text-sm text-white px-4 pb-4 leading-relaxed">{ans}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FaqItems














import { ChevronDown } from "lucide-react";
import React from "react";

const FaqItems = ({ ques, ans, togg, isActive }) => {
  return (
    <div
      className={`
        font-onest
        rounded-lg
        mb-2
        overflow-hidden
        cursor-pointer
        transition-colors
        duration-300
        ${isActive
          ? "bg-[#ea991732] border border-[#ea991780]"
          : "border border-transparent"
        }
      `}
      onClick={togg}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <h1
          className={`
            font-medium
            pr-4
            transition-colors
            duration-300
            ${isActive ? "text-gray" : "text-[#8B8B8B]"}
          `}
        >
          {ques}
        </h1>

        <ChevronDown
          size={18}
          className={`
            shrink-0
            text-sec
            transition-transform
            duration-300
            ${isActive ? "rotate-180" : ""}
          `}
        />
      </div>

      {/* Answer */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${isActive
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm leading-relaxed text-white">
            {ans}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItems;