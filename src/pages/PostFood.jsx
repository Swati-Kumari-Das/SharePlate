import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiCamera, FiX } from 'react-icons/fi';

const PostFood = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    expiryDate: '',
    pickupTime: '',
    location: '',
    servings: '',
    allergens: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate image size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Please select an image smaller than 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        // Create a smaller version of the image
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 800;
          const maxHeight = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          setPreviewImage(canvas.toDataURL('image/jpeg', 0.8));
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Food posted successfully!');
    navigate('/posts');
  };

  return (
    <div className="post-food-container">
      <div className="header">
        <button onClick={() => navigate('/')}>FoodShare</button>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/posts')}>My Posts</button>
        <button onClick={() => navigate('/messages')}>Messages</button>
      </div>
      
      <div className="post-food-content">
        <h2>Share Your Extra Food</h2>
        <p className="subtitle">Help reduce food waste by sharing with your community</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-section image-upload-section">
            <h3>Food Image</h3>
            <div 
              className={`image-upload ${previewImage ? 'has-image' : ''}`}
              onClick={() => fileInputRef.current.click()}
            >
              {previewImage ? (
                <div className="image-preview-container">
                  <img 
                    src={previewImage} 
                    alt="Food preview" 
                    className="food-preview" 
                  />
                  <button 
                    type="button" 
                    className="remove-image-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage();
                    }}
                  >
                    <FiX />
                  </button>
                </div>
              ) : (
                <>
                  <div className="upload-icon">
                    <FiUpload size={48} />
                    <FiCamera size={24} className="camera-icon" />
                  </div>
                  <p>Upload Image</p>
                  <p className="hint">Tap to add a photo of your food</p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: 'none' }}
              />
            </div>
            <p className="image-requirements">Max size: 5MB • Recommended: 800x600px</p>
          </div>
          
          {/* Rest of your form fields remain the same */}
          {/* ... */}
          
        </form>
      </div>
    </div>
  );
};

export default PostFood;