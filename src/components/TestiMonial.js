
import React, { useState } from "react";
import { TestiMonialCard } from './TestiMonialCard';

const TestiMonial = (props) => {

    let reviews=props.reviews;
    let [ind,setInd]=useState(0);
  return (
    <div>
        <TestiMonialCard review={reviews[ind]} 
        ind={ind}
        setInd={setInd}
        length={reviews.length}
        />
    </div>
  )
}
export default TestiMonial;