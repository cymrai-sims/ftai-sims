import React from 'react'

import useInsightLogic from '../hooks/useInsightLogic'; 

const AiInsights = () => {
const { insight, loading, error } = useInsightLogic(true); 


  
  return (
    <div className="flex flex-col items-center justify-center p-5">
        <div className='bg-white w-full p-10'>
          <h4 className='text-[var(--dark-main)] py-3'>AI Insights</h4>
          <p className='text-[var(--orange-main)] py-3'>
            
           <p>{insight}</p>
          </p>
        </div>
    </div>
  )
}

export default AiInsights