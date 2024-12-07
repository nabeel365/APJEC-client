import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoticeModal = () => {
  const [latestNotice, setLatestNotice] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

// notices/latest   - to be done later

  const fetchLatestNotice = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notices/latest');    
      setLatestNotice(response.data);
    } catch (error) {
      console.error('Error fetching latest notice:', error);
    }
  };

  useEffect(() => {
    fetchLatestNotice();
  }, []);

  if (!latestNotice || !isOpen) return null;

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <div 
        style={{ 
          background: '#fff', 
          padding: '20px', 
          borderRadius: '8px', 
          maxWidth: '500px', 
          width: '90%' 
        }}
      >
        <h1>Latest Notices</h1>
        <h3 style={{ color: '#2b6777', marginBottom: '10px' }}>{latestNotice.title}</h3>
        <p>{latestNotice.description}</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          {new Date(latestNotice.date).toLocaleDateString()}
        </p>
        <button 
          onClick={() => setIsOpen(false)} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#2b6777', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            marginTop: '10px' 
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NoticeModal;
