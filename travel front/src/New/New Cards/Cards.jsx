import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'
import Hero from './Hero'

const Cards = () => {

    const navi=useNavigate()
   

    const handlecouples=()=>{
        navi('/couples')
    }
    const handlefamily=()=>{
    navi('/family')
    }
    const handlefriends=()=>{
        navi('/friends')
        }
  return (
    <>
    <>
        <Hero/>
        <h1>Family Trip Plan</h1>
    <div className='d-flex whole-main'> 
        <div className="card-main d-flex ">
            <div><img className='image' 
            src="https://images.pexels.com/photos/4262173/pexels-photo-4262173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div><img className='image' 
            src="https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg" alt="" />
            </div>
            <div><img className='image img-center' 
            src="https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div><img className='image ' 
            src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
     
        </div>
        <div className='text-main'>
        <div>
            <h3>planning to spend valuable time with your family</h3>
            <p className='text1'>Embark on an unforgettable adventure that brings the entire family together with Travel Patner's specially curated family trips. Whether you're looking to relax on sun-drenched beaches, explore magical theme parks, 
                or immerse yourselves in the great outdoors, we have something for every member of the family to enjoy.</p>

                <br />
                <p className='text2'>Book early and take advantage of our special family discounts, ensuring you get the best value without compromising on quality or fun.</p>
                <button onClick={handlefamily}>visit here</button>
        </div>
        
        
      
    </div>
   

    </div>
    </>
    {/* second pade friends  */}
    <div>
        <h1>Friends trip plan</h1>
    <div className='d-flex whole-main'>
        
        <div className="text-main">
            <h3> Make the  memorable  moments with your friends</h3>
            
                <p className="text1">Get ready for the ultimate adventure with your friends! Whether you're seeking thrilling escapades, laid-back getaways, or cultural exploration, our Friends 
                Trips are designed to create unforgettable memories with your favorite people.</p>

                <br />
                <p className='text2'>Gather your squad and embark on a journey of a lifetime. Our expert travel planners are here to assist you in crafting the perfect Friends Trip tailored to your group's interests and preferences.

</p>
<button onClick={handlefriends}>visit here</button>
            
        </div>
        <div className="card-main d-flex">
            <div><img src="https://images.pexels.com/photos/4625415/pexels-photo-4625415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image' alt="" /></div>
            <div><img src="https://images.pexels.com/photos/4880416/pexels-photo-4880416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image' alt="" /></div>
            <div><img src="https://images.pexels.com/photos/7625042/pexels-photo-7625042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='image' alt="" /></div>
            <div><img src="https://images.pexels.com/photos/7625142/pexels-photo-7625142.jpeg?auto=compress&cs=tinysrgb&w=600" className='image' alt="" /></div>
        </div>

    </div>
    </div>

    {/* third page couples */}
    <div>
        <h1>Couples trip plan</h1>
        <div className="whole-main d-flex">
            <div className="card-main d-flex">
                <div><img className='image' src="https://images.pexels.com/photos/6324469/pexels-photo-6324469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div><img  className='image' src="https://images.pexels.com/photos/8968841/pexels-photo-8968841.jpeg" alt="" /></div>
                <div><img  className='image' src="https://images.pexels.com/photos/8653130/pexels-photo-8653130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                <div><img  className='image'     src="https://images.pexels.com/photos/6550329/pexels-photo-6550329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            </div>
            <div className="text-main">
                <h3>make the moment more special with your loved one's</h3>

                <p className='text1'>Indulge in blissful moments and create lasting memories with our handcrafted Couple Trips. Whether you're celebrating a special occasion or simply craving quality time
                 together, our curated experiences promise romance, relaxation, and adventure.</p>
                 <p className='text2'>Plan your dream getaway with us. Whether you prefer a 
                 serene beach escape or an adventurous journey, we'll tailor an itinerary just for you and your loved one.</p>

                 <button onClick={handlecouples}>visit here</button>
            </div>

        </div>
    </div>  

    </>
  )
}

export default Cards
