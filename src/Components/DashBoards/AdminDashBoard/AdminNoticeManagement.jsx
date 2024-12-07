import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminNoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '' });
  const [editingNotice, setEditingNotice] = useState(null);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddNotice = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/notices/add', form);
      fetchNotices();
      setForm({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error adding notice:', error);
    }
  };

  const handleUpdateNotice = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/notices/update/${editingNotice._id}`, form);
      fetchNotices();
      setEditingNotice(null);
      setForm({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error updating notice:', error);
    }
  };

  const handleDeleteNotice = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notices/delete/${id}`);
      fetchNotices();
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div style={{ background: '#F6F6F2', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ color: '#2b6777', fontWeight: 'bold', textAlign: 'center' }}>Admin - Manage Notices</h2>
      
      <form 
        onSubmit={editingNotice ? handleUpdateNotice : handleAddNotice} 
        style={{ margin: '20px auto', maxWidth: '600px', padding: '20px', border: '1px solid #BADFE7', borderRadius: '8px', backgroundColor: '#C2EDCE' }}
      >
        <h3 style={{ color: '#388087' }}>{editingNotice ? 'Edit Notice' : 'Add Notice'}</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #BADFE7' }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #BADFE7' }}
        ></textarea>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #BADFE7' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#2b6777', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {editingNotice ? 'Update Notice' : 'Add Notice'}
        </button>
      </form>

      <div style={{ margin: '20px auto', maxWidth: '800px' }}>
        <h3 style={{ color: '#2b6777', textAlign: 'center' }}>All Notices</h3>
        {notices.map((notice) => (
          <div 
            key={notice._id} 
            style={{ padding: '15px', borderBottom: '1px solid #BADFE7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div>
              <h4 style={{ color: '#388087' }}>{notice.title}</h4>
              <p>{notice.description}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{new Date(notice.date).toLocaleDateString()}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  setEditingNotice(notice);
                  setForm({ title: notice.title, description: notice.description, date: notice.date.split('T')[0] });
                }}
                style={{ margin: '0 5px', backgroundColor: '#388087', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteNotice(notice._id)}
                style={{ margin: '0 5px', backgroundColor: '#d9534f', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNoticeManagement;
