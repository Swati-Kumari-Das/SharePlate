import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FoodSharingFeed from './pages/FoodSharingFeed';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import PostFood from './pages/PostFood';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food" element={<FoodSharingFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<MyPosts />} />
        <Route path="/post-food" element={<PostFood />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;