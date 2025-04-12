import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded user credentials
  const users = [
    { email: 'user1@example.com', password: 'password1', name: 'Sarah Johnson' },
    { email: 'user2@example.com', password: 'password2', name: 'John Doe' },
    { email: 'user3@example.com', password: 'password3', name: 'Alice Smith' },
    { email: 'user4@example.com', password: 'password4', name: 'Bob Brown' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // In a real app, you would store this in context or state management
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-tabs">
        <button className="active">Login</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </div>
      
      <h2>Welcome Back</h2>
      <p>Sign in to your account</p>
      
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="login-btn">Login</button>
      </form>
      
      <div className="login-footer">
        <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        <button onClick={() => navigate('/signup')}>Sign up instead</button>
      </div>
    </div>
  );
};

export default Login;