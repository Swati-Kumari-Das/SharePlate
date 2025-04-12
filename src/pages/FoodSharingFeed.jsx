import { useNavigate } from 'react-router-dom';

const FoodSharingFeed = () => {
  const navigate = useNavigate();
  
  // Hardcoded food items data with images and additional details
  const availableFood = [
    {
      id: 1,
      category: 'Veg • Cooked',
      title: '2 plates of rice & curry',
      description: 'Homemade spicy curry with basmati rice',
      distance: '1.2km away',
      time: 'Posted 30min ago',
      expiry: 'Expires in 5 hours',
      imageUrl: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      rating: 4.8,
      donor: 'Maria G.'
    },
    {
      id: 2,
      category: 'Non-Veg • Cooked',
      title: 'Homemade pasta',
      description: 'Creamy Alfredo pasta with chicken',
      distance: '3.1km away',
      time: 'Posted 45min ago',
      expiry: 'Expires in 7 hours',
      imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg',
      rating: 4.5,
      donor: 'John D.'
    },
    {
      id: 3,
      category: 'Non-Veg • Cooked',
      title: 'Leftover pizza slices',
      description: '4 slices pepperoni pizza from local pizzeria',
      distance: '0.8km away',
      time: 'Posted 15min ago',
      expiry: 'Expires soon',
      imageUrl: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      rating: 4.2,
      donor: 'Pizza Hut'
    }
  ];

  const bookedFood = [
    {
      id: 4,
      category: 'Non-Veg • Cooked • BOOKED',
      title: 'Grilled chicken',
      description: 'Freshly grilled chicken with herbs',
      distance: '1.9km away',
      time: 'Posted 2hrs ago',
      expiry: 'Expires in 3 hours',
      imageUrl: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
      rating: 4.9,
      donor: 'Alex C.'
    },
    {
      id: 5,
      category: 'Veg • Raw • BOOKED',
      title: 'Organic apples',
      description: 'Box of fresh organic apples',
      distance: '0.7km away',
      time: 'Posted 4hrs ago',
      expiry: 'Expires in 2 days',
      imageUrl: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      rating: 4.7,
      donor: 'Green Farms'
    }
  ];

  return (
    <div className="food-feed-container">
      <h1>Find Available Food</h1>
      
      <div className="filter-section">
        <div className="form-group">
          <label>Category</label>
          <select>
            <option>All Categories</option>
            <option>Veg • Cooked</option>
            <option>Veg • Raw</option>
            <option>Non-Veg • Cooked</option>
            <option>Non-Veg • Raw</option>
          </select>
        </div>
        
        <div className="filter-options">
          <div className="filter-group">
            <label>Distance</label>
            <select>
              <option>Within 5km</option>
              <option>Within 10km</option>
              <option>Within 20km</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Sort By</label>
            <select>
              <option>Nearest</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Expiring Soon</option>
            </select>
          </div>
        </div>
      </div>
      
      <section className="food-section">
        <h2>Available Food Near You</h2>
        <div className="food-grid">
          {availableFood.map(food => (
            <div key={food.id} className="food-card">
              <div className="food-image-container">
                <img 
                  src={food.imageUrl} 
                  alt={food.title}
                  className="food-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg';
                  }}
                />
                <div className="food-rating">{food.rating} ★</div>
              </div>
              
              <div className="food-content">
                <div className="food-category">{food.category}</div>
                <h3 className="food-title">{food.title}</h3>
                <p className="food-description">{food.description}</p>
                
                <div className="food-details">
                  <div className="food-distance">
                    <span>📍</span> {food.distance}
                  </div>
                  <div className="food-time">
                    <span>⏱️</span> {food.time}
                  </div>
                  <div className="food-expiry">
                    <span>⏳</span> {food.expiry}
                  </div>
                  <div className="food-donor">
                    <span>👤</span> {food.donor}
                  </div>
                </div>
                
                <button 
                  className="book-btn"
                  onClick={() => navigate(`/book/${food.id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="food-section">
        <h2>Recently Booked</h2>
        <div className="food-grid">
          {bookedFood.map(food => (
            <div key={food.id} className="food-card booked">
              <div className="food-image-container">
                <img 
                  src={food.imageUrl} 
                  alt={food.title}
                  className="food-image"
                />
                <div className="food-rating">{food.rating} ★</div>
              </div>
              
              <div className="food-content">
                <div className="food-category">{food.category}</div>
                <h3 className="food-title">{food.title}</h3>
                <p className="food-description">{food.description}</p>
                
                <div className="food-details">
                  <div className="food-distance">
                    <span>📍</span> {food.distance}
                  </div>
                  <div className="food-time">
                    <span>⏱️</span> {food.time}
                  </div>
                  <div className="food-expiry">
                    <span>⏳</span> {food.expiry}
                  </div>
                  <div className="food-donor">
                    <span>👤</span> {food.donor}
                  </div>
                </div>
                
                <button 
                  className="details-btn"
                  onClick={() => navigate(`/food/${food.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodSharingFeed;