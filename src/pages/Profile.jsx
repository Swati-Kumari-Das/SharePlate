import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com'
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      
      <section>
        <h2>Personal Information</h2>
        <p>Manage your account details</p>
      </section>
      
      <section>
        <h2>Contact Details</h2>
        <div className="profile-detail">
          <strong>Name</strong>
          <p>{currentUser.name}</p>
        </div>
        <div className="profile-detail">
          <strong>Email</strong>
          <p>{currentUser.email}</p>
        </div>
        <div className="profile-detail">
          <strong>Phone</strong>
          <p>+1 (555) 123-4567</p>
        </div>
      </section>
      
      <section className="stats-grid">
        <div className="stat-box">
          <h3>23</h3>
          <p>Total Donations</p>
        </div>
        <div className="stat-box">
          <h3>45</h3>
          <p>Total Pickups</p>
        </div>
        <div className="stat-box">
          <h3>4.8</h3>
          <p>Average Rating</p>
        </div>
      </section>
      
      <section>
        <h2>Badges & Achievements</h2>
        <div className="badges-grid">
          <div className="badge">
            <h4>Top Donor</h4>
            <p>Donated 10+ items</p>
          </div>
          <div className="badge">
            <h4>Food Saver</h4>
            <p>Saved 50kg of food</p>
          </div>
          <div className="badge">
            <h4>Community Hero</h4>
            <p>Active for 6+ months</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2>Points History</h2>
        <div className="profile-detail">
          <strong>Points</strong>
          <p>1,250 points earned</p>
        </div>
        <div className="profile-detail">
          <strong>Redeem</strong>
          <p>History</p>
        </div>
      </section>
      
      <div className="profile-actions">
        <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>
        <button onClick={() => {
          localStorage.removeItem('currentUser');
          navigate('/login');
        }}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;