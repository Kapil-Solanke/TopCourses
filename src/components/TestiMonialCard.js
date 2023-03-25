import React from 'react'
import { FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import { FiChevronLeft,FiChevronRight} from 'react-icons/fi'
export const TestiMonialCard = (props) => {
    let review=props.review;
    let length=props.length;
    let ind=props.ind;
    let setInd=props.setInd;
    function incHandler(){
        setInd((ind+1+length)%length);
    }
    function decHandler(){
        setInd((ind-1+length)%length);
    }
    function supHandler(){
        let index=(Math.floor(Math.random()*length))%length;
        setInd(index);
    }
  return (
    <div className=' relative  bg-white rounded-md shadow-lg hover:shadow-xl flex flex-col justify-between items-center'>
        <div className='image absolute  top-[-10%]   left-2'>
            <div className=' w-[20%] aspect-square rounded-full  bg-violet-500 -z-10 '>
            <img className='aspect-square rounded-full  z-10 -translate-x-2 ' src={review.image} alt="CardImage" />

            </div>
        </div>
        <div className='tracking-wider text-center mt-7 text-2xl capitalize font-bold'>   
            <p>{review.name}</p>
        </div>
        <div className='text-center mt-1 text-xl color-violet-300'>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='mt-5 text-violet-400 '>
            <FaQuoteLeft/>
        </div>
        <div className='text-center p-2 mt-4 text-slate-500'>
            <p>{review.text}</p>
        </div>
        <div className='mt-5 text-violet-400 '>
            <FaQuoteRight/>
        </div>
        <div className='flex gap-3 text-3xl mt-5 text-violet-400 font-bold '>
            <button className=' cursor-pointer hover:text-violet-500 ' onClick={incHandler}>
                <FiChevronLeft/>
            </button>
            <button className=' cursor-pointer hover:text-violet-500 ' onClick={decHandler}>
                <FiChevronRight/>
            </button>
        </div>
        <div className='mb-2 mt-4'>
            <button className='p-2 bg-violet-400 hover:bg-violet-400 transition-all duration-200 cursor-pointer
             px-10 py-2 rounded-md font-bold text-white text-lg 
            ' onClick={supHandler}>Suprise me</button>
        </div>
    </div>
  )
}
