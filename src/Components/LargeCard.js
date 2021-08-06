import React from 'react'

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className='cursor-pointer py-16 relative'>
            <div className="relative">
                <img src={img} alt="" className='min-w-[300px] h-96 object-cover rounded-lg' />
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
