import React from 'react'
import CompanyCard from './CompanyCard'

const SimilarCompanies = () => {
    const similar=[
        {
          name: "Meta",
         employees: 58604
        },
        {
          name: "Netflix",
         employees: 12800
        },
        {
          name: "Microsoft",
         employees: 221000
        },
        {
          name: "Adobe",
         employees: 29439
        },
        {
          name: "Google",
         employees: 181798
        },
        {
          name: "Spotify",
         employees: 8200
        },
        {
          name: "Amazon",
         employees: 1561000
        },
        {
          name: "Apple",
         employees: 164000
        }
        ]
  return (
    <div className='w-1/4'>
      <div className='text-xl font-semibold mb-5'>Similar Companies</div>
      <div className='flex flex-col flex-wrap gap-5'>
        {
            similar.map((s,index)=> <CompanyCard key={index} {...s} />)
        }
      </div>
    </div>
  )
}

export default SimilarCompanies
