import React, { useState } from "react"
import "./chart.css"


const Chart = (props) => {
  const date = new Date();
  const { label, max, value } = props;
  const [ chartActive, setChartActive ] = useState();
  let barHeight = "0%"
  if (props.max > 0) {
    barHeight = Math.round((value / max) * 100) + "%"
  }
  return (
      <div className="relative space-y-4 chart">
        <div
        onMouseOver={()=>setChartActive(value)} 
        onMouseLeave={()=>setChartActive(null)}
        className={`relative rounded-sm chart__bar ${date.getDay() === props.date.getDay() ? 'bg-softRed': 'bg-cyan'} cursor-pointer hover:bg-opacity-75`}
        style={
          {
            height: barHeight
          }
        }
        >
          {
            chartActive === value && (
              <div className={`absolute px-1 py-1 text-sm text-white rounded-md -top-9 bg-darkBrown -left-3 xs:-left-[.8rem] sm:-left-1 z-[1000]`}>
              ${ value.toFixed(2) }
              </div>
            )
          }
        </div>
        <div className="absolute w-full text-sm text-center -bottom-5 text-mediumBrown">
          {label}
        </div>
      </div>
  )
};

export default Chart;