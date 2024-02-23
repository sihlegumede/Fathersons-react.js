import React from 'react';
import './blog.css';

import { Brand, Feature, Article } from '../../components';

const Blog = () => {
  return (
    <div className='blog'>
      <Brand />
      <hr />
      <Feature />
      <Article />
    </div>
  )
}

export default Blog