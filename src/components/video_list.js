import React from 'react';
import VideoItems from './video_items';

const VideoList = (props) =>{
  const videoItem =  props.videos.map((video)=>{
        return(
        <VideoItems 
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
        );
    })
    return(
        <ul className='col-md-4 list-group'>
         {videoItem}
        </ul>
        
    );
};

export default VideoList;