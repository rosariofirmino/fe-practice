import React from 'react';
import './App.css';
import TestimonialCard from './Components/TestimonialCard';
import userImage from './Assets/TestimonialCard/profile-thumbnail.png'
import blogImage from './Assets/BlogCard/blogimage.jpg'
import BlogCard from './Components/BlogCard';
import ProfileCard from './Components/ProfileCard';

const testimonialProps = {
  fullName: 'Sarah Dole',
  userName: 'sarahdole',
  content: 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!',
  imageUrl: userImage
}

const blogProps = {
  title: 'Living Room Inspirations',
  description: 'Curated vibrant colors for your living, make it pop & calm at the same time',
  categories: ['Interior'],
  imageUrl: blogImage
}

const profileProps = {
  fullName: 'Sarah Dole',
  position: 'Front End Engineer',
  company: 'Microsoft',
  description: 'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer',
  email: 'sarahdole@microsoft.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  github: 'https://github.com',
  x:'https://x.com',
  imageUrl: userImage
}

function App() {
  return (
    <div className="App">
      <h1>Testimonial Card</h1>
      <TestimonialCard {...testimonialProps} />
      <h1>Blog Card</h1>
      <BlogCard {...blogProps} />
      <h1>Profile Card</h1>
      <ProfileCard {...profileProps}/>
    </div>
  );
}

export default App;
