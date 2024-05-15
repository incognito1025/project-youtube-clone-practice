import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
/* eslint-disable react/prop-types */


function ShowPage() {
    const { id } = useParams(); // Extract video ID from URL
    const [video, setVideo] = useState(null);
  

    useEffect(() => {
        // Fetch video details from YouTube API
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${id}&part=snippet&key=${key}`)
            .then(response => response.json())
            .then(data => {
                setVideo(data.items[0]); // Assuming only one video is returned
            })
            .catch(error => console.error('Error fetching video:', error));
    }, [id, key]);

    return (
        <div>
            {video && (
                <div>
                    <h2>{video.snippet.title}</h2>
                    <p>{video.snippet.description}</p>
                    <iframe
                        title="video"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <CommentForm />
                </div>
            )}
        </div>
    );
}

export default ShowPage;


/*


1. Main - App.jsx (aka Home) define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
		b. VideoList - VideoList.jsx (child of Main)
				i. Showpage - ShowPage.jsx (child of VideoList)
						 a1. Comment Form - CommentForm.jsx (child component of ShowPage)
		d. About Page - AboutPage.jsx
		e. ErrorMessage -ErrorMessage.jsx
		f. Sitemap - SiteMap.jsx (child of Main)
1. Readme - README.MD
2. //data/fetch.jsx (not in Components Folder)
3. assets - photos (not in components Folder)


*/