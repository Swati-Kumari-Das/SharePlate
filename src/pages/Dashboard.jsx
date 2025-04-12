import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { name: 'Guest' };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {currentUser.name}</h1>
      
      <div className="quick-actions">
        <button onClick={() => navigate('/post-food')}>Post Food</button>
        <button onClick={() => navigate('/food')}>Find Food</button>
        <button onClick={() => navigate('/posts')}>My Posts</button>
        <button onClick={() => navigate('/profile')}>My Profile</button>
      </div>
      
      <div className="stats-summary">
        <div className="stat-card">
          <h3>5</h3>
          <p>Available Posts</p>
        </div>
        <div className="stat-card">
          <h3>12</h3>
          <p>Total Donations</p>
        </div>
        <div className="stat-card">
          <h3>4.7</h3>
          <p>Your Rating</p>
        </div>
      </div>
      
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-item">
          <p>Your post "Vegetable Soup" was booked by John</p>
          <small>2 hours ago</small>
        </div>
        <div className="activity-item">
          <p>You booked "Homemade Pasta" from Alice</p>
          <small>1 day ago</small>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;