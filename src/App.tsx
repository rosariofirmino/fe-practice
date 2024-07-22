import React from 'react';
import './App.css';
import TestimonialCard from './Components/TestimonialCard';
import userImage from './Assets/TestimonialCard/profile-thumbnail.png'
import blogImage from './Assets/BlogCard/blogimage.jpg'
import BlogCard from './Components/BlogCard';

const testUser = {
  fullName: 'Sarah Dole',
  userName: 'sarahdole',
  content: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!',
  imageUrl: userImage
}

const testBlog = {
  title: 'Living Room Inspirations',
  description: 'Curated vibrant colors for your living, make it pop & calm at the same time',
  categories: ['Interior'],
  imageUrl: blogImage
}

function App() {
  return (
    <div className="App">
      <h1>Testimonial Card</h1>
      <TestimonialCard {...testUser} />
      <h1>Blog Card</h1>
      <BlogCard {...testBlog} />
    </div>
  );
}

export default App;
