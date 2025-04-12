import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('available');
  
  // Hardcoded posts data with image URLs
  const posts = {
    available: [
      {
        id: 1,
        title: 'Homemade Pasta',
        description: 'Made too much pasta for dinner. Fresh and ready for pickup. Available until tomorrow evening.',
        imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
        category: 'Non-Veg • Cooked',
        postedTime: '2 hours ago',
        distance: '1.5km away'
      },
      {
        id: 2,
        title: 'Vegetable Soup',
        description: 'Freshly made vegetable soup. Can serve 3-4 people. Available for pickup today.',
        imageUrl: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
        category: 'Veg • Cooked',
        postedTime: '1 hour ago',
        distance: '0.8km away'
      }
    ],
    booked: [
      {
        id: 3,
        title: 'Birthday Cake',
        description: 'Half of a chocolate birthday cake. Still fresh and delicious!',
        imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
        bookedBy: 'Sarah Johnson',
        expiresIn: '23 hours, 15 minutes',
        category: 'Non-Veg • Cooked',
        postedTime: '5 hours ago',
        distance: '2.1km away'
      }
    ],
    completed: [
      {
        id: 4,
        title: 'Leftover Pizza',
        description: '4 slices of pepperoni pizza from yesterday. Still good!',
        imageUrl: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
        category: 'Non-Veg • Cooked',
        postedTime: '1 day ago',
        distance: '1.2km away'
      }
    ],
    expired: [
      {
        id: 5,
        title: 'Fruit Salad',
        description: 'Fresh fruit salad with apples, oranges, and grapes.',
        imageUrl: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg',
        category: 'Veg • Raw',
        postedTime: '3 days ago',
        distance: '0.5km away'
      }
    ]
  };

  return (
    <div className="my-posts-container">
      <div className="header">
        <button onClick={() => navigate('/')}>FoodShare</button>
        <button onClick={() => navigate('/')}>Dashboard</button>
        <button className="active">My Posts</button>
        <button onClick={() => navigate('/bookings')}>Bookings</button>
      </div>
      
      <h1>My Posts</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'available' ? 'active' : ''}
          onClick={() => setActiveTab('available')}
        >
          Available
        </button>
        <button 
          className={activeTab === 'booked' ? 'active' : ''}
          onClick={() => setActiveTab('booked')}
        >
          Booked
        </button>
        <button 
          className={activeTab === 'completed' ? 'active' : ''}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button 
          className={activeTab === 'expired' ? 'active' : ''}
          onClick={() => setActiveTab('expired')}
        >
          Expired
        </button>
      </div>
      
      <div className="posts-list">
        {posts[activeTab].map(post => (
          <div key={post.id} className="post-card">
            {/* Food Image Display */}
            <div className="post-image-container">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="post-image"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg';
                }}
              />
              <div className="post-category-badge">{post.category}</div>
            </div>
            
            <div className="post-content">
              <h3>{post.title}</h3>
              <p className="post-description">{post.description}</p>
              
              <div className="post-meta">
                <span className="post-distance">{post.distance}</span>
                <span className="post-time">{post.postedTime}</span>
              </div>
              
              {activeTab === 'booked' && (
                <div className="booking-details">
                  <p><strong>Booked by:</strong> {post.bookedBy}</p>
                  <p><strong>Expires in:</strong> {post.expiresIn}</p>
                </div>
              )}
              
              <div className="post-actions">
                {activeTab === 'available' && (
                  <>
                    <button 
                      className="edit-btn"
                      onClick={() => navigate(`/edit-post/${post.id}`)}
                    >
                      Edit Post
                    </button>
                    <button className="delete-btn">Delete</button>
                  </>
                )}
                
                {activeTab === 'booked' && (
                  <>
                    <button className="accept-btn">Accept Booking</button>
                    <button className="reject-btn">Reject Booking</button>
                  </>
                )}
                
                {(activeTab === 'completed' || activeTab === 'expired') && (
                  <>
                    <button className="repost-btn">Post Again</button>
                    {activeTab === 'completed' && (
                      <button className="details-btn">View Details</button>
                    )}
                    {activeTab === 'expired' && (
                      <button className="delete-btn">Delete</button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;