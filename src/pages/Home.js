import React from 'react';
import CollectionDirectory from '../components/home/CollectionDirectory';
import SideNav from '../components/home/SideNav';

const Home = () => {
  return (
    <div className="layout">
      <SideNav />
      <CollectionDirectory />
    </div>
  )
}

export default Home
