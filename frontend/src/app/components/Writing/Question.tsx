import React from "react";

type Props = {};

const Question = (props: Props) => {
    return (
        <div>
            <div className="bg-pink-300 h-[350px] w-[350px] p-5 rounded-xl">
                <div className="bg-purple-400 h-[300px] w-[320px] pt-5 pb-7 rounded-xl">
                    <h1 className="text-left font-bold text-xl text-white pl-5 pt-3">Question 1</h1>
                    <p className="pl-5 pt-5 font-bold text-white"> Use word 1 to talk about how you're old. You can use one sentence or multiple sentences. Doesnt matter. </p>
                </div>
            </div>
        </div>
    );
};



export default Question;
