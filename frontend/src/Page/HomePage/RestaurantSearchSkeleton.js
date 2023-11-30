import React from 'react'

const RestaurantSearchSkeleton = () => {
  return (
    <>
    <div className='flex pt-1 gap-2 items-center '>
        <div className='rounded-full  w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'>

        </div>
        <div>
            <div className='w-36 h-5  mb-2 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'></div>
            <div className='w-64 h-5 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'></div>
        </div>
    </div>
   
    <div className='flex pt-1 gap-2 items-center mt-2  '>
        <div className='rounded-full w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'>

        </div>
        <div>
            <div className='w-36 h-5  mb-2 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'></div>
            <div className='w-64 h-5  bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse duration-1000 linear infinite alternate'></div>

        </div>
    </div>
    </>
  )
}

export default RestaurantSearchSkeleton