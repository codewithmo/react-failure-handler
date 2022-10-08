import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={'/messages'}>Error messages</Link>
    </div>
  )
}

export default Home
