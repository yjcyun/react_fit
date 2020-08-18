import React from 'react';
import SideNav from '../components/home/SideNav';
import CollectionDirectory from '../components/home/CollectionDirectory';

const Home = ({ match }) => {
  return (
    <div className="layout">
      <SideNav />
      <CollectionDirectory />
    </div>
  )
}

export default Home