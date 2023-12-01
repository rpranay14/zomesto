import React from 'react'
const baseUrl = "https://zomato-backend-na3e.onrender.com";
const RestaurantListComponent = ({restro}) => {
    console.log(restro,"restro")
  return (
    <div className='flex gap-2 my-2 '>
        <img className='w-20 h-20 rounded-md' src={`${baseUrl}${restro.photos}`}/>
        <div>
            <p className='text-black font-medium'>{restro.name}</p>
          
            <p className='text-gray-500'>{restro.address}</p>
        </div>
        
    </div>
  )
}

export default RestaurantListComponent