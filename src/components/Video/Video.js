import React from 'react';

const Video = (props) => {

  if(!props.video){
    return (
      <div className='video col-xl-8'>
        読み込み中だにょーん
      </div>
    )
  }

  const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

  return (
    <div className="video col-xl-8">
      <div className="ratio ratio-16x9">
      <iframe className="ratio > *" src={videoURL}></iframe>
      </div>
      <div className="info">           
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default Video;