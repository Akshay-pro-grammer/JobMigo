import React from 'react'
import Marquee from 'react-fast-marquee'

const Companies = () => {
    const companies =["Google","Amazon","Figma","Netflix","Meta","Microsoft","Pinterest","Slack","Spotify","Oracle","Walmart"];

  return (
    <div className='mt-20 pb-5'>
      <div className='text-center text-4xl font-semibold mb-10 text-nile-blue-100'>Trusted by <span className='text-quarter-spanish-white-400'>1000+</span> Companies</div>
        <Marquee pauseOnHover={true}>
            {
                
              companies.map((company,index)=><div key={index} className='mx-8 px-2 py-1 hover:bg-nile-blue-700 rounded-xl cursor-pointer'>
                  <img className='h-14' src={`/Companies/${company}.png`} alt="{company}" />
              </div>)
            }
           
        </Marquee>
    </div>
  )
}

export default Companies
