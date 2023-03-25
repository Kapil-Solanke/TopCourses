import React from 'react'

function Filter(props){
    let category=props.category
    let setCategory=props.setCategory
    let filterData=props.filterData
    function filterHandler(title){
        setCategory(title);
    }
    return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center ">
        {
            filterData.map((element)=>{
                return <button className={`text-2xl px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${category===element.title?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent "}
                `} key={element.id}
                onClick={()=>filterHandler(element.title)}
                >{element.title}</button>
            }) 
        }
        
    </div>)
}
export default Filter;