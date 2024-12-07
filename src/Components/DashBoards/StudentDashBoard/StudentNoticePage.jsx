import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentNoticePage = () => {
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#F6F6F2',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          color: '#2b6777',
          fontWeight: 'bold',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        Notices
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {notices.map((notice) => (
          <div
            key={notice._id}
            style={{
              flex: '1 1 calc(100% - 40px)', // Takes full width of the container
              maxWidth: '100%',
              padding: '20px',
              backgroundColor: '#fff',
              border: '1px solid #BADFE7',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: '10px',
            }}
          >
            <h3
              style={{
                color: '#388087',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {notice.title}
            </h3>
            <p
              style={{
                color: '#333',
                marginBottom: '15px',
                lineHeight: '1.6',
              }}
            >
              {notice.description}
            </p>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                textAlign: 'right',
              }}
            >
              {new Date(notice.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentNoticePage;
