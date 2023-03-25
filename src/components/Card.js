
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  const course=props.course;
  
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
       if(likedCourses.includes(course.id)){
 
          setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
          toast.warning("Like removed")
        }
        else{
          if(likedCourses.length===0)
            setLikedCourses([course.id]);
          else
              setLikedCourses([...likedCourses,course.id]);
          toast.success("Liked")
       } 
      
  }
  return (
    <div className='w-[19rem] bg-bgDark  rounded-md overflow-hidden text-white'>
        <div className='relative'>    
        <img src={course.image.url} alt="CardImage" />
        <div>
          <button className='w-10 h-10 absolute right-2 bottom-3 bg-white rounded-full flex items-center justify-center'>
            {likedCourses.includes(course.id)?<FcLike fontSize="1.75rem" onClick={clickHandler} />:<FcLikePlaceholder fontSize="1.75rem" onClick={clickHandler} />}
            
          </button>
        </div>
        </div>
        
        <div className='py-4'>
          <p className='font-semibold text-lg leading-6'>{course.title}</p>
          <p className='mt-2'>
            {
              course.description.length>100?course.description.substr(0,100)+"...":
              course.description
          }</p>
        </div>
    </div>
  )
}

export default Card