import React from "react";

type Props = {};

const TextInputArea = (props: Props) => {
    return (
        <div>
            <div className="bg-purple-400 h-[260px] w-[730px] p-2 rounded-xl">
                <p className="font-bold text-2xl text-center pb-2 text-white"> Text Input Area </p>
                <textarea className="h-[160px] w-[700px] rounded-xl bg-white pl-2 pt-3" placeholder="Write your answer here!"></textarea>
                <div className="flex justify-between mt-1">
          <button className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Reset</button>
          <button className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Submit</button>
        </div>
                    
                    
                </div>
            </div>
        
    );
};



export default TextInputArea;