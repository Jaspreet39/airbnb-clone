import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import ExploreData from '../Components/ExploreData'
import LiveAnywhere from '../Components/LiveAnywhere'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

function Home({exploreData}) {

    return (
        <div>
            <Header/>
            <Banner/>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
                   <div className='space-y-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                   <ExploreData
                        img="https://links.papareact.com/5j2"
                        location="London"
                        distance="45-minute drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/1to"
                        location="Manchester"
                        distance="4.5-hour drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/40m"
                        location="Liverpool"
                        distance="4.5-hour drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/msp"
                        location="York"
                        distance="4-hour drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/2k3"
                        location="Cardiff"
                        distance="45-minute drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/ynx"
                        location="Birkenhead"
                        distance="4.5-hour drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/kji"
                        location="Newquay"
                        distance="6-hour drive"
                    />
                    <ExploreData
                        img="https://links.papareact.com/41m"
                        location="Hove"
                        distance="2-hour drive"
                    />
                   </div>
                </section>
                <section> 
                    <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
                   <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
                   <LiveAnywhere
                        img="https://links.papareact.com/2io"
                        title= "Outdoor getaways"
                    />
                     <LiveAnywhere
                        img="https://links.papareact.com/q7j"
                        title= "Unique stays"
                    />
                     <LiveAnywhere
                        img="https://links.papareact.com/s03"
                        title= "Entire homes"
                    />
                     <LiveAnywhere
                        img="https://links.papareact.com/8ix"
                        title= "Pet allowed"
                    />
                   </div>
                </section>
                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest outdoors"
                    description="Wishlist curated by airbnb"
                    buttonText="Get Inspired"
                />
            </main>
            <Footer/>
        </div>
    )
}

export default Home
