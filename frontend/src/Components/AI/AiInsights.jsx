import React from 'react'

import useInsightLogic from '../../hooks/useInsightLogic'; 

const AiInsights = () => {
const { insight, loading, error } = useInsightLogic(true); 


  
  return (
    <div className="flex flex-col items-center justify-center">
        <div className='bg-white w-full p-3'>
          <h4 className='text-[var(--dark-main)]  font-bold '>AI Insights</h4>
           <p>{insight}</p>
          </p>
        </div>
    </div>
  )
}

export default AiInsights