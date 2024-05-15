const key = import.meta.env.VITE_API_BASE_URL;

export function getVideoById(id) {
    return fetch(`${key}&id=${id}`)
    .then(response => response.json())
}

// export function getAllVideos() {
//     return fetch(fetch(
//         `https://youtube.googleapis.com/youtube/v3/search?key=${key}`
//       ))
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

//child component to 

export function createVideo(videoData) {
    return fetch(`${key}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Do we need any other headers???? - As Steve/Mike
        },
        body: JSON.stringify(videoData),
    })
    .then(response => response.json())
    .catch(error => console.error('Error creating video:', error));
}




/*
const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_APP_API_KEY}`;

export function getVideoById(id) {
    return fetch(`${BASE_URL}&id=${id}`)
    .then(response => response.json())
}

export function getAllVideos() {
    return fetch(BASE_URL)
    .then(response => response.json())
}

export function createVideo(videoData) {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Do we need any other headers???? - As Steve/Mike
        },
        body: JSON.stringify(videoData),
    })
    .then(response => response.json())
    .catch(error => console.error('Error creating video:', error));
}
*/