import React from 'react'

function Banner() {
    return (
        <div className="relative">
            <img src="https://links.papareact.com/0fm" alt="" className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-[100%] object-cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go?Perfect</p>
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md active:scale-90  transition duration-150 font-bold my-3 hover:shadow-xl">l'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner
