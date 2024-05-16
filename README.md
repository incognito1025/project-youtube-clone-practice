# Getting Started with Create React App
# project-youtube-clone-practice

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
project-youtube-clone-practice is an effort to recreate the functionality of a popular online video hosting website (YouTube) using React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5175](http://localhost:5175) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
[notYouTube Deployment](https://notyoutube.netlify.app)



###	Component Map
###	React YouTube Project - Component Map

C1. Main - App.jsx (aka Home) define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
		b. VideoList - VideoList.jsx (child of Main)
		c. Showpage - ShowPage.jsx (child of Main)
			    i. Comment Form - CommentForm.jsx (child component of ShowPage)
		d. About Page - AboutPage.jsx
		e. Sitemap - SiteMap.jsx (child of Main)
2. Readme - README.MD
3. //data/fetch.jsx (not in Components Folder)
4. assets - photos (not in components Folder)



removed :
  <Route path="/comment/:id" element={<CommentForm />} />
*/


Priorities
1. Data Fetch- API
2. Main, App.jsx - root, Nav / Search
3. About, Home, Showpage
4. Footer, Sitemap, ReadMe.md, Error page assets- photos


YouTube pages Visuals
1. Homepage
	 a. Home page on load
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 `prompt`  - prompts the user to search for videos on load
		 `Footer`
			 -Includes `Site Map`



Mike: Showpage, search
Steve:About, ReadME.md, , assets, sitemap
Nikki:Data,Navbar,comment Form footer, Error Page
	
	 
	 
	 b. Home page on search
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 Videos that appear from API
		 `Footer`
			 -Includes `Site Map`
	
	


2. Show page
		 Includes:
		 `Navbar`
		 `Home` link ,
		 `About` link
		 One video that appear from API ready for viewing
		 `Footer`
			 -Includes `Site Map`
		
	a. Comment Form:
		 Includes:
		 `Name` field
		 `Comment` field
		 `Submit` button
		 Comments as examples
		 
		


