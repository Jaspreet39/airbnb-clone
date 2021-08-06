import React from 'react'

function ExploreData({img, location, distance}) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-out'>
            <div className="relative">
                <img src={img} alt="" className='object-fill rounded-lg h-16 w-16'/>
            </div>
            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-400">{distance}</h3>
            </div>
        </div>
    )
}

export default ExploreData
