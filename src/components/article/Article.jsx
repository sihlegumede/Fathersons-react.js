import React from 'react';
import './article.css';

import FathersonsVideo from './video/STEPHEN JAMES  whoiselijah  FATHER SONS Clothing 💪🏻.mp4';

const article = () => {
  return (
    <div className="article">
      <div className="article_video">
        <video src={FathersonsVideo} autoPlay muted loop />
      </div>
    </div>
  )
}

export default article