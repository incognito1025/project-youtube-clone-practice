import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./Components/AboutPage";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import ErrorMessage from './Components/ErrorMessage';
import SiteMap from './Components/SiteMap';
import ShowPage from './Components/ShowPage';

import './App.css';

export default function App() {
    const [searchValue, setSearchValue] = useState('');
    const [videos, setVideos] = useState('');

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} videos={videos} setVideos={setVideos}/>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/video/:id" element={<ShowPage />} />
                {/* Add Mike and Steven's routes*/}
            </Routes>
            <ErrorMessage />
            <SiteMap />
        </Router>
    );
}


/*
Component Map
React YouTube Project - Component Map

C1. Main - App.jsx (aka Home) define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
		b. VideoList - VideoList.jsx (child of Main)
		c. Showpage - ShowPage.jsx (child of Main)
			    i. Comment Form - CommentForm.jsx (child component of ShowPage)
		d. About Page - AboutPage.jsx
		e.  Sitemap - SiteMap.jsx (child of Main)
2. Readme - README.MD
3. //data/fetch.jsx (not in Components Folder)
4. assets - photos (not in components Folder)



removed :
  <Route path="/comment/:id" element={<CommentForm />} />
*/