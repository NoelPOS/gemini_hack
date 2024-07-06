
import React from "react";

type Props = {};

const AiFeedback = (props: Props) => {
    return (
        <div>
            <div className="bg-purple-400 h-[350px] w-[730px] p-2 rounded-xl">
                <p className="font-bold text-2xl text-center pb-2 text-white"> AI Feedback </p>
                <textarea className="h-[130px] w-[700px] rounded-xl bg-white pl-2 pt-3" placeholder="Type your feedback on the generative AI"></textarea>
                <textarea className="h-[90px] w-[700px] rounded-xl bg-white pl-2 pt-3" placeholder="Suggestion"></textarea>
                <div className="flex justify-end mt-1">
          <button className="bg-pink-100 h-9 w-23 rounded text-center p-2 font-medium text-white">Next Question</button>
        </div>
                    
                    
                </div>
            </div>
        
    );
};



export default AiFeedback;