# ReactJs

## React -
React is a JavaScript library for creating user interfaces.

The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.

### Ways to use react
- Using CDN links
    - **CDN Links** - 
    A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
- Using npm with bundlers
    - vite
    - parcel
    - webpack (by default comes with CRA)

## React vs ReactDOM -
React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React. This may be a source of confusion, since any slightly dated documentation won't mention the React / ReactDOM distinction.

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE: Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

[See the blog post announcing the v0.14 release](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)

---

## About npm -
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:
- the website
- the Command Line Interface (CLI)
- the registry

**Note** - npm is not stands for the *node package manager*.

### Role of bundlers in react js -
- Code organization
- Dependency management
- Performance optimization
- Code transformation (using tools like Babel)
- Asset management (handling CSS, images, fonts)
- Tree shaking (eliminating unused code)
- Hot module replacement (HMR) for fast development iteration
- Source mapping for easier debugging
- Code splitting for lazy loading and better performance
- Minification of code for smaller file sizes
- Polyfilling for browser compatibility
- Configurability through plugins and loaders
- Handling of various file formats (JSON, YAML, etc.)
- Generating static assets for deployment
- Handling of third-party libraries and modules
- Optimizing caching strategies
- Support for module systems (CommonJS, AMD, ES6 modules)
- Improving SEO through server-side rendering (with tools like Next.js)
- Enabling progressive web app (PWA) features
- Analyzing bundle sizes for optimization opportunities
- Error handling and reporting
- Integration with development servers
- Preprocessing (Sass, Less, etc.) for CSS
- Automatic vendor prefixing for CSS properties
- Supporting TypeScript or other languages through appropriate plugins
- Transforming assets (like optimizing images)
- Incorporating environment variables for different build environments
- Ensuring consistent code style (linting) through integration with tools like ESLint or Prettier
- Internationalization support (i18n)
- Automatically injecting necessary scripts into HTML files
- Seamless integration with other build tools and CI/CD pipelines

**Note** - We install bundlers as devdependency using *npm i -D*

---

## What are Dependencies?
In the context of Node.js and npm (Node Package Manager), dependencies are categorized into two main types: "dependencies" and "devDependencies".

- Dependencies: These are packages that are necessary for your application to run in production. They are the packages that your application needs to work properly when someone installs and uses it. For example, if you're building a web application with React, React itself would be a "dependency" because it's required for the app to function.

- devDependencies: These are packages that are only needed for development and testing purposes. They are not required for the live/production version of your application to run. These packages typically include things like testing libraries (Jest, Mocha), build tools (Webpack, Babel), linters (ESLint, Prettier), and other development-specific tools. They are used during development to help with tasks such as testing, transpiling code, bundling assets, and maintaining code quality.

When someone installs your package using npm (Node Package Manager), by default, both the dependencies and devDependencies are installed, unless the --production flag is used. This is because during development, you often need the development dependencies to work on and test the code. However, when someone installs your package for production, they may only want to install the dependencies to avoid installing unnecessary development tools and libraries.

react and react-dom are dependencies required for the app to function.
webpack, babel-loader, eslint, and jest are devDependencies needed during development for tasks like bundling, linting, and testing.
When someone runs npm install to install this package, both dependencies and devDependencies will be installed.

### Signs which are used before versions in the dependencies i.e ^ and ~
In Node.js and npm's package.json files, both the ^ and ~ symbols are used to specify version ranges for dependencies. Here's how they differ:

- Caret (^): Allows updates to the latest version for the specified major version. It will update to the latest minor or patch version for the specified major version. The left-most non-zero digit is considered the major version.

Example: "^1.2.3" allows updates to any version 1.x.x, but not 2.0.0.

- Tilde (~): Allows updates to the latest version for the specified minor version. It will update to the latest patch version for the specified minor version.

Example: "~1.2.3" allows updates to any version 1.2.x, but not 1.3.0.
Here are some more examples to illustrate the difference:

^1.2.3:

Allows updates to: 1.2.4, 1.3.0, 1.4.5, etc.
Won't update to: 2.0.0, as it's considered a new major version.
~1.2.3:

Allows updates to: 1.2.4, 1.2.9, but not 1.3.0.
Won't update to: 1.4.0 or 2.0.0.
So, the choice between ^ and ~ depends on how you want to manage updates:

^ is more permissive and will allow minor and patch updates within the specified major version.
~ is more restrictive and will only allow patch updates within the specified minor version.
If you want to ensure you only get bug fixes and not new features, you might choose ~. If you're okay with getting new features as long as they don't break compatibility, you might choose ^.

---

## package.json vs package-lock.json -
- **package.json**: Contains project metadata, scripts, and high-level dependencies. Developers manually manage this file, specifying the project's name, version, description, main file, scripts, dependencies, and devDependencies.

- **package-lock.json**: Automatically generated by npm/Yarn to lock down the exact version of every installed package and its dependencies. Ensures consistency across different environments by fixing the exact versions used. Developers do not typically modify this file directly; it is used for reproducible builds and to prevent version conflicts when deploying the project.

---

## HTML js file link -
- type="module":
When using `<script type="module" src="path/to/script.js"></script>`, it indicates that the JavaScript file script.js should be treated as an ES6 module.
Allows the use of import and export statements for modular JavaScript development.
Enables modern features like asynchronous module loading (import()).
Provides better code organization and encapsulation.
The browser fetches the module using CORS (Cross-Origin Resource Sharing) and MIME type application/javascript.
- Without type:
When using `<script src="path/to/script.js"></script>`, it indicates a regular JavaScript file without any specific module treatment.
This is the traditional way of including JavaScript.
All scripts without type="module" are loaded synchronously and executed in the order they appear in the HTML file.
Global variables and functions are shared across all scripts.
Does not support import and export statements for module separation.
In summary, type="module" enables modern ES6 module features like import and export for better code organization and encapsulation. Without type="module", scripts are loaded synchronously and do not have module-specific capabilities.

---

## What is JSX?
**JSX (JavaScript XML)** is a syntax extension for JavaScript used primarily in React. It allows you to write HTML-like code within your JavaScript files, making it easier to create and manage UI components. JSX gets transformed into regular JavaScript by tools like Babel before being used in the browser. It combines JavaScript expressions and HTML-like syntax, making React code more readable and declarative.

```jsx
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "This is a heading!"
);
```
vs

```jsx
const jsxHeading = <h1 id="jsxHeading">This is a JSX heading!</h1>
```

The above codes are equivalant. The only difference is one is core react code and other is JSX code.

JSX transpiled before it reaches the JS and it get done by using Babel.

---

## What is Babel?
**Babel** is a JavaScript compiler that converts modern JavaScript code (like ES6+) into versions that can run on older browsers. It's commonly used with React and JSX, allowing developers to write modern code while ensuring compatibility with a wide range of browsers. Babel's plugin system enables customization, and it's an essential tool in modern web development workflows.

Example -
```jsx
const heading = <h1>This is an example of Babel transpilation.</h1>
```
The above JSX code looks like this below code after Babel transpilation.
```jsx
const heading = ("h1", {
  children: "This is an example of Babel transpilation."
});
```

---

## React Components -
- Class Based Components
    - This is the old way of writing components in react.
    - Writing components this way is no longer considered the industry standard nowadays.
- Functional Components
    - This is the new way of writing components in react.
    - Writing components this way is the recommended and industry standard.

#### Example -
Class-based Components -
```jsx
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Class Component!</h1>
        <p>This is a class-based component.</p>
      </div>
    );
  }
}

export default ClassComponent;
```
Functional Components -
```jsx
const FunctionalComponent = () => {
  return (
    <div>
      <h1>Hello from Functional Component!</h1>
      <p>This is a functional component.</p>
    </div>
  );
};

export default FunctionalComponent;
```

---

## React Element vs React Component -
React Element -
```jsx
const element = <h1>Hello, React Element!</h1>;
```
React Component -
```jsx
const FunctionalComponent = () => {
  return (
    <div>
      <h1>Hello, Functional Component!</h1>
      <p>This is a functional component.</p>
    </div>
  );
};
```

**Note** - Functional component name must be start with capital letter.

### Rendering of the functional component and element in react -
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalComponent from './FunctionalComponent';

const element = <h1>Hello, React Element!</h1>;

ReactDOM.render(
  <div>
    {element} {/*react element*/}
    <FunctionalComponent /> {/*functional component*/}
  </div>,
  document.getElementById('root')
);
```

---

## Types of functional component rendering
- `<FunctionalComponent />`: A self-closing tag used in JSX for components without children. It's concise and indicates an empty element.

- `<FunctionalComponent></FunctionalComponent>`: Opening and closing tags used in JSX for components with children. The content goes between these tags.

Both render the same component, but the choice depends on whether the component has children elements or not. Use <`FunctionalComponent />` for no children and `<FunctionalComponent></FunctionalComponent>` for children.

#### Example -

```jsx
<FunctionalComponent /> // Renders component without children

<FunctionalComponent>
  <p>Child Element</p>
</FunctionalComponent> // Renders component with children
```

---