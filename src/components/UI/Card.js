import React from "react";

const Card = (props) => {
    const cardClasses = "w-[95%] px-4 py-5 mx-auto rounded-xl " + props.className
    return (
        <div className={cardClasses}>
            {props.children}
        </div>
    )
};

export default Card;