# ReactJs

## react -
React is a JavaScript library for creating user interfaces.

The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.

### Ways to use react
- using cdn links
    - **CDN Links** - 
    A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
- using npm with bundlers
    - vite
    - parcel
    - webpack comes by default with cra

### react vs react-dom -
React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React. This may be a source of confusion, since any slightly dated documentation won't mention the React / ReactDOM distinction.

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE: Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

[See the blog post announcing the v0.14 release](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)