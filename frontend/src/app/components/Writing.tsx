// import React from "react";

// type Props = {};

// function Writing({}: Props) {
//   return (
//     <div className="bg-purple-300 h-screen w-screen flex items-center justify-center ">
//       <div className="bg-purple-100 w-[270px] p-3 rounded">
//         <h1 className="text-center mb-4">Question</h1>
//         <div className="grid grid-rows-5 grid-cols-2 gap-3 justify-center items-center">
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//           <div className="bg-pink-100 h-8 w-20 rounded"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Writing;



import React from "react";
import WordList from "./Writing/WordList";
type Props = {};

function Writing({}: Props) {
  return (
    <div className="text-slate-800">
      Writing
      <WordList />
    </div>
  );
}

export default Writing;