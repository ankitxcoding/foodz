# ReactJs

## React -
React is a JavaScript library for creating user interfaces.

The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

Note - by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.

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

As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing - mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE - Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

[See the blog post announcing the v0.14 release](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)

---

## About npm -
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components -
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
In the context of Node.js and npm (Node Package Manager), dependencies are categorized into two main types - "dependencies" and "devDependencies".

- Dependencies - These are packages that are necessary for your application to run in production. They are the packages that your application needs to work properly when someone installs and uses it. For example, if you're building a web application with React, React itself would be a "dependency" because it's required for the app to function.

- devDependencies - These are packages that are only needed for development and testing purposes. They are not required for the live/production version of your application to run. These packages typically include things like testing libraries (Jest, Mocha), build tools (Webpack, Babel), linters (ESLint, Prettier), and other development-specific tools. They are used during development to help with tasks such as testing, transpiling code, bundling assets, and maintaining code quality.

When someone installs your package using npm (Node Package Manager), by default, both the dependencies and devDependencies are installed, unless the --production flag is used. This is because during development, you often need the development dependencies to work on and test the code. However, when someone installs your package for production, they may only want to install the dependencies to avoid installing unnecessary development tools and libraries.

react and react-dom are dependencies required for the app to function.
webpack, babel-loader, eslint, and jest are devDependencies needed during development for tasks like bundling, linting, and testing.
When someone runs npm install to install this package, both dependencies and devDependencies will be installed.

### Signs which are used before versions in the dependencies i.e ^ and ~
In Node.js and npm's package.json files, both the ^ and ~ symbols are used to specify version ranges for dependencies. Here's how they differ -

- Caret (^) - Allows updates to the latest version for the specified major version. It will update to the latest minor or patch version for the specified major version. The left-most non-zero digit is considered the major version.

Example - "^1.2.3" allows updates to any version 1.x.x, but not 2.0.0.

- Tilde (~) - Allows updates to the latest version for the specified minor version. It will update to the latest patch version for the specified minor version.

Example - "~1.2.3" allows updates to any version 1.2.x, but not 1.3.0.
Here are some more examples to illustrate the difference -

^1.2.3 -

Allows updates to - 1.2.4, 1.3.0, 1.4.5, etc.
Won't update to - 2.0.0, as it's considered a new major version.
~1.2.3 -

Allows updates to - 1.2.4, 1.2.9, but not 1.3.0.
Won't update to - 1.4.0 or 2.0.0.
So, the choice between ^ and ~ depends on how you want to manage updates -

^ is more permissive and will allow minor and patch updates within the specified major version.
~ is more restrictive and will only allow patch updates within the specified minor version.
If you want to ensure you only get bug fixes and not new features, you might choose ~. If you're okay with getting new features as long as they don't break compatibility, you might choose ^.

---

## package.json vs package-lock.json -
- **package.json** - Contains project metadata, scripts, and high-level dependencies. Developers manually manage this file, specifying the project's name, version, description, main file, scripts, dependencies, and devDependencies.

- **package-lock.json** - Automatically generated by npm/Yarn to lock down the exact version of every installed package and its dependencies. Ensures consistency across different environments by fixing the exact versions used. Developers do not typically modify this file directly; it is used for reproducible builds and to prevent version conflicts when deploying the project.

---

## HTML js file link -
- type="module" -
When using `<script type="module" src="path/to/script.js"></script>`, it indicates that the JavaScript file script.js should be treated as an ES6 module.
Allows the use of import and export statements for modular JavaScript development.
Enables modern features like asynchronous module loading (import()).
Provides better code organization and encapsulation.
The browser fetches the module using CORS (Cross-Origin Resource Sharing) and MIME type application/javascript.
- Without type -
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

### Types of functional component rendering -
- `<FunctionalComponent />` - A self-closing tag used in JSX for components without children. It's concise and indicates an empty element.

- `<FunctionalComponent></FunctionalComponent>` - Opening and closing tags used in JSX for components with children. The content goes between these tags.

Both render the same component, but the choice depends on whether the component has children elements or not. Use <`FunctionalComponent />` for no children and `<FunctionalComponent></FunctionalComponent>` for children.

#### Example -

```jsx
<FunctionalComponent /> // Renders component without children

<FunctionalComponent>
  <p>Child Element</p>
</FunctionalComponent> // Renders component with children
```

---

## What is props?
In React, "props" (short for properties) are a way to pass data from a parent component to a child component. They are read-only and help to make your components more dynamic and reusable.

**Using Props** -
- Passing Props - You pass props to a component when you use that component in JSX.
- Receiving Props - In the child component, you can access the passed props as an object.

#### Example -
Suppose we have a Person component that takes a name prop -
```jsx
// ParentComponent.js
import React from 'react';
import Person from './Person';

const ParentComponent = () => {
  return <Person name="Alice" />;
};
```
```jsx
// Person.js (Child Component)
import React from 'react';

const Person = (props) => {
  return <p>Hello, {props.name}!</p>;
};

export default Person;
```

- In ParentComponent, we use <Person name="Alice" /> to render the Person component and pass it a prop named name with the value "Alice".
- In Person, we receive props as an object. We access the name prop using props.name to display the name.
**Benefits of Props** -
- Dynamic - Props allow components to be dynamic, as they can receive different data each time they are used.
- Reusable - Components can be reused with different data, making your code more modular.
- Passing Data Down - Props flow in one direction, from parent to child, which helps maintain a unidirectional data flow in React applications.
**Modifying Props** -
Props are read-only. This means that inside a component, you cannot directly modify the props passed to it. If you need to modify the data, you should do so in the parent component and pass the modified data as a new prop.

#### Example -
- In `ParentComponent`, we use `<Person name="Alice" />` to render the `Person` component and pass it a prop named `name` with the value "`Alice`".
- In `Person`, we receive `props` as an object. We access the `name` prop using `props.name` to display the name.
**Benefits of Props** -
- Dynamic - Props allow components to be dynamic, as they can receive different data each time they are used.
- Reusable - Components can be reused with different data, making your code more modular.
- Passing Data Down - Props flow in one direction, from parent to child, which helps maintain a unidirectional data flow in React applications.
**Modifying Props** -
Props are read-only. This means that inside a component, you cannot directly modify the props passed to it. If you need to modify the data, you should do so in the parent component and pass the modified data as a new prop.

#### Example -
If you want to modify the `name` in the `Person` component, you would do it in `ParentComponent` and pass the modified name as a prop -
```jsx
// ParentComponent.js
import React from 'react';
import Person from './Person';

const ParentComponent = () => {
  const modifiedName = "Bob";
  return <Person name={modifiedName} />;
};
```
```jsx
// Person.js (Child Component)
import React from 'react';

const Person = (props) => {
  return <p>Hello, {props.name}!</p>;
};

export default Person;
```
Now, the Person component will receive the modified name as a prop and display "Hello, Bob!".

---

## What is Config-driven UI?
"Config-driven UI" refers to a design approach where the user interface (UI) and its behavior are primarily controlled and defined by configuration data rather than hard-coded logic. This means that instead of writing code to define how the UI looks and behaves, developers use configuration files or data structures to specify these aspects. The UI components interpret this configuration data to render the appropriate UI elements and handle interactions.

**Key Concepts** -
- Configuration Data - This includes settings, rules, and parameters that define the UI components, their layout, styling, behavior, and other properties.
- Separation of Concerns - Config-driven UI design promotes a clear separation between the UI logic and the configuration data. Developers focus on creating reusable UI components, while designers or product managers configure how these components should behave.

**Advantages** -
- Flexibility - Changes to the UI can be made without modifying the code. This allows for rapid prototyping and easier customization.
- Reusable Components - UI components are designed to be highly reusable since they are configured through data. This promotes a consistent design language across an application or platform.
- Easier Maintenance - Developers can focus on building robust, well-tested UI components, while configuration changes can be managed separately.

Config-driven UI is useful for projects needing flexible, customizable interfaces without frequent code changes. It's commonly used in content management systems, data-driven applications, and platforms with dynamic UI requirements.

---

## .js vs .jsx
**.js Extension** -
- Components written in JSX can be saved with a .js extension.
- Requires a babel setup to transpile JSX to JavaScript.
- No explicit indication that the file contains JSX code.
- More common in older React projects or projects with different conventions.

**.jsx Extension** -
- Components written in JSX can also be saved with a .jsx extension.
- Typically used to explicitly indicate that the file contains JSX code.
- Some developers prefer this for clarity and organization in React projects.

**Usage** -
- Both extensions work perfectly fine in React projects.
- If your project has a babel setup to transpile JSX to JavaScript (which is common in most React projects), then both .js and .jsx files will be compiled correctly.
- The choice between .js and .jsx is often a matter of personal or project convention. Some projects use .js for all JavaScript files, while others use .jsx specifically for files containing JSX code for clarity.

**Bundlers and JSX Extensions** -
- Webpack - Supports both .js and .jsx files. Can handle JSX syntax within .js files.
- Parcel - Similar to Webpack, it supports both extensions and can transpile JSX within .js files.
- Rollup - Rollup also supports JSX syntax within .js files without requiring the .jsx extension.
- Vite - Vite, by default, does not allow JSX syntax within .js files. The preferred and recommended convention within the Vite community is to use .jsx for files with JSX code. This is enforced by Vite's default configuration.

---

## Named Export/Import vs Default Export/Import -
### Exporting in ES6 Modules -
**Named Export** -
- Syntax - `export` keyword followed by the variable, function, or class name.
- Usage - Allows you to export multiple functions, variables, or classes from a module.
#### Example -
```jsx
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
**Default Export** -
- Syntax - `export default` followed by the variable, function, or class.
- Usage - Used for a single default export per module. Can be imported with any name.
##### Example -
```jsx
// utils.js
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export default capitalize;
```
### Importing in ES6 Modules -
**Named Import** -
- Syntax - `import { name } from 'module';`
- Usage  Imports specific variables, functions, or classes from a module.
#### Example -
```jsx
// main.js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```
**Default Import** -
- Syntax - `import name from 'module';`
- Usage - Imports the default export from a module. The name can be anything.
#### Example -
```jsx
// main.js
import capitalize from './utils.js';
console.log(capitalize('hello')); // "Hello"
```
---

## Best Practice for Hardcoded Data in React Components -
It is considered a best practice to avoid hardcoding data directly into React component files. Instead, it's recommended to store such data in a separate `constants.jsx` (or similar) file. Here's why -

**Separation of Concerns** -
- Clarity and Organization - Keeping data separate from components improves code readability and organization. Components focus on rendering UI, while constants files handle data.
**Reusability** -
- Modular Approach - Constants files can be reused across multiple components, promoting a more modular code structure.
- Centralized Data - Storing data in a centralized location makes it easier to update and maintain.
**Maintainability** -
- Easier Updates - When data needs to change, you only need to update the constants file, not individual components.
- Code Consistency - Ensures that the same data is used consistently throughout the application.

#### Example of some hardcoded values -
-Text Content
  - Titles
  - Labels
  - Error Messages
  - Placeholder Text
- Styling and Theme
  - Colors
  - Font Sizes
- Configuration
  - API URLs
  - Default Settings
- Form Validation Rules
  - Regular Expressions
  - Validation Messages
- Navigation Links
  - Route Paths
- Icons and Images
  - Icon URLs
  - Image Paths
-Default Values
  - Default state values for components
-Roles and Permissions
  - User Roles

---

## useState and useEffect Hooks -
**useState Hook** -
- Purpose - Used to add state management to functional components in React.
- Syntax - `const [state, setState] = useState(initialState);`
  - `state` - The current state value.
  - `setState` - Function to update the state.
  - `initialState` - Initial value of the state.
- Usage -
  - Initializes a piece of state (`state`) with an initial value (`initialState`).
  - Returns an array with the current state value and a function to update that state (`setState`).
  - When `setState` is called with a new value, it triggers a re-render of the component with the updated state.
#### Example -
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
**useEffect Hook** -
- Purpose - Used to perform side effects in functional components.
- Syntax - `useEffect(() => { // effect }, [dependencies]);`
  - `() => { // effect }` - Function to be executed.
  - `[dependencies]` - Optional array of dependencies. If any of these dependencies change, the effect will re-run.
- Usage -
  - Mimics lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
  - Runs after every render by default.
  - Allows managing side effects like data fetching, subscriptions, DOM manipulation, etc.
#### Example -
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]); // Runs whenever 'seconds' changes

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}
```

---

## What is Reconciliation Algorithm -

React uses a process called "reconciliation" to efficiently update the user interface when the underlying data changes. Reconciliation is the algorithm React uses to compare the current tree of React elements (virtual DOM) with the previous one and determine the minimum number of changes needed to update the actual DOM. Here's an overview of the reconciliation algorithm in React -

Reconciliation Steps -

**Render Virtual DOM** -
- When a component's state or props change, React re-renders the component and generates a new tree of React elements (virtual DOM).

**Diffing** -
- React compares the new virtual DOM tree with the previous one to find the differences or changes.
- It does this by a process called "diffing" or "reconciliation".

**Keyed Elements** -
- React uses "keys" to identify elements in lists. Keys help React identify which items have changed, are added, or removed.
- Keys should be unique among sibling elements and should remain consistent across renders. They help React optimize updates by identifying elements uniquely.

**Update Strategy** -
- React's diffing algorithm minimizes DOM updates by -
  - Inserting New Elements - Elements that are new are added to the DOM.
  - Updating Changed Elements - Elements that have changed are updated in place.
  - Removing Unused Elements - Elements that are no longer present are removed from the DOM.
  - Reordering Elements - Elements that have moved are reordered without recreating them.

**Component Reconciliation** -
- React compares components in the new tree with those in the previous tree.
- If a component type remains the same, React updates the props of the existing component.
- If a component type changes, React unmounts the old component and mounts the new one.

**Child Component Reconciliation** -
- React compares the children of components using their keys.
- If a child has a key that matches the previous tree, React updates the child.
- If a child does not have a matching key, React treats it as a new child or a removed child based on its position.

**Benefits of Reconciliation** -
- Efficiency - React's reconciliation algorithm reduces the number of DOM manipulations, improving performance.
- Optimization - Using keys and a smart diffing strategy, React minimizes the impact of updates, resulting in faster rendering.
- Consistency - Reconciliation ensures that the UI stays in sync with the underlying data changes, providing a consistent user experience.

React's reconciliation algorithm is a key part of what makes React efficient and performant, especially in applications with dynamic and frequently changing data. It allows developers to write declarative code while React takes care of updating the DOM efficiently.

## React Fiber -

React Fiber is an internal reimplementation of the React core algorithm, introduced in React version 16. It's a complete rewrite of React's reconciliation and rendering engine, designed to improve the performance and capabilities of React applications. Here's an overview of React Fiber architecture -

**Goals of React Fiber** -
- Improved Performance - React Fiber aims to provide better performance, especially for large and complex applications.
- Concurrency - It introduces the concept of time-slicing and allows for more granular control over rendering priorities. This enables better handling of concurrent updates and smoother user experiences.
- Better Animation Support - With Fiber, React can pause and resume rendering work, making it easier to implement smooth animations without blocking the main thread.
- Error Boundaries - Fiber enhances error handling by introducing error boundaries, which capture errors in the component tree and prevent them from crashing the entire app.
**Key Concepts** -
- Fiber Nodes - Fiber introduces the concept of "fiber nodes" to represent elements in the React tree. Each component is associated with a fiber node.
- Work Units - React Fiber breaks down the work into smaller units called "work units" or "fibers". These fibers represent individual units of work that can be paused, resumed, and prioritized.
- Scheduling - Fiber allows React to schedule and prioritize which work to perform when. It enables asynchronous rendering, where React can pause work on less critical tasks to prioritize more important updates.
- Time Slicing - React Fiber enables time slicing, which is the ability to split rendering work into chunks and prioritize based on the available time. This helps in achieving smoother user interactions and animations.
- Reconciliation - The reconciliation process in Fiber is incremental and can be interrupted and resumed. This means React can efficiently update the DOM in smaller chunks, improving perceived performance.
- Error Boundaries - Fiber introduces error boundaries, which are components that catch JavaScript errors anywhere in their child component tree and log those errors, preventing the entire app from crashing.
**Benefits** -
- Improved Performance - React Fiber's ability to prioritize and schedule work leads to improved rendering performance, especially in complex applications.
- Concurrent Rendering - Fiber allows React to work on multiple tasks concurrently, making the app more responsive.
- Smarter Rendering - With time slicing, React can make better decisions about when to render and update the UI, resulting in smoother animations and interactions.
**Error Handling** - Error boundaries improve the stability of React apps by isolating errors and preventing them from crashing the entire app.

## The Virtual DOM (Document Object Model) -

The Virtual DOM (Document Object Model) is a concept used in React and other modern JavaScript libraries/frameworks to improve performance and efficiency when updating the user interface.

**What is the Virtual DOM?**
- Representation - The Virtual DOM is a lightweight copy of the actual DOM.
- In-Memory - It's an in-memory representation of the UI components and their hierarchy.
- React Elements - Each React element corresponds to a node in the Virtual DOM tree.
- Not Rendered - The Virtual DOM is not rendered to the screen.
- Efficiency - It allows React to do all the necessary computations and updates in this virtual representation first.

**How Does it Work?**
- Initial Render -
  - When a component is initially rendered or updated, React creates a Virtual DOM tree by traversing the React elements in the component tree.
- Comparison -
  - When there's a change in the component state or props, a new Virtual DOM tree is created.
- Diffing -
  - React then compares the new Virtual DOM tree with the previous one (old Virtual DOM).
  - It identifies the differences or "diffs" between the two trees.
- Minimal Updates -
  - Instead of directly updating the actual DOM, React determines the minimum number of DOM operations needed to bring the actual DOM in sync with the new Virtual DOM.
- Updating the DOM -
  - React updates only the parts of the actual DOM that have changed based on the diffs.
  - This process is more efficient than directly manipulating the entire DOM for every change.
- Batched Updates -
  - React often batches multiple updates together, further optimizing the rendering process.

**Benefits** -
- Performance - Since operations are performed on the lightweight Virtual DOM instead of the actual DOM, React can perform updates more efficiently.
- Efficiency - React computes the most efficient way to update the actual DOM, minimizing unnecessary DOM manipulations.
- Prevent Re-rendering - React can prevent unnecessary re-renders of components by comparing changes at the Virtual DOM level first.
- Cross-Platform - The Virtual DOM abstraction helps React maintain consistency across different platforms and browsers.

**Limitations** -
- Memory Overhead - Storing an additional Virtual DOM tree consumes memory, but the trade-off is usually worth the performance gains.
- Initial Render Cost - The initial creation of the Virtual DOM tree can be costly, especially for complex applications.
- Learning Curve - Understanding the Virtual DOM concept and its benefits may require some learning for developers new to React.

---

## Monolithic Architecture vs Microservices Architecture
**Monolithic Architecture** -
- Single Unit - Monolithic architecture is a traditional software design pattern where the entire application is built as a single, self-contained unit.
- Components - All components of the application, such as the user interface, business logic, and data access layers, are tightly coupled and packaged together.
- Deployment - The entire application is deployed as a single unit on a server.

**Advantages** -
- Simplicity - Easier to develop and test since everything is in one place.
- Deployment - Single deployment unit makes it straightforward to deploy.
- Performance - Direct function calls between components can be more efficient.

**Disadvantages** -
- Scalability - Difficult to scale as the entire application needs to be scaled.
- Flexibility - Changes to one part of the application may require redeploying the entire monolith.
- Technology Stack - Limited choice of technologies as all components must use the same stack.

**Microservices Architecture** -
- Decomposed Services - Microservices architecture breaks down an application into smaller, independent services, each responsible for a specific business function.
- Services - Each service is developed, deployed, and maintained independently.
- Decentralized Data - Each service manages its own data storage, which can be a different database or technology.
- Communication - Services communicate with each other over well-defined APIs, often using lightweight protocols like HTTP or message queues.

**Advantages** -
- Scalability - Each service can be scaled independently based on its needs.
- Flexibility - Easier to modify and update as changes can be made to individual services without affecting the entire application.
- Technology Diversity - Allows the use of different technologies for different services based on their requirements.

**Disadvantages** -
- Complexity - Managing multiple services can be complex and requires careful coordination.
- Communication Overhead - Inter-service communication can introduce latency and complexity.
- Testing - End-to-end testing can be challenging due to the distributed nature of microservices.

---

## Shimmer UI -
**Definition** -
- Placeholder Loading Effect - Shimmer UI is a visual loading effect used in user interfaces to indicate that content is loading.

**Characteristics** -
- Animated Gradient - Typically, it consists of an animated gradient moving across a placeholder area.
- Simulates Activity - Gives the illusion of content being loaded, providing a more engaging user experience than static loading spinners.
- Subtle Animation - The animation is usually subtle and smooth, preventing users from feeling like the interface is frozen.

**Benefits** -
- User Engagement - Keeps users engaged by showing that something is happening in the background.
- Perceived Performance - Improves perceived performance, making the app feel faster even during loading times.
- Polished Appearance - Adds a polished and modern touch to the UI.

**Use Cases** -
- List Items: Often used in lists or grids where multiple items are loading.
- Image Loading: Used for images to show placeholders while the actual images are loading.
- Forms: Placeholder loading effects can be used in forms for input fields.

---

## React Router DOM -
**Routing Library** - `react-router-dom` is a popular library in React for handling routing and navigation in web applications.
**Single Page Applications (SPA)** - Designed for SPAs where the content is dynamically loaded on the same page without full page refreshes.
**Key Features** -
- Declarative Routing - Allows defining routes using JSX components.
- Dynamic Rendering - Renders components based on the URL.
- Nested Routes - Supports nested route configurations.
- History Management - Keeps track of browser history for back and forward navigation.
- URL Parameters - Easily extract and use URL parameters.
- Redirects - Implements redirects to different routes.
- Programmatic Navigation - Allows navigation through code.

**Installation** -
`npm install react-router-dom`

#### Usage Example -
```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```
**Components** -
`<Router>` - Wraps the application and provides routing functionality.
`<Route>` - Represents a route and renders a component based on the URL.
`<Switch>` - Renders the first child `<Route>` or `<Redirect>` that matches the URL.
`<Link>` - Creates links to navigate between routes.
`<Redirect>` - Redirects the user to another route.

**Benefits** -
- Simple Configuration - Easy to define routes and render components.
- History Handling - Manages browser history for smooth navigation.
- Dynamic Routing - Components render based on the URL, enabling dynamic content loading.

**Summary** -
`react-router-dom` is a powerful library for adding routing and navigation to React applications. It provides components and utilities to easily manage different views, handle navigation, and create dynamic SPAs with smooth transitions between pages.

### `createBrowserRouter`
This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
It also enables the v6.4 data APIs like loaders, actions, fetchers and more.

#### `routes`
An array of `Route` objects with nested routes on the `children` property.
```jsx
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "events/:id",
        element: <Event />,
        loader: eventLoader,
      },
    ],
  },
]);
```

### `<RouterProvider>`
All data router objects are passed to this component to render your app and enable the rest of the data APIs.
```jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    fallbackElement={<BigSpinner />}
  />
);
```

### `<Outlet>`
An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
```

#### Example Code -
```jsx
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
```

### `<Link>`
A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `<Link>` work as you'd expect. You can use `<Link reloadDocument>` to skip client side routing and let the browser handle the transition normally (as if it were an `<a href>`).
```jsx
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
A relative `<Link to>` value (that does not begin with `/`) resolves relative to the parent route, which means that it builds upon the URL path that was matched by the route that rendered that` <Link>`. It may contain `..` to link to routes further up the hierarchy. In these cases, `..` works exactly like the command-line `cd` function; each `..` removes one segment of the parent path.

**Note** - `<Link to>` with a `..` behaves differently from a normal `<a href>` when the current URL ends with `/`. `<Link to>` ignores the trailing slash, and removes one URL segment for each `..`. But an `<a href>` value handles `..` differently when the current URL ends with `/` vs when it does not.

---

## Types of Routing -
In web applications, there are two main types of routing -

**Client-Side Routing** -
- Type - Also known as single-page application (SPA) routing.
- Handling - Entirely managed on the client-side, typically using JavaScript frameworks/libraries like React, Vue.js, or Angular.
- Characteristics -
  - No Page Reload - When a user navigates to different views or pages, the URL changes but the page does not fully reload.
  - Dynamic Content - Allows for dynamic content loading without refreshing the entire page.
  - History Management - Libraries like react-router-dom, vue-router, or @angular/router manage browser history and state changes.
- Benefits -
- Improved Performance - Faster navigation as only components are swapped, not entire pages.
- Smooth User Experience - Seamless transitions between views.
- Optimized for SPAs - Ideal for single-page applications where content changes dynamically.

Example - React Router, Vue Router, Angular Router.

**Server-Side Routing** -
- Type - Traditional web page routing.
- Handling - The server determines the content to be displayed based on the URL requested by the client.
- Characteristics -
  - Full Page Reload - Each navigation request results in a full reload of the page.
  - Static Pages - Web server serves static HTML files for each page.
  - Less Dynamic - More suitable for static or less dynamic websites.
  - URL Mapping - URLs map directly to physical files or routes on the server.
- Benefits -
  -Search Engine Optimization (SEO): Easier for search engines to crawl and index pages.
  -Clear URL Structure: URLs directly represent the page being accessed.
  -Traditional Web: Fits well with traditional multi-page websites.
  
Example - PHP routing, Node.js with Express.js routing, Ruby on Rails routing.

## What is dynamic route?
A dynamic route in web development refers to a route or URL pattern that includes dynamic segments. These segments are variable parts of the URL that can change, allowing for more flexible and dynamic navigation within an application. In React Router or similar routing libraries, dynamic routes are often defined using parameters in the route path.

**Characteristics** -
- Variable Segments - Dynamic routes have segments that are not fixed and can change based on user input or data.
- Parameterized - Parameters are used to capture these dynamic segments from the URL.
- Flexible - Enables handling various data based on the dynamic part of the URL.
- Example - Consider a blog application where each blog post has a unique ID. The URL structure for a dynamic route might be `/blog/:postId`, where `:postId` is a placeholder for the actual ID of the blog post.

#### Example -
**Route Definition** -
```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <Route path="/blog/:postId" component={Post} />
    </Router>
  );
}
```
**Accessing Parameters in Component** -
```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  let { postId } = useParams();

  return <div>Post ID: {postId}</div>;
};

export default Post;
```
### `useParams` -
The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.
```jsx
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}
```

---