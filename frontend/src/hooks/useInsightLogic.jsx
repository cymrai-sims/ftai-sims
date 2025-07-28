// src/hooks/useInsightLogic.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// const insightApiMap = {
//   '/': 'http://localhost:5000/api/v1/insight/dashboard',
//   '/accounts': 'http://localhost:5000/api/v1/insight/accounts',
//   '/inventory': 'http://localhost:5000/api/v1/insight/inventory',
//   '/procurement': 'http://localhost:5000/api/v1/insight/procurement',
//   '/maintenance': 'http://localhost:5000/api/v1/insight/maintenance',
//   '/requisitions': 'http://localhost:5000/api/v1/insight/requisitions',
//   '/support': 'http://localhost:5000/api/v1/insight/support',
// };

const useInsightLogic = (isOpen) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsight = async () => {
      const endpoint = 'http://localhost:5000/api/v1/insight/dashboard' //insightApiMap[currentPath];
      if (!endpoint || !isOpen) return;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.post(endpoint, {
          message: "Show me a dummy AI insight in 50 words regarding inventory. Do not mention anything like 'Here’s a sample AI insight about inventory:'",
          page: 'dashboard'
        });
     

        setInsight(res.data.reply);
      } catch (err) {
        console.error("the error ",err);
        setError('Failed to load insights.');
        setInsight('');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [isOpen, currentPath]);

  return {
    insight,
    loading,
    error,
  };
};

export default useInsightLogic;
