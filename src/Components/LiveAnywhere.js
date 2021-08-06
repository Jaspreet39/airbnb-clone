import React from 'react'

function LiveAnywhere({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
            <div className="relative">
                <img src={img} alt="" className="h-80 w-80 rounded-xl" />
            </div>
            <h2 className="text-2xl mt-3">{title}</h2>
        </div>
    )
}

export default LiveAnywhere
